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
export default class FlatTypes extends React.Component<ICabaModuleProps> {
    private columns : IColumn[];
  public state = {       
     isDialogVisible:false,
     FlatType: '',
     Submitted: false,
     FlatTypeData:[],
     isEditMode: false,
     editItemId: null
  }
 
      constructor(props: ICabaModuleProps) {
      super(props);
    this.state = {          
        isDialogVisible:false,
        FlatType: '',
        Submitted: false,
        FlatTypeData:[],
        isEditMode: false,
        editItemId: null
      };

      this.columns = [
        { 
          key: 'FlatType', 
          name: 'Flat Types', 
          fieldName: 'FlatType', 
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
    return await MasterAllReqOps().getCABAFlateTypesData(this.props).then(brrResults => {
       this.setState({FlatTypeData:brrResults})
    });
  }

 
  public requestType = async () => {
        spCrudObj = await useSPCRUD();
        this.setState(spCrudObj);
        const ObjectRequest = {
          FlatType: this.state.FlatType,
        }
        if (this.state.isEditMode) {
            // Update operation
            return await spCrudObj.updateData("CABAFlatTypeMaster", this.state.editItemId, ObjectRequest, this.props).then((brrResults) => {
                alert('Data Updated successfully!');
                this.setState({ Submitted: true, isDialogVisible: false, isEditMode: false, editItemId: null });
                this.getFlatSpecifications();
                return brrResults;
            });
        } else {
            // Add operation
            return await spCrudObj.insertData("CABAFlatTypeMaster", ObjectRequest, this.props).then((brrResults) => {
                alert('Data Saved successfully!');
                this.setState({ Submitted: true, isDialogVisible: false });
                this.getFlatSpecifications();
                return brrResults;
            });
        }
    }

          
  public EditForm = (item:IMasterProps)=>{
        debugger;
        var items = item;
        console.log(items);
        this.setState({
          FlatType: item.FlatType,
            isDialogVisible: true,
            isEditMode: true,
            editItemId: item.ID
        });
  }
     public newRequestForm =()=> {      
      //  this.showDialog();
        this.setState({ isDialogVisible: true, isEditMode: false, FlatType: '' });
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
        return await spCrudObj.deleteData("CABAFlatTypeMaster", itemsID, this.props).then((response) => {
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

                 {this.state.Submitted ? <Redirect to='/FlatTypes' ></Redirect> : null}
                <h4>Flat Types Master</h4>
                    <div><Link to="/AdminMaster"><Icon iconName='NavigateBack'></Icon> Home</Link></div>
              <div className='text-right'><button onClick={()=> this.newRequestForm()} className={styles.btnprimary}
              style={{height:'34px', border:'none', width: '70px'}}><Icon iconName='AddTo'/> Add</button></div>

            {/* <Pivot linkSize={PivotLinkSize.large} linkFormat={PivotLinkFormat.tabs} >
          <PivotItem linkText='Flat Specification'>
            <div className='Flat Specification'>
            
            </div>
          </PivotItem>         
          </Pivot> */}
          <DetailsList columns={this.columns} items={this.state.FlatTypeData as any} />
           {/* Dialog Print View */}
        <div className='flatspecification'>
        <Dialog
          hidden={!this.state.isDialogVisible}
          onDismiss={this.closeDialog}
          dialogContentProps={{
            type: DialogType.normal,
             title: 'Flat Types',
            closeButtonAriaLabel: 'Close',
            
          }}
          modalProps={{           
            containerClassName: 'specificationdialogMain'                       
          }}
        >
            
          <div className='form-group row'>
                <div className='col-md-8'>
                  <label>Types Flat</label>
                   <input type="text" onChange={this.handleChange} name="FlatType" id='FlatType'
                value={this.state.FlatType} className="form-control" />
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