import * as React from 'react';
//import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import { ICabaModuleProps } from '../../Services/interface/ICabaModuleProps';
import styles from './CabaAdminModule.module.scss';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { DetailsList, SelectionMode, MarqueeSelection, IColumn, Checkbox, SearchBox, Selection, DetailsListLayoutMode, Fabric, TextField, DefaultButton, PrimaryButton, MessageBar, DatePicker, Dropdown, IDropdownOption, Icon, Dialog, DialogFooter, DialogType, Spinner, SpinnerSize, } from 'office-ui-fabric-react';
import { Pivot, PivotItem, IPivotItemProps, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css");
import useSPCRUD, { ISPCRUD } from '../../Services/bal/spcrud';
import CabaMasterOps from '../../Services/bal/CabaMastersOps';
import { IEximCabaProps } from '../../Services/interface/IEximCabaProps';
import { IRankingMaster } from '../../Services/interface/IRankigMaster';
import CABAReqOps from '../../Services/bal/CABAReqOps';
import { IEmployee } from '../../Services/interface/IEmployee';
import EmployeeOps from '../../Services/bal/EmployeeOps';
import { Item } from 'sp-pnp-js';
import Utilities from '../../Services/bal/utilities';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ICabaAdminReport } from '../../Services/interface/ICabaAdminReport';
import Pagination from 'office-ui-fabric-react-pagination';
let spCrudObj: ISPCRUD;
export default class CabaAdminModule extends React.Component<ICabaModuleProps> {

  //}

  //export default class CABAAdminDashboards extends React.Component<ICabaModuleProps> {
  private FlatSpecifications: IDropdownOption[] = [];
  private FlatTypes: IDropdownOption[] = [];
  private OccupancyType: IDropdownOption[] = [];
  private SocietyName: IDropdownOption[] = [];
  private officeLocation: IDropdownOption[] = [];
  private columns: IColumn[];
  private columnsRanking: IColumn[];
  private columReport: IColumn[];

  private transfer: IDropdownOption[] = [
    { key: 'Yes', text: 'Yes' },
    { key: 'No', text: 'No' },
  ];

  private PublishGetTemp: IEximCabaProps = {
    ID: "", EmployeeName: "", GradeorScale: 0,
    FlatSpecifications: "", FlatType: "", SocietyName: "", Wing: "", FlatNo: "", OccupancyType: "", ActiveStatus: "",
    CABAFlatID: "", OfficeLocation: "", AssignedTo: "", AssignedDate: "", EndDate: "", AssignedBy: "", Occupied: "",
    Publish: ""
  };

  public state = {
    isDialogVisible: false,
    isDialogRankingVisible: false,
    Submitted: false,
    cabaAdminData: [],
    originalData: [],
    cabaRankDashboard: [],
    flatSpecifications: "",
    flatTypes: "",
    societyName: "",
    occupancyType: "",
    officeLocation: "",
    wing: "",
    flatNo: "",
    EmployeeID: "",
    EmployeeCode: "",
    DateofJoiningAppointment: new Date(),
    Seniority: '',
    Transfer: '',
    YearofServiceinPresentGrade: '',
    Spouse: '',
    Total: '',
    Rank: '',
    Designation: '',
    checkboxItemPublish: this.PublishGetTemp,
    publisbtnhideshow: false,
    searchQuery: "",
    cabaAdminReport: [],
    AllEmployees: []
  }
  constructor(props: ICabaModuleProps) {
    super(props);
    this.state = {
      isDialogVisible: false,
      isDialogRankingVisible: false,
      Submitted: false,
      cabaAdminData: [],
      originalData: [],
      cabaRankDashboard: [],
      flatSpecifications: "",
      flatTypes: "",
      societyName: "",
      occupancyType: "",
      officeLocation: "",
      wing: "",
      flatNo: "",
      EmployeeID: "",
      EmployeeCode: "",
      DateofJoiningAppointment: new Date(),
      Seniority: '',
      Transfer: '',
      YearofServiceinPresentGrade: '',
      Spouse: '',
      Total: '',
      Rank: '',
      Designation: '',
      checkboxItemPublish: this.PublishGetTemp,
      publisbtnhideshow: false,
      searchQuery: "",
      cabaAdminReport: [],
      AllEmployees: []
    };

    this.columns = [
      {
        key: 'CABAFlatID',
        name: 'CABAFlatID',
        fieldName: 'CABAFlatID',
        minWidth: 100,
        maxWidth: 100,
        isResizable: true
      },
      {
        key: 'FlatSpecifications',
        name: 'Flat Specifications',
        fieldName: 'FlatSpecifications',
        minWidth: 150,
        maxWidth: 150,
        isResizable: true
      },
      {
        key: 'FlatType',
        name: 'Flat Type',
        fieldName: 'FlatType',
        minWidth: 100,
        maxWidth: 100,
        isResizable: true
      },
      {
        key: 'SocietyName',
        name: 'Society Name',
        fieldName: 'SocietyName',
        minWidth: 150,
        maxWidth: 150,
        isResizable: true
      },
      {
        key: 'Wing',
        name: 'Wing',
        fieldName: 'Wing',
        minWidth: 70,
        maxWidth: 70,
        isResizable: true
      },
      {
        key: 'FlatNo',
        name: 'Flat No',
        fieldName: 'FlatNo',
        minWidth: 70,
        maxWidth: 70,
        isResizable: true
      },
      {
        key: 'OccupancyType',
        name: 'Occupancy Type',
        fieldName: 'OccupancyType',
        minWidth: 100,
        maxWidth: 150,
        isResizable: true
      },
      {
        key: 'AssignedTo',
        name: 'Assigned To',
        fieldName: 'AssignedTo',
        minWidth: 100,
        maxWidth: 100,
        isResizable: false
      },
      {
        key: 'Occupied',
        name: 'Occupied',
        fieldName: 'Occupied',
        minWidth: 100,
        maxWidth: 100,
        isResizable: false
      },
      {
        key: 'Publish',
        name: 'Publish',
        fieldName: 'Publish',
        minWidth: 100,
        maxWidth: 100,
        isResizable: false,
        onRender: (item: any, index: number, columns: IColumn) => {
          const ItemId = item['ID'];
          if (item['Publish'] == 'No') {
            return <Checkbox onChange={() => this._onChange(item)} />
          }
          else {
            return (
              <div>
                Yes
              </div>
            );
          }

        }
      }

    ]

    this.columnsRanking = [
      {
        key: 'EmployeeCode',
        name: 'Employee Code',
        fieldName: 'EmployeeCode',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: 'Designation',
        name: 'Designation',
        fieldName: 'Designation',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: 'DateofJoiningAppointment',
        name: 'Date of Joining/Appointment',
        fieldName: 'DateofJoiningAppointment',
        onRender: (item) => {
          const EndDate = new Date(item.DateofJoiningAppointment);
          const formattedDate = EndDate.toLocaleDateString('en-GB');
          return <span>{formattedDate}</span>;
        },
        minWidth: 200,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: 'Seniority',
        name: 'Seniority',
        fieldName: 'Seniority',
        minWidth: 100,
        maxWidth: 100,
        isResizable: true
      },
      {
        key: 'Transfer',
        name: 'Transfer',
        fieldName: 'Transfer',
        minWidth: 100,
        maxWidth: 100,
        isResizable: true
      },
      {
        key: 'YearofServiceinPresentGrade',
        name: 'Year of Service in Present Grade',
        fieldName: 'YearofServiceinPresentGrade',
        minWidth: 100,
        maxWidth: 100,
        isResizable: true
      },
      {
        key: 'Spouse',
        name: 'Spouse',
        fieldName: 'Spouse',
        minWidth: 100,
        maxWidth: 100,
        isResizable: true
      },
      {
        key: 'Total',
        name: 'Total',
        fieldName: 'Total',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: 'Rank',
        name: 'Rank',
        fieldName: 'Rank',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      }
      // ,

      // {
      //     key: 'ID', name: 'Action',fieldName: 'ID', minWidth: 100, isResizable: true,
      //     onRender: (item:any, index:number, columns:IColumn) => {
      //     //   const ItemId = item['ID'];
      //     const Items = item;
      //       return<div> 
      //     <Link><Icon iconName='Edit' /></Link>

      //       </div>;
      //     }
      // }

    ]
    this.columReport = [
      {
        key: 'CABAFlatID',
        name: 'CABAFlatID',
        fieldName: 'CABAFlatID',
        minWidth: 100,
        maxWidth: 100,
        isResizable: true
      },
      {
        key: 'FlatSpecifications',
        name: 'Flat Specifications',
        fieldName: 'FlatSpecifications',
        minWidth: 150,
        maxWidth: 150,
        isResizable: true
      },
      {
        key: 'FlatType',
        name: 'Flat Type',
        fieldName: 'FlatType',
        minWidth: 100,
        maxWidth: 100,
        isResizable: true
      },
      {
        key: 'SocietyName',
        name: 'Society Name',
        fieldName: 'SocietyName',
        minWidth: 150,
        maxWidth: 150,
        isResizable: true
      },
      {
        key: 'Wing',
        name: 'Wing',
        fieldName: 'Wing',
        minWidth: 70,
        maxWidth: 70,
        isResizable: true
      },
      {
        key: 'FlatNo',
        name: 'Flat No',
        fieldName: 'FlatNo',
        minWidth: 70,
        maxWidth: 70,
        isResizable: true
      },
      {
        key: 'OccupancyType',
        name: 'Occupancy Type',
        fieldName: 'OccupancyType',
        minWidth: 100,
        maxWidth: 150,
        isResizable: true
      },
      {
        key: 'AssignedTo',
        name: 'Assigned To',
        fieldName: 'AssignedTo',
        minWidth: 100,
        maxWidth: 100,
        isResizable: false
      },
      {
        key: 'Occupied',
        name: 'Occupied',
        fieldName: 'Occupied',
        minWidth: 100,
        maxWidth: 100,
        isResizable: false
      },
      {
        key: 'DateofJoiningAppointment',
        name: 'Date of Joining/Appointment',
        fieldName: 'DateofJoiningAppointment',
        onRender: (item) => {
          const EndDate = new Date(item.DateofJoiningAppointment);
          const formattedDate = EndDate.toLocaleDateString('en-GB');
          return <span>{formattedDate}</span>;
        },
        minWidth: 200,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: 'EmpCode',
        name: 'EmpCode',
        fieldName: 'EmpCode',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: 'Designation',
        name: 'Designation',
        fieldName: 'Designation',
        minWidth: 100,
        maxWidth: 200,
        isResizable: true
      },
      {
        key: 'Publish',
        name: 'Publish',
        fieldName: 'Publish',
        minWidth: 100,
        maxWidth: 100,
        isResizable: false,
        onRender: (item: any, index: number, columns: IColumn) => {
          const ItemId = item['ID'];
          if (item['Publish'] == 'No') {
            return <Checkbox onChange={() => this._onChange(item)} />
          }
          else {
            return (
              <div>
                Yes
              </div>
            );
          }

        }
      }

    ]



  }//end constructor    
  async componentDidMount() {
    this.getEmployeeData();
    await this.cabaAdminDashboard();
    await this.cabaRankDashboard();
    await this.cabaAdminReport();
    // this.cabaDesignation();

    // this.getExporttoExcel().then((response: IEximCabaProps[]) => {
    //   let result: IEximCabaProps[] = [];
    //   response.forEach(element => {
    //     result.push({
    //       ID: element.ID,
    //       CABAFlatID: element.CABAFlatID,
    //       EmployeeName: element.EmployeeName,
    //       FlatSpecifications: element.FlatSpecifications,
    //       FlatType: element.FlatType,
    //       SocietyName: element.SocietyName,
    //       Wing: element.Wing,
    //       FlatNo: element.FlatNo,
    //       OccupancyType: element.OccupancyType,
    //       ActiveStatus: element.ActiveStatus,
    //       OfficeLocation: element.OfficeLocation,
    //       AssignedTo: element.AssignedTo,
    //       Occupied: element.Occupied,
    //       Publish: element.Publish
    //     });
    //   });
    //   this.setState({ cabaAdminData: result });

    // });


  }

  getEmployeeData = async (): Promise<IEmployee> => {
    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);
    return await EmployeeOps().getEmployee(this.props).then(brrResults => {
      this.setState({
        EmployeeID: brrResults.Title,
        EmployeeName: (brrResults.FirstName + ' ' + brrResults.LastName),
        EmployeeCode: brrResults.EmployeeTitle,

      });
      return brrResults;
    });
  };

  cabaAdminDashboard = async () => {
    try {
      const spCrudObj = await useSPCRUD();
      this.setState(spCrudObj);
      const brrResults = await CABAReqOps().getCABAAdminData(this.props);
      this.setState({
        cabaAdminData: brrResults,
        originalData: brrResults
      });
      //return brrResults;
    } catch (error) {
      console.error("Error fetching CABA Admin Data: ", error);
    }
  }
  cabaAdminReport = async () => {
    try {
      
      if (this.state.cabaAdminData != null && this.state.cabaRankDashboard != null) {
        //let reportObjectArray:ICabaAdminReport[] = new ;
        let reportObjectArray: Array<ICabaAdminReport> = new Array<ICabaAdminReport>();
        
        this.state.cabaAdminData.forEach(adminData => {
          let reportObject: ICabaAdminReport = {
            AuthorId: "",
            key: 0,
            ID: "",
            EmployeeName: "",
            GradeorScale: 0,
            FlatSpecifications: "",
            FlatType: "",
            SocietyName: "",
            Wing: "",
            FlatNo: "",
            OccupancyType: "",
            ActiveStatus: "",
            CABAFlatID: "",
            OfficeLocation: "",
            AssignedTo: "",
            AssignedToTitle: "",
            AssignedDate: "",
            EndDate: "",
            AssignedBy: "",
            Occupied: "",
            EmpCode: "",
            Location: "",
            Grade: "",
            Designation: "",
            Group: "",
            latestRank: "",
            Publish: "",
            DateofJoiningAppointment: "",
            Rank: ""
          };
          reportObject.ID = adminData.ID;
          reportObject.CABAFlatID = adminData.CABAFlaID;
          reportObject.FlatSpecifications = adminData.FlatSpecifications;
          reportObject.FlatType = adminData.FlatType;
          reportObject.SocietyName = adminData.SocietyName;
          reportObject.Wing = adminData.Wing;
          reportObject.FlatNo = adminData.FlatNo;
          reportObject.OccupancyType = adminData.OccupancyType;
          reportObject.ActiveStatus = adminData.ActiveStatus;
          reportObject.CABAFlatID = adminData.CABAFlatID;
          reportObject.OccupancyType = adminData.OccupancyType;
          reportObject.OfficeLocation = adminData.OfficeLocation;
          reportObject.AssignedTo = adminData.AssignedTo;
          reportObject.Occupied = adminData.Occupied;
          reportObject.Publish = adminData.Publish;
          reportObject.EmpCode = adminData.EmpCode;
          reportObject.Location = adminData.OfficeLocation;
          reportObject.EmployeeName = adminData.AssignedTo;
          let objectRank = this.state.cabaRankDashboard.filter(object => object.EmployeeCode == adminData.EmpCode);
          if (objectRank && objectRank.length > 0) {
            reportObject.DateofJoiningAppointment = objectRank[0].DateofJoiningAppointment;
            reportObject.Designation = objectRank[0].Designation;
            reportObject.Rank = objectRank[0].Rank;
          }
          else {
            reportObject.DateofJoiningAppointment = "";
            reportObject.Designation = "";
            reportObject.Rank = "";

          }
          reportObjectArray.push(reportObject);
        });
        //console.log(reportObjectArray);
        this.setState({ cabaAdminReport: reportObjectArray,originalData: reportObjectArray });
        console.log(this.state.cabaAdminReport);
      }

    } catch (error) {
      console.error("Error fetching CABA Admin Data: ", error);
    }
  }

  private getExporttoExcel = async () => {
    const items: IEximCabaProps[] = await CABAReqOps().getCABAAdminData(this.props);
    //console.log(items);
    return items;
  }

  downloadExcel = () => {
    //const { cabaAdminData } = this.state.cabaAdminReport;
    //const worksheet = XLSX.utils.json_to_sheet(cabaAdminData);
    const worksheet = XLSX.utils.json_to_sheet(this.state.cabaAdminReport);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Flate Master');
    XLSX.writeFile(workbook, 'FlatMaser.xlsx');
    console.log('You downloaded the Excel file');
  };


  cabaRankDashboard = async () => {
    try {
      const spCrudObj = await useSPCRUD();
      this.setState(spCrudObj);
      const brrResults = await CABAReqOps().getRankingMasterData(this.props);
      this.setState({ cabaRankDashboard: brrResults });
      return brrResults;
    } catch (error) {
      console.error("Error fetching CABA Admin Data: ", error);
    }
  }

  // cabaDesignation = async() =>{
  //   debugger;
  //   try {
  //     const spCrudObj = await useSPCRUD();
  //     this.setState(spCrudObj);
  //     const brrResults = await CabaMasterOps().getDesignation(this.props);
  //     return brrResults;
  // } catch (error) {
  //     console.error("Error fetching CABA Admin Data: ", error);
  // }
  // }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  public newRequestForm = () => {
    this.showDialog();
  }

  public showDialog = () => {
    this.setState({ isDialogVisible: true });
  }

  public closeDialog = () => {
    this.setState({ isDialogVisible: false });
    this.setState({ isDialogRankingVisible: false });
  }


  public _onChange = (evItems) => {
    debugger;
    var itemid = evItems;
    this.setState({
      checkboxItemPublish: itemid,
      publisbtnhideshow: true
    });
  }
  public newRankForm = async () => {
    this.setState({ isDialogRankingVisible: true });
  }

  public publishItem = async (itemid) => {
    debugger;
    console.log(itemid);

    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);
    //var PublishItems:any = this.state.checkboxItemPublish
    if (itemid.Publish == 'No') {
      this.state.checkboxItemPublish.Publish = "Yes"
    }

    if (itemid.Occupied == 'No') {
      this.state.checkboxItemPublish.Occupied = "Yes"
    }

    const flatPublishedObj = {
      Occupied: this.state.checkboxItemPublish.Occupied,
      Publish: this.state.checkboxItemPublish.Publish,
    }
    // return await spCrudObj.updateData("CABA_FlatMasters", itemid.ID, flatPublishedObj,  this.props).then((brrResults) => {
    //   alert("Flat has been Published!");
    //   this.setState({ Submitted: true, isDialogVisible: false});
    //   this.cabaAdminDashboard();
    //   return brrResults;
    // });

    try {
      const brrResults = await spCrudObj.updateData("CABA_FlatMasters", itemid.ID, flatPublishedObj, this.props);
      alert("Flat has been Published!");
      this.setState({ Submitted: true, isDialogVisible: false });
      this.cabaAdminDashboard();
     // return brrResults;
    } catch (error) {
      console.error('Error publishing item:', error);
      alert('An error occurred while publishing the item.');
    }
  }

  _onChangeSearch = async (filterValue: string) => {
    const utility = await Utilities();
    this.setState(utility);
    const query = filterValue.toLowerCase();
    if (query !== '' && query.length >2 ) {
      let filteredData = await utility.filterData(this.state.originalData, query, ['ID', 'FlatSpecifications', 'FlatType', 'SocietyName', 'Wing', 'FlatNo', 'OccupancyType','AssignedTo']);
      console.log(filteredData);
      this.setState({
        cabaAdminReport: filteredData,
      });

    }
    else {
      this.setState({
        originalData: this.state.originalData,
      });
      //this.cabaAdminDashboard();
      this.cabaAdminReport();
    }

  };
  render(): React.ReactElement<any> {
    const { cabaAdminData } = this.state;
    return (
      <div>

        <h4>CABA Admin Dashboard </h4>

        <div className='text-right'>
          {cabaAdminData.length > 0 && (
            <button
              className={styles.exporttoexcel + ' ' + 'btn-outline-info'}
              onClick={this.downloadExcel}
            >
              <Icon iconName='ExcelDocument' style={{ marginRight: '5px' }} /> Export To Excel
            </button>
          )}
        </div>

        <div className='mt-2 text-right'>
          {
            this.state.publisbtnhideshow ?
              (<PrimaryButton className={styles.btnprimary} onClick={() => this.publishItem(this.state.checkboxItemPublish)}>Publish Flat</PrimaryButton>
              ) : null
          }

          <span> <SearchBox placeholder="Search"
            onChange={this._onChangeSearch}
            onClear={ev => this._onChangeSearch('')} /></span>
        </div>
        <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.tabs} >

          <PivotItem linkText='Ranking Dashboard'>
            <div className='panel'>
              <DetailsList
                items={this.state.cabaRankDashboard}
                columns={this.columnsRanking}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                selectionMode={SelectionMode.none}
                groupProps={{ headerProps: { selectionMode: SelectionMode.none } }}
              />

            </div>
          </PivotItem>
          <PivotItem linkText='CABA Dashboard'>
            <div className='panel'>

              <DetailsList
                items={this.state.cabaAdminReport}
                columns={this.columReport}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                selectionMode={SelectionMode.none}
                groupProps={{ headerProps: { selectionMode: SelectionMode.none } }}
                onShouldVirtualize={() => false}
              />

            </div>
          </PivotItem>
        </Pivot>



      </div>
    )
  }
}
