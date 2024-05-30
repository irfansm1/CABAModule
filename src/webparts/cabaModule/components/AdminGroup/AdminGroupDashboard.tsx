import * as React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
//import { IEximTravelBlockProps } from "../Services/interface/IEximTravelBlockProps";
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
//import { IEximTravelProps } from '../Services/interface/IEximTravelProps';
import styles from '../CabaModule.module.scss';
import { DetailsList, SelectionMode,MarqueeSelection, IColumn, Selection,DetailsListLayoutMode, Fabric, TextField, DefaultButton, PrimaryButton,MessageBar, DatePicker, Dropdown, IDropdownOption, Icon, Dialog, DialogFooter, DialogType,Spinner, SpinnerSize,  } from 'office-ui-fabric-react';
import { Pivot, PivotItem, IPivotItemProps, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import { IEximCabaProps } from '../../../Services/interface/IEximCabaProps';

export default class AdminGroupDashboards extends React.Component<ICabaModuleProps> {
   
  public state = {

    dataitems: [],
    dataitemsApprovals: [],        
     isDialogVisible:false,
     RequestforBanksAccommodation:"",
     Transfer:"",
     Married:"",
     SpouseEximite:"",
     emplyeecode:'99999',
     emplyeeName:'Farm Admin',
     grade: 'Junior Management',
  }
      constructor(props: ICabaModuleProps) {
      super(props);
    this.state = {
       dataitems: [],
       dataitemsApprovals: [],        
        isDialogVisible:false,
        RequestforBanksAccommodation:"",
        Transfer:"",
        Married:"",
        SpouseEximite:"",
        emplyeecode:'99999',
        emplyeeName:'Farm Admin',
        grade: 'Junior Management',
      };
      
   
    }//end constructor    
  componentDidMount(): void {
    
  }

  public getDateCurrent(){
          var date = new Date();
          return date;
  }                  
     public newRequestForm =()=> {
       // alert("alert");
        this.showDialog();
     }
     
  public showDialog = () => {
    this.setState({ isDialogVisible: true });
  }

  public closeDialog = () => {
    this.setState({ isDialogVisible: false });
  }

    render(): React.ReactElement<any> {
        
        return(
            <div>
                <h4>Admin Group Dashboard </h4>
                    
              <div className='text-right' style={{display:'none'}}><button onClick={()=> this.newRequestForm()} className={styles.btnprimary}
              style={{height:'34px', border:'none'}}>CABA Admin Request</button></div>

            <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.tabs} >
          <PivotItem linkText='Pending'>
            <div className='panel'>
          

            </div>
          </PivotItem>
          <PivotItem linkText='Approved'>
            <div className='panel'>
            
            </div>
          </PivotItem>
          <PivotItem linkText='Rejected'>
            <div className='panel'>
          
            </div>
          </PivotItem>
           
          </Pivot>



           {/* Dialog Print View */}
           <Dialog
          hidden={!this.state.isDialogVisible}
          onDismiss={this.closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
             title: 'CABA Admin Request',
            closeButtonAriaLabel: 'Close',
          }}
        >
           <DialogFooter>

           </DialogFooter>

          </Dialog>
               
            </div>
        )
    }
}