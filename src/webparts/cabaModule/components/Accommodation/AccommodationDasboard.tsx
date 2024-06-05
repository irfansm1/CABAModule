import * as React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
//import { IEximTravelBlockProps } from "../Services/interface/IEximTravelBlockProps";
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
//import { IEximTravelProps } from '../Services/interface/IEximTravelProps';
import styles from '../CabaModule.module.scss';
import useSPCRUD, { ISPCRUD } from '../../../Services/bal/spcrud';
import { DetailsList, SelectionMode,MarqueeSelection, IColumn, Selection,DetailsListLayoutMode, Fabric, TextField, DefaultButton, PrimaryButton,MessageBar, DatePicker, Dropdown, IDropdownOption, Icon, Dialog, DialogFooter, DialogType,Spinner, SpinnerSize,  } from 'office-ui-fabric-react';
import { Pivot, PivotItem, IPivotItemProps, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { IEximCabaProps } from '../../../Services/interface/IEximCabaProps';
import CABAReqOps from '../../../Services/bal/CABAReqOps';

export default class AccomodationDashboards extends React.Component<ICabaModuleProps> {
   private columns : IColumn[]

    public state = {      
    UserAccomodationData: [],
     isDialogVisible:false,
     RequestforBanksAccommodation:"",
     Transfer:"",
     Married:"",
     SpouseEximite:"",
     emplyeecode:'',
     emplyeeName:'',
     grade: '',
   };
      constructor(props: ICabaModuleProps) {
      super(props);
    this.state = {      
       UserAccomodationData: [],
        isDialogVisible:false,
        RequestforBanksAccommodation:"",
        Transfer:"",
        Married:"",
        SpouseEximite:"",
        emplyeecode:'',
        emplyeeName:'',
        grade: '',
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
          
        },
       
        
    ]
   
    }//end constructor    
  componentDidMount(): void {
    this.UserAccomodationDatas();
  }               
     public newRequestForm =()=> {      
        this.showDialog();
     }
    public showDialog = () => {
    this.setState({ isDialogVisible: true });
  }
  public closeDialog = () => {
    this.setState({ isDialogVisible: false });
  }


  public UserAccomodationDatas= async():Promise<IEximCabaProps[]> => {
    debugger;
    let spCrudObj = await useSPCRUD(); 
    this.setState(spCrudObj);
   // return await TravelReqOps().getTravelDashboard( this.props).then(brrResults => {
     const filters = "(Occupied eq 'Yes') or (Publish eq 'Yes')";
    return await CABAReqOps().getUserAccomodationData(filters, { column: 'Id', isAscending: false }, this.props).then(brrResults => {
     const filterdataUserACC = brrResults.filter(itemUserAccomodation => {
       return itemUserAccomodation.AuthorId === parseInt(this.props.currentSPContext.pageContext.legacyPageContext.userId);
     });
        this.setState({UserAccomodationData:filterdataUserACC});
     
        return filterdataUserACC;
      });
  };

    render(): React.ReactElement<any> {
        
        return(
            <div>
                <h4>Accommodation Dashboard </h4>
                    
              <div className='text-right' style={{display:'none'}}><button onClick={()=> this.newRequestForm()} className={styles.btnprimary}
              style={{height:'34px', border:'none'}}>Accommodation Request</button></div>

            <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.tabs} >
          <PivotItem linkText='Pending'>
            <div className='panel'>
          
            <DetailsList
                items={this.state.UserAccomodationData}
                columns={this.columns}
                setKey="set"
                layoutMode={DetailsListLayoutMode.fixedColumns}
                selectionMode={SelectionMode.none}              
            />
           
            </div>
          </PivotItem>
          <PivotItem linkText='Approval in Process'>
            <div className='panel'>
            
            </div>
          </PivotItem>
          <PivotItem linkText='Approved'>
            <div className='panel'>
          
            </div>
          </PivotItem>
           
          </Pivot>



           {/* Dialog Print View */}
        

            </div>
        )
    }
}