import * as React from 'react';
import { BrowserRouter as Router, Link, useHistory, Redirect } from "react-router-dom";
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
     redirectFlatURL:false,
     redirectFlatTypeURL:false,
     redirectSocityURL:false,
     redirectOccupancyURL:false,
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
        redirectFlatURL:false,
        redirectFlatTypeURL:false,
        redirectSocityURL:false,
        redirectOccupancyURL:false,
      };
      
   
    }//end constructor    
  componentDidMount(): void {   
    
  }

  flatSpecification() {   
    this.setState({redirectFlatURL:true});
  }
  flatTypes() {
   // <Redirect to="/FlatTypes" />
   this.setState({redirectFlatTypeURL:true});
  }
  societyName() {
    //<Redirect to="/SocietyName" />    
    this.setState({redirectSocityURL:true});
  }
  occupancyType() {
    //<Redirect to="/OccupancyType" /> 
    this.setState({redirectOccupancyURL:true});
  }

    render(): React.ReactElement<any> {
        
        return(
            <div>
                <h4>Admin Master </h4>
                {this.state.redirectFlatURL ? <Redirect to='/FlatSpecificationMaster' ></Redirect> : null}
                {this.state.redirectFlatTypeURL ? <Redirect to='/FlatTypes' ></Redirect> : null}
                {this.state.redirectSocityURL ? <Redirect to='/SocietyName' ></Redirect> : null}
                {this.state.redirectOccupancyURL ? <Redirect to='/OccupancyType' ></Redirect> : null}

                <div className='row'>
                    
              <div className='col-md-2'><button className={styles.btnprimary +' '+ styles.btntoggle}
              style={{height:'34px', border:'none'}} onClick={()=> this.flatSpecification()}>Flat Specification </button></div>

              <div className='col-md-2'><button className={styles.btnprimary +' '+ styles.btntoggle}
              style={{height:'34px', border:'none'}} onClick={()=> this.flatTypes()}>Flat Type </button></div>

             <div className='col-md-2'><button className={styles.btnprimary +' '+ styles.btntoggle}
              style={{height:'34px', border:'none'}}  onClick={()=> this.societyName()}>Society Name </button></div>

               <div className='col-md-2'><button className={styles.btnprimary +' '+ styles.btntoggle}
              style={{height:'34px', border:'none'}}  onClick={()=> this.occupancyType()}>Occupancy Type</button></div>
               
               </div>

               	
                   {/* <Link href='/' target="_blank" data-interception="off">Link</Link> */}

          
            </div>
        )
    }
}