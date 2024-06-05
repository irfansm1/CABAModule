import * as React from 'react';
import { BrowserRouter as Router, Link, Redirect } from "react-router-dom";
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
import styles from '../CabaModule.module.scss';
import { DetailsList, SelectionMode,MarqueeSelection, IColumn,Checkbox, SearchBox, Selection,DetailsListLayoutMode, Fabric, TextField, DefaultButton, PrimaryButton,MessageBar, DatePicker, Dropdown, IDropdownOption, Icon, Dialog, DialogFooter, DialogType,Spinner, SpinnerSize,  } from 'office-ui-fabric-react';
import { Pivot, PivotItem, IPivotItemProps, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import useSPCRUD, { ISPCRUD } from '../../../Services/bal/spcrud';
import CabaMasterOps from '../../../Services/bal/CabaMastersOps';
import { IEximCabaProps } from '../../../Services/interface/IEximCabaProps';
import { IRankingMaster } from '../../../Services/interface/IRankigMaster';
import CABAReqOps from '../../../Services/bal/CABAReqOps';
import { IEmployee } from '../../../Services/interface/IEmployee';
import EmployeeOps from '../../../Services/bal/EmployeeOps';
import { Item } from 'sp-pnp-js';
import Utilities from '../../../Services/bal/utilities';
let spCrudObj:ISPCRUD;
export default class CABAAdminDashboards extends React.Component<ICabaModuleProps> {
  private FlatSpecifications: IDropdownOption[] = [];
  private FlatTypes: IDropdownOption[] = [];
  private OccupancyType: IDropdownOption[] = [];
  private SocietyName: IDropdownOption[] = [];
  private officeLocation: IDropdownOption[] =[];
  private columns : IColumn[];
  private columnsRanking: IColumn[];

    private transfer: IDropdownOption[] = [
    { key: 'Yes', text: 'Yes' },
    { key: 'No', text: 'No' },
  ];

  private PublishGetTemp: IEximCabaProps = {ID:"",EmployeeName:"", GradeorScale :0,
    FlatSpecifications:"", FlatType:"", SocietyName:"",Wing:"",FlatNo:"",OccupancyType:"",ActiveStatus:"",
    CABAFlatID:"", OfficeLocation:"",AssignedTo:"",AssignedDate:"",EndDate:"",AssignedBy:"",Occupied:"",
    Publish:""
  };

  public state = { 
     isDialogVisible:false,
     isDialogRankingVisible:false,
     Submitted: false,
     cabaAdminData: [],
     originalData:[],
     cabaRankDashboard:[],
     flatSpecifications:"",
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
     checkboxItemPublish: this.PublishGetTemp ,
     publisbtnhideshow:false,
     searchQuery:"",

  }
      constructor(props: ICabaModuleProps) {
      super(props);
       this.state = {
        isDialogVisible:false,
        isDialogRankingVisible:false,
        Submitted: false,
        cabaAdminData: [],
        originalData:[],
        cabaRankDashboard:[],
        flatSpecifications:"",
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
        checkboxItemPublish:this.PublishGetTemp,
        publisbtnhideshow:false,
        searchQuery:"",
       
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
          isResizable: false ,
           onRender: (item:any, index:number, columns:IColumn) => {
             const ItemId = item['ID'];                
             if(item['Publish']=='No'){                
              return <Checkbox onChange={() => this._onChange(item)}  />                 
            }
            else{
             return (
               <div>
                 Yes
               </div>
             );
            }

            }
        },
        {
            key: 'ID', name: 'Action',fieldName: 'ID', minWidth: 100, isResizable: true,
            onRender: (item:any, index:number, columns:IColumn) => {
            //   const ItemId = item['ID'];
            const Items = item;
              return<div> 
            <Link>
            <Icon iconName='Edit' /></Link>
            
              </div>;
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
        onRender:(item) => {
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
      },
     
      {
          key: 'ID', name: 'Action',fieldName: 'ID', minWidth: 100, isResizable: true,
          onRender: (item:any, index:number, columns:IColumn) => {
          //   const ItemId = item['ID'];
          const Items = item;
            return<div> 
          <Link>
          <Icon iconName='Edit' /></Link>
          
            </div>;
          }
      }
      
  ]

  
      
   
    }//end constructor    
  async componentDidMount(){
    this.getEmployeeData();
    this.getFlatSpecifications();
    this.getFlatTypes();
    this.getOccupancyTypes();
    this.getgetSocietyName();
    this.getOfficeLocation(); 
     await this.cabaAdminDashboard();  
     await this.cabaRankDashboard(); 
   // this.cabaDesignation();
  }

  getEmployeeData = async (): Promise<IEmployee> => {
    debugger;
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

  cabaAdminDashboard = async() =>{
    try {
      const spCrudObj = await useSPCRUD();
      this.setState(spCrudObj);
      const brrResults = await CABAReqOps().getCABAAdminData(this.props);
      this.setState({ cabaAdminData: brrResults ,
      
        originalData: brrResults 
      });
      return brrResults;
  } catch (error) {
      console.error("Error fetching CABA Admin Data: ", error);
  }
  }
  cabaRankDashboard = async() =>{
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

  getFlatSpecifications = async (): Promise<any> => {
    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);
    return await CabaMasterOps().getFlatSpecifications(this.props).then(brrResults => {
      brrResults.map(item => {
        this.FlatSpecifications.push({
          key: item.key,
          text: item.text
        });
      });
    });
  }
  getFlatTypes = async (): Promise<any> => {
    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);
    return await CabaMasterOps().getFlatType(this.props).then(brrResults => {
      brrResults.map(item => {
        this.FlatTypes.push({
          key: item.key,
          text: item.text
        });
      });
    });
  }
  getOccupancyTypes = async (): Promise<any> => {
    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);
    return await CabaMasterOps().getOccupancyType(this.props).then(brrResults => {
      brrResults.map(item => {
        this.OccupancyType.push({
          key: item.key,
          text: item.text
        });
      });
    });
  }
   getgetSocietyName = async (): Promise<any> => {
    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);
    return await CabaMasterOps().getSocietyName(this.props).then(brrResults => {
      brrResults.map(item => {
        this.SocietyName.push({
          key: item.key,
          text: item.text
        });
      });
    });
  } 
  getOfficeLocation = async (): Promise<any> => {
    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);
    return await CabaMasterOps().getOfficeLocation(this.props).then(brrResults => {
      brrResults.map(item => {
        this.officeLocation.push({
          key: item.key,
          text: item.text
        });
      });
    });
  } 

     public newRequestForm =()=> {      
        this.showDialog();
     }
     
  public showDialog = () => {
    this.setState({ isDialogVisible: true });
  }

  public closeDialog = () => {
    this.setState({ isDialogVisible: false });
    this.setState({isDialogRankingVisible:false});
  }

  onflatSpecificationsChange =(item: IDropdownOption) =>{
    this.setState({ flatSpecifications: item.key as string });
  }
  onflatTypesChange =(item: IDropdownOption) =>{    
    this.setState({ flatTypes: item.key as string });
  }
  onSocietyNameChange =(item: IDropdownOption) =>{   
    this.setState({ societyName: item.key as string });
  }
  onOccupancyTypeChange =(item: IDropdownOption) =>{   
    this.setState({ occupancyType: item.key as string });
  }
  onOfficeLocationChange =(item: IDropdownOption) =>{   
    this.setState({ officeLocation: item.key as string });
  }
  public submitCabareq = async()=>{ 
       spCrudObj = await useSPCRUD();
       this.setState(spCrudObj);
       //var CabaID = Math.floor(1233/10000);
       var CABAFlatID = "CABA|" + "Flat|" +  this.state.EmployeeID ;
       var cabaObjRequest ={
        CABAFlatID : CABAFlatID,
        FlatSpecificationsId:this.state.flatSpecifications,
        FlatTypeId: this.state.flatTypes,
        SocietyNameId: this.state.societyName,
        Wing: this.state.wing,
        FlatNo: this.state.flatNo,
        OccupancyTypeId: this.state.occupancyType,
        OfficeLocationId: this.state.officeLocation
       }
       return await spCrudObj.insertData("CABA_FlatMasters", cabaObjRequest, this.props).then((brrResults) => {
        alert("Data Saved successfully!");
        this.setState({ Submitted: true, isDialogVisible: false});
        this.cabaAdminDashboard();
        return brrResults;
       });

  }


  private _formatDate = (date: Date): string => {
    return (date.getMonth() + 1) + '/' + date.getDate() + '/' + (date.getFullYear());
  }
  onTransferChange =(item: IDropdownOption)=>{
    this.setState({ Transfer: item.key as string });
  }

  private _onSelectTravelDate = (date: Date | null | undefined): void => {
    
    this.setState({
      DateofJoiningAppointment:date
    });
  };
  public _onChange = (evItems) =>{
   debugger;
    var itemid = evItems;
    this.setState({
        checkboxItemPublish:itemid,
        publisbtnhideshow:true
     });
  }
   public newRankForm =async() =>{
    this.setState({isDialogRankingVisible: true});
   }
   submitCabaRankForm = async() =>{
    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);   
    var CABAFlatID = "CABA|" + "Flat|" +  this.state.EmployeeID ;
    var cabaObjRequest ={
     //CABAFlatID : CABAFlatID,
     DateofJoiningAppointment:this.state.DateofJoiningAppointment,
     Seniority: this.state.Seniority,
     Transfer: this.state.Transfer,
     YearofServiceinPresentGrade: this.state.YearofServiceinPresentGrade,
     Spouse: this.state.Spouse,
     Total: this.state.Total,
     Rank: this.state.Rank
    }
    return await spCrudObj.insertData("Ranking_Master", cabaObjRequest, this.props).then((brrResults) => {
     alert("Data Saved successfully!");
     this.setState({ Submitted: true, isDialogRankingVisible: false});
     this.cabaAdminDashboard();
     return brrResults;
    });

   }
    public publishItem =async (itemid)=>{
      debugger;
      console.log(itemid);

      spCrudObj = await useSPCRUD();
      this.setState(spCrudObj); 
      //var PublishItems:any = this.state.checkboxItemPublish
      if(itemid.Publish == 'No'){
        this.state.checkboxItemPublish.Publish = "Yes"
      }

      if(itemid.Occupied == 'No')  {
        this.state.checkboxItemPublish.Occupied = "Yes"
      }
        
    const flatPublishedObj ={        
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
      return brrResults;
  } catch (error) {
      console.error('Error publishing item:', error);
      alert('An error occurred while publishing the item.');
  }
    }

    _onChangeSearch = async (filterValue: string) => {
      debugger;
      const utility = await Utilities();
      this.setState(utility);
      const query = filterValue.toLowerCase();
      if (query !== '') {  
        let filteredData = await utility.filterData(this.state.originalData, query, ['ID', 'FlatSpecifications', 'FlatType', 'SocietyName', 'Wing', 'FlatNo', 'OccupancyType']);
        console.log(filteredData);
        this.setState({
          cabaAdminData: filteredData,
        });        
  
      }
      else {
        this.setState({
         originalData: this.state.originalData,         
        });
        this.cabaAdminDashboard();
      }
  
    };
  
   




    render(): React.ReactElement<any> {
      const { cabaAdminData} = this.state;
        return(
            <div>
              {this.state.Submitted ? <Redirect to='/CabaAdminDashboard' ></Redirect> : null}
                <h4>CABA Admin Dashboard </h4>
                    
              <div className='text-right'><button onClick={()=> this.newRequestForm()} className={styles.btnprimary +' '+ 'mr-3'}
              style={{height:'34px', border:'none'}}>CABA Add</button>
              <button onClick={()=> this.newRankForm()} className={styles.btnprimary}
              style={{height:'34px', border:'none'}}>Ranking Add</button>
              </div>
               
      <div className='mt-2 text-right'>
        {
          this.state.publisbtnhideshow ? 
          ( <PrimaryButton className={styles.btnprimary} onClick={()=> this.publishItem(this.state.checkboxItemPublish)}>Publish Flat</PrimaryButton>
          ): null
        }
     
       <span> <SearchBox placeholder="Search" 
       onChange={this._onChangeSearch}
       onClear={ev => this._onChangeSearch('')} /></span>
      </div>
            <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.tabs} >
          <PivotItem linkText='CABA Dashboard'>
            <div className='panel'>         
           
            <DetailsList
                items={cabaAdminData}
                columns={this.columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                selectionMode={SelectionMode.none}              
            />
           
            </div>
          </PivotItem>
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
          {/* <PivotItem linkText='Approved'>
            <div className='panel'>

            </div>
          </PivotItem>
            */}
          </Pivot>



           {/* Dialog Caba Master Form */}
        
           <Dialog
          hidden={!this.state.isDialogVisible}
          onDismiss={this.closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
             title: 'CABA Admin Request',
            closeButtonAriaLabel: 'Close',
          }}
          modalProps={{           
            containerClassName: 'cabadailog'                       
          }}
        >
          <div>
            
          <div className='form-group row'>
                <div className='col-md-4 form-group'>
                  <label>Flat Specifications</label>
                  <Dropdown
                          placeHolder='Please select Flat Specifications'
                          selectedKey={this.state.flatSpecifications}
                          options={this.FlatSpecifications}
                          onChanged={this.onflatSpecificationsChange}
                        />
                </div>
                <div className='col-md-4 form-group'>
                  <label>Type of Flat</label>
                  <Dropdown
                          placeHolder='Please select Types Flat'
                        selectedKey={this.state.flatTypes}
                          options={this.FlatTypes}
                          onChanged={this.onflatTypesChange}
                        />
                </div>
                <div className='col-md-4 form-group'>
                  <label>Society Name</label>
                  <Dropdown
                          placeHolder='Please select Society Name'
                          selectedKey={this.state.societyName}
                          options={this.SocietyName}
                          onChanged={this.onSocietyNameChange}
                        />
                </div>
                <div className='col-md-4 form-group'>
                    <label>Wing</label>
                    {/* <input type='text' id='wing' name='wing' value={this.state.wing}  className='form-control'/> */}
                    <TextField onChanged={()=>this.handleChange(event)} name="wing" value={this.state.wing}></TextField>
                </div>
                <div className='col-md-4 form-group'>
                    <label>Flat No.</label>
                    {/* <input type='text' id='flatNo' name='flatNo' value={this.state.flatNo} className='form-control' /> */}
                    <TextField onChanged={()=>this.handleChange(event)} name="flatNo" value={this.state.flatNo}></TextField>
                </div>
                <div className='col-md-4 form-group'>
                  <label>Occupancy Types</label>
                  <Dropdown
                          placeHolder='Please select Occupancy Types'
                          selectedKey={this.state.occupancyType}
                          options={this.OccupancyType}
                          onChanged={this.onOccupancyTypeChange}
                        />
                </div>
                <div className='col-md-4 form-group'>
                  <label>Office Location</label>
                  <Dropdown
                          placeHolder='Please select'
                          selectedKey={this.state.officeLocation}
                          options={this.officeLocation}
                          onChanged={this.onOfficeLocationChange}
                        />
                </div>
                </div>
          </div>

           <DialogFooter>
          <PrimaryButton className={styles.btnprimary} onClick={()=> this.submitCabareq()}>Submit</PrimaryButton>
          <DefaultButton onClick={()=>this.closeDialog()}>Cancel</DefaultButton>
           </DialogFooter>

          </Dialog>


          {/* Ranking Master form */}

          <Dialog
          hidden={!this.state.isDialogRankingVisible}
          onDismiss={this.closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
             title: 'Ranking Request',
            closeButtonAriaLabel: 'Close',
          }}
          modalProps={{           
            containerClassName: 'cabadailog'                       
          }}
        >
          <div>
            
          <div className='form-group row'>
                <div className='col-md-4 form-group'>
                  <label>Employee Code</label>
                   <label defaultValue={this.state.EmployeeCode}></label>
                </div>
                <div className='col-md-4 form-group'>
                  <label>Designation</label>
                  <label></label>
                   
                </div>
                <div className='col-md-4 form-group'>
                  <label>Date of Joining/Appointment</label>
                  <DatePicker formatDate={this._formatDate}                   
                   onSelectDate={this._onSelectTravelDate}
                   value={this.state.DateofJoiningAppointment}>                   
                   </DatePicker>
                </div>
                <div className='col-md-4 form-group'>
                    <label>Seniority</label>
                    <TextField onChanged={()=>this.handleChange(event)} name="Seniority" id='Seniority' value={this.state.Seniority}></TextField>
                </div>
                <div className='col-md-4 form-group'>
                    <label>Transfer</label>
                    <Dropdown
                          placeHolder='--Select--'
                          selectedKey={this.state.Transfer}
                          options={this.transfer}
                          onChanged={this.onTransferChange}
                        />
                    {/* <TextField onChanged={()=>this.handleChange(event)} name="flatNo" value={this.state.Transfer}></TextField> */}
                </div>
                <div className='col-md-4 form-group'>
                    <label>Year of Service in present Grade</label>
                    <TextField onChanged={()=>this.handleChange(event)} name="YearofServiceinPresentGrade" id='YearofServiceinPresentGrade' value={this.state.YearofServiceinPresentGrade}></TextField>
                </div>
                <div className='col-md-4 form-group'>
                    <label>Spouse(Eximite)</label>
                    <TextField onChanged={()=>this.handleChange(event)} name="Spouse" id='Spouse' value={this.state.Spouse}></TextField>
                </div>
                <div className='col-md-4 form-group'>
                    <label>Total</label>
                    <TextField onChanged={()=>this.handleChange(event)} name="Total" value={this.state.Total}></TextField>
                </div>
                <div className='col-md-4 form-group'>
                    <label>Rank</label>
                    <TextField onChanged={()=>this.handleChange(event)} name="Rank" value={this.state.Rank}></TextField>
                </div>
                
                </div>
          </div>

           <DialogFooter>
          <PrimaryButton className={styles.btnprimary} onClick={()=> this.submitCabaRankForm()}>Submit</PrimaryButton>
          <DefaultButton onClick={()=>this.closeDialog()}>Cancel</DefaultButton>
           </DialogFooter>

          </Dialog>
            </div>
        )
    }
}