import { IPropertyPaneTextFieldProps } from "@microsoft/sp-webpart-base";

//import { IEximTravelBlockProps } from "../interface/IEximTravelBlockProps";
import { ICabaModuleProps } from "../interface/ICabaModuleProps";
import SPCRUDOPS from '../dal/spcrudops'

export interface ISPCRUD {
    getData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
        , orderby: { column: string, isAscending: boolean }, props: ICabaModuleProps): Promise<any>;
     insertData(listName: string, data: any, props: ICabaModuleProps): Promise<any>;
     getRootData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
        , orderby: { column: string, isAscending: boolean }, props: ICabaModuleProps): Promise<any>;
    batchInsert(listName: string, data: any, props: ICabaModuleProps): Promise<any>;
    updateData(listName: string, itemId: number, data: any, props: ICabaModuleProps): Promise<any>;
    //currentProfile(props: ICabaModuleProps): Promise<any>;
    getGroupUsers(groupId: number,props: ICabaModuleProps): Promise<any>;
    currentUserInfo(props: ICabaModuleProps): Promise<any>;
     deleteData(listName: string, itemId: number, props: ICabaModuleProps): Promise<any>;
    // getListInfo(listName: string, props: IVendorBlockReleaseDevProps): Promise<any>;

    // batchUpdate(listName: string, data: any, props: IVendorBlockReleaseDevProps): Promise<any>;
    // batchDelete(listName: string, data: any, props: IVendorBlockReleaseDevProps): Promise<any>;
    // uploadFile(folderServerRelativeUrl: string, file: File, props: IVendorBlockReleaseDevProps): Promise<any>;
    // deleteFile(fileServerRelativeUrl: string, props: IVendorBlockReleaseDevProps): Promise<any>;
}

export default async function SPCRUD(): Promise<ISPCRUD> {
    const spCrudOps = SPCRUDOPS();
    
    const getData = async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
        , orderby: { column: string, isAscending: boolean }, props: ICabaModuleProps) => {
        const items: any[] = await (await spCrudOps).getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, props);
        return items;
    };
    const getRootData = async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
        , orderby: { column: string, isAscending: boolean }, props: ICabaModuleProps) => {
        const items: any[] = await (await spCrudOps).getData(listName, columnsToRetrieve, columnsToExpand, filters, orderby, props);
        return items;
    };

    const insertData = async (listName: string, data: any, props: ICabaModuleProps) => {
        const result: any = await (await spCrudOps).insertData(listName, data, props);
        return result;
    };
const batchInsert = async (listName: string, data: any, props: ICabaModuleProps) => {
        const result: any = await (await spCrudOps).batchInsert(listName, data, props);
        return result;
    };
    const updateData = async (listName: string, itemId: number, data: any, props: ICabaModuleProps) => {
        const result: any = await (await spCrudOps).updateData(listName, itemId, data, props);
        return result;
    };
    // const currentProfile = async (props: ICabaModuleProps) => {
    //     const result: any = await (await spCrudOps).currentProfile( props);
    //     return result;
    // };
    const currentUserInfo = async (props: ICabaModuleProps) => {
        const result: any = await (await spCrudOps).currentUserInfo( props);
        return result;
    };
    const getGroupUsers = async (groupId: number,props: ICabaModuleProps) => {
        const result: any = await (await spCrudOps).getGroupUsers(groupId, props);
        return result;
    };

    const deleteData = async (listName: string, itemId: number, props: ICabaModuleProps) => {
        const result: any = await (await spCrudOps).deleteData(listName, itemId, props);
        return result;
    };

    // const getListInfo = async (listName: string, props: IVendorBlockReleaseDevProps) => {
    //     const list: any = await (await spCrudOps).getListInfo(listName, props);
    //     return list;
    // };

    

    // const batchUpdate = async (listName: string, data: any, props: IVendorBlockReleaseDevProps) => {
    //     const result: any = await (await spCrudOps).batchUpdate(listName, data, props);
    //     return result;
    // };

    // const batchDelete = async (listName: string, data: any, props: IVendorBlockReleaseDevProps) => {
    //     const result: any = await (await spCrudOps).batchDelete(listName, data, props);
    //     return result;
    // };
    // const uploadFile = async (folderServerRelativeUrl: string, file: File, props: IVendorBlockReleaseDevProps) => {
    //     const result: any = await (await spCrudOps).uploadFile(folderServerRelativeUrl, file, props);
    //     return result;
    // };
    // const deleteFile = async (fileServerRelativeUrl: string, props: IVendorBlockReleaseDevProps) => {
    //     const result: any = await (await spCrudOps).deleteFile(fileServerRelativeUrl, props);
    //     return result;
    // };

    return {
        getData
       ,insertData
       ,getRootData
       ,batchInsert
       ,updateData
      //, currentProfile
       ,getGroupUsers
       ,currentUserInfo
       //,batchUpdate
        , deleteData,
        // getListInfo,
        // batchInsert,

        // batchDelete,
        // uploadFile,
        // deleteFile
    };
}