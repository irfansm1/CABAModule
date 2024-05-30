import * as React from 'react';
import { BrowserRouter as Router, Link , Redirect} from "react-router-dom";
//import { IEximTravelBlockProps } from "../Services/interface/IEximTravelBlockProps";
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
//import { IEximTravelProps } from '../Services/interface/IEximTravelProps';
import styles from '../CabaModule.module.scss';
import { DetailsList, SelectionMode,MarqueeSelection, IColumn, Selection,DetailsListLayoutMode, Fabric, TextField, DefaultButton, PrimaryButton,MessageBar, DatePicker, Dropdown, IDropdownOption, Icon, Dialog, DialogFooter, DialogType,Spinner, SpinnerSize,  } from 'office-ui-fabric-react';
import { Pivot, PivotItem, IPivotItemProps, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import useSPCRUD, { ISPCRUD } from '../../../Services/bal/spcrud';
import MasterAllReqOps from '../../../Services/bal/MasterAllReqOps';
import { IMasterProps } from '../../../Services/interface/IMasterProps';

let spCrudObj:ISPCRUD;
export default class FlatSpecification extends React.Component<ICabaModuleProps> {
    private columns : IColumn[];
  public state = {       
     isDialogVisible:false,
     FlatSpecifications: '',
     Submitted: false,
     flatSpecificationData:[],
     isEditMode: false,
     editItemId: null
  }
 
      constructor(props: ICabaModuleProps) {
      super(props);
    this.state = {          
        isDialogVisible:false,
        FlatSpecifications: '',
        Submitted: false,
        flatSpecificationData:[],
        isEditMode: false,
        editItemId: null
      };

      this.columns = [
        { 
          key: 'FlatSpecifications', 
          name: 'Flat Specifications', 
          fieldName: 'FlatSpecifications', 
          minWidth: 100, 
         // maxWidth: 200, 
          isResizable: true 
        },
        {
            key: 'Edit', name: 'Action',fieldName: 'ID', minWidth: 100, isResizable: true,
            onRender: (item:any, index:number, columns:IColumn) => {
            //   const ItemId = item['ID'];
            const Items = item;
              return<div> 
            <PrimaryButton onClick={() => this.EditForm(Items)} className={styles.btnprimary + " " + styles.btnround + " " + 'mr-2'}>
            <Icon iconName='Edit' /></PrimaryButton>
            <PrimaryButton onClick={() => this.deleteRequest(Items.ID)} className={styles.btnred + " " + styles.btnround}>
            <Icon iconName='Delete' /></PrimaryButton>
              </div>;
            }
        },

        
    ]
      
   
    }//end constructor    
  componentDidMount(): void {
    this.getFlatSpecifications();   
    
  }

  handleChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  getFlatSpecifications = async (): Promise<any> => {
    spCrudObj = await useSPCRUD();
    this.setState(spCrudObj);
    return await MasterAllReqOps().getCABASpecData(this.props).then(brrResults => {
       this.setState({flatSpecificationData:brrResults})
    });
  }

  // public requestType = async() =>{
  //   debugger;
  //   spCrudObj = await useSPCRUD();
  //   this.setState(spCrudObj);
  //   var ObjectRequest = {
  //       FlatSpecifications: this.state.FlatSpecifications,
  //   }
  //   return await spCrudObj.insertData("FlatSpecificationsMaster", ObjectRequest, this.props).then((brrResults) => {
  //       alert('Data Saved successfully!');
  //       this.setState({ 
  //       Submitted: true ,
  //       isDialogVisible: false
  //       });
        
  //       return brrResults;
        
  //   });
  // }


  public requestType = async () => {
        spCrudObj = await useSPCRUD();
        this.setState(spCrudObj);
        if(this.state.FlatSpecifications === null || this.state.FlatSpecifications === undefined || this.state.FlatSpecifications.trim() === ''){
          alert("Please Flat Specifications");
          return false;
         }
         else{
          const ObjectRequest = {
            FlatSpecifications: this.state.FlatSpecifications,
        }
        if (this.state.isEditMode) {
            // Update operation
            return await spCrudObj.updateData("FlatSpecificationsMaster", this.state.editItemId, ObjectRequest, this.props).then((brrResults) => {
                alert('Data Updated successfully!');
                this.setState({ Submitted: true, isDialogVisible: false, isEditMode: false, editItemId: null });
                this.getFlatSpecifications();
                return brrResults;
            });
        } else {
            // Add operation
            return await spCrudObj.insertData("FlatSpecificationsMaster", ObjectRequest, this.props).then((brrResults) => {
                alert('Data Saved successfully!');
                this.setState({ Submitted: true, isDialogVisible: false });
                this.getFlatSpecifications();
                return brrResults;
            });
        }

         }
       
    }

          
  public EditForm = (item:IMasterProps)=>{
        debugger;
        var items = item;
        console.log(items);
        this.setState({
            FlatSpecifications: item.FlatSpecifications,
            isDialogVisible: true,
            isEditMode: true,
            editItemId: item.ID
        });
  }
     public newRequestForm =()=> {      
      //  this.showDialog();
        this.setState({ isDialogVisible: true, isEditMode: false, FlatSpecifications: '' });
     }     
  public showDialog = () => {
    this.setState({ isDialogVisible: true });
  }
  public closeDialog = () => {
    this.setState({ isDialogVisible: false });
  }

public deleteRequest = async (itemsID) => {
    var confirmDelete = confirm("Are you sure you want to delete this item?");
    if (confirmDelete) {
        spCrudObj = await useSPCRUD();
        this.setState(spCrudObj);        
        return await spCrudObj.deleteData("FlatSpecificationsMaster", itemsID, this.props).then((response) => {
            alert('Item deleted successfully!');
            this.getFlatSpecifications(); // Refresh the list after deletion
            return response;
        }).catch((error) => {
            console.error("Error deleting item: ", error);
        });
    }
}

    render(): React.ReactElement<any> {
        
        return(
            <div>

                 {this.state.Submitted ? <Redirect to='/FlatSpecificationMaster' ></Redirect> : null}
                <h4>Flat Specification Master</h4>
                    <div><Link to="/AdminMaster"><Icon iconName='NavigateBack'></Icon> Home</Link></div>
              <div className='text-right'><button onClick={()=> this.newRequestForm()} className={styles.btnprimary}
              style={{height:'34px', border:'none', width: '70px'}}><Icon iconName='AddTo'/> Add</button></div>

            {/* <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.tabs} >
          <PivotItem linkText='Flat Specification'>
            <div className='Flat Specification'>
            
            </div>
          </PivotItem>         
          </Pivot> */}
          <DetailsList columns={this.columns} items={this.state.flatSpecificationData as any} />
           {/* Dialog Print View */}
        <div className='flatspecification'>
        <Dialog
          hidden={!this.state.isDialogVisible}
          onDismiss={this.closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
             title: 'Flat Specifications',
            closeButtonAriaLabel: 'Close',
            
          }}
          modalProps={{           
            containerClassName: 'specificationdialogMain'                       
          }}
        >
            
          <div className='form-group row'>
                <div className='col-md-8'>
                  <label>Flat Specifications</label>
                   <input type="text" onChange={this.handleChange} name="FlatSpecifications" id='FlatSpecifications'
                value={this.state.FlatSpecifications} className="form-control" />
                </div>                                             
                </div>
         
           <DialogFooter>
           <PrimaryButton onClick={()=> this.requestType()}  >Submit</PrimaryButton>
           </DialogFooter>

          </Dialog>
        </div>
           
            </div>
        )
    }
}