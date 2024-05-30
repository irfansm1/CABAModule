import { ICabaModuleProps } from "../interface/ICabaModuleProps";
export interface ISPCRUDOPS {
    getData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: {
        column: string;
        isAscending: boolean;
    }, props: ICabaModuleProps): Promise<any>;
    getRootData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: {
        column: string;
        isAscending: boolean;
    }, props: ICabaModuleProps): Promise<any>;
    insertData(listName: string, data: any, props: ICabaModuleProps): Promise<any>;
    updateData(listName: string, itemId: number, data: any, props: ICabaModuleProps): Promise<any>;
    deleteData(listName: string, itemId: number, props: ICabaModuleProps): Promise<any>;
    batchInsert(listName: string, data: any, props: ICabaModuleProps): Promise<any>;
    getGroupUsers(UserId: any, props: ICabaModuleProps): Promise<any>;
    currentUserInfo(props: ICabaModuleProps): Promise<any>;
}
export default function SPCRUDOPS(): Promise<ISPCRUDOPS>;
