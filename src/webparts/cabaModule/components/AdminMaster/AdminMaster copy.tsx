import * as React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
//import { IEximTravelBlockProps } from "../Services/interface/IEximTravelBlockProps";
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
//import { IEximTravelProps } from '../Services/interface/IEximTravelProps';
import styles from '../CabaModule.module.scss';
import { DetailsList, SelectionMode,MarqueeSelection, IColumn, Selection,DetailsListLayoutMode, Fabric, TextField, DefaultButton, PrimaryButton,MessageBar, DatePicker, Dropdown, IDropdownOption, Icon, Dialog, DialogFooter, DialogType,Spinner, SpinnerSize,  } from 'office-ui-fabric-react';
import { Pivot, PivotItem, IPivotItemProps, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import useSPCRUD, { ISPCRUD } from '../../../Services/bal/spcrud';
import CabaMasterOps from '../../../Services/bal/CabaMastersOps';

import { IEximCabaProps } from '../../../Services/interface/IEximCabaProps';

let spCrudObj:ISPCRUD;
export default class AdminMaster extends React.Component<ICabaModuleProps> {
  private FlatSpecifications: IDropdownOption[] = [];
  private FlatTypes: IDropdownOption[] = [];
  private OccupancyType: IDropdownOption[] = [];
  private SocietyName: IDropdownOption[] = [];
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
       // dataitems: this._allItems,
       dataitems: [],
       dataitemsApprovals: [],
        //selectionDetails: this._getSelectionDetails(),
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
    this.getFlatSpecifications();
    this.getFlatTypes();
    this.getOccupancyTypes();
    this.getSocietyNames();
    
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

  getSocietyNames = async (): Promise<any> => {
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
  public getDateCurrent(){
          var date = new Date();
          return date;
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

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });

  }

    render(): React.ReactElement<any> {
        
        return(
            <div>
                <h4>Admin Master Form </h4>
                    
              <div className='text-right'><button onClick={()=> this.newRequestForm()} className={styles.btnprimary}
              style={{height:'34px', border:'none'}}>Add Request</button></div>

            <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.tabs} >
          <PivotItem linkText='Details'>
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
             title: 'Admin Master Request',
            closeButtonAriaLabel: 'Close',
          }}
        >
          <div>
            
          <div className='form-group row'>
                <div className='col-md-4 form-group'>
                  <label>Flat Specifications</label>
                  <Dropdown
                          placeHolder='Please select Flat Specifications'
                          //selectedKey={this.state.travelData.TravelModeId}
                          options={this.FlatSpecifications}
                         // onChanged={this.onTravelModeChange}
                        />
                </div>
                <div className='col-md-4 form-group'>
                  <label>Type of Flat</label>
                  <Dropdown
                          placeHolder='Please select Types Flat'
                          //selectedKey={this.state.travelData.TravelModeId}
                          options={this.FlatTypes}
                         // onChanged={this.onTravelModeChange}
                        />
                </div>
                <div className='col-md-4 form-group'>
                  <label>Society Name</label>
                  <Dropdown
                          placeHolder='Please select Types Flat'
                          //selectedKey={this.state.travelData.TravelModeId}
                          options={this.SocietyName}
                         // onChanged={this.onTravelModeChange}
                        />
                </div>
                <div className='col-md-4 form-group'>
                  <label>Occupancy Types</label>
                  <Dropdown
                          placeHolder='Please select Occupancy Types'
                          //selectedKey={this.state.travelData.TravelModeId}
                          options={this.OccupancyType}
                         // onChanged={this.onTravelModeChange}
                        />
                </div>
                </div>
          </div>

           <DialogFooter>

           </DialogFooter>

          </Dialog>
            </div>
        )
    }
}