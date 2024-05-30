
import { ICabaModuleProps } from "../interface/ICabaModuleProps";
//import {  Web } from "@pnp/sp";
import { LogLevel, Logger, Web, sp, ItemAddResult } from 'sp-pnp-js';

//import { ConsoleListener, Logger, LogLevel } from "@pnp/logging";

export interface ISPCRUDOPS {
    getData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
        , orderby: { column: string, isAscending: boolean }, props: ICabaModuleProps): Promise<any>;
    getRootData(listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string
        , orderby: { column: string, isAscending: boolean }, props: ICabaModuleProps): Promise<any>;
    insertData(listName: string, data: any, props: ICabaModuleProps): Promise<any>;
     updateData(listName: string, itemId: number, data: any, props: ICabaModuleProps): Promise<any>;
     deleteData(listName: string, itemId: number, props: ICabaModuleProps): Promise<any>;
    // getListInfo(listName: string, props: IVendorBlockReleaseDevProps): Promise<any>;
    batchInsert(listName: string, data: any, props: ICabaModuleProps): Promise<any>;
    //currentProfile(props: IEximTravelBlockProps): Promise<any>;
    getGroupUsers(UserId:any, props: ICabaModuleProps): Promise<any>;
    currentUserInfo(props: ICabaModuleProps): Promise<any>;
    // batchUpdate(listName: string, data: any, props: IVendorBlockReleaseDevProps): Promise<any>;
    // batchDelete(listName: string, data: any, props: IVendorBlockReleaseDevProps): Promise<any>;
    // uploadFile(folderServerRelativeUrl: string, file: File, props: IVendorBlockReleaseDevProps): Promise<any>;
    // deleteFile(fileServerRelativeUrl: string, props: IVendorBlockReleaseDevProps): Promise<any>;
}

export default async function SPCRUDOPS(): Promise<ISPCRUDOPS> {
    const getData = async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: { column: string, isAscending: boolean }, props: ICabaModuleProps) => {
        let web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
        const items: any[] = await web.lists.getByTitle(listName).items.select(columnsToRetrieve).expand(columnsToExpand).filter(filters).orderBy(orderby.column, orderby.isAscending).getAll();
        return items;
    };
    const getRootData = async (listName: string, columnsToRetrieve: string, columnsToExpand: string, filters: string, orderby: { column: string, isAscending: boolean }, props: ICabaModuleProps) => {
        let url = window.location.origin;
        let web = new Web(url);
        const items: any[] = await web.lists.getByTitle(listName).items.select(columnsToRetrieve).expand(columnsToExpand).filter(filters).orderBy(orderby.column, orderby.isAscending).getAll();
        return items;
    };
    const insertData = async (listName: string, data: any, props: ICabaModuleProps) => {
        let web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
        return await web.lists.getByTitle(listName).items.add(data).then(result => {
            return result;
        });
    };
    const batchInsert = async (listName: string, data: any, props: ICabaModuleProps) => {
        let web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
        let list = web.lists.getByTitle(listName);
        const entityTypeFullName = await list.getListItemEntityTypeFullName();
        let batch = web.createBatch();

        for (let d = 0; d < data.length; d++) {
            list.items.inBatch(batch).add(data[d], entityTypeFullName).then(b => {
                console.log(b);
            });
        }

        return await batch.execute();
    };
    const updateData = async (listName: string, itemId: number, data: any, props: ICabaModuleProps) => {
        let web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
        return await web.lists.getByTitle(listName).items.getById(itemId).update(data).then(result => {
            return result;
        });
    };

    // const currentProfile = async (props: IEximTravelBlockProps) => {
    //     return await sp.profiles.myProperties.get().then(async(response)=>{
    //         return await sp.web.currentUser.get().then(async(response)=>{
    //             console.log(response);
    //         return response;
    //       });
    //      });
    // };  
    
    const currentUserInfo = async (props: ICabaModuleProps) => {
            return await sp.web.currentUser.get().then(async(response)=>{
                return await getGroupUsers(response.Id,props).then(async(groupsresponse)=>{
                    response.ishr=groupsresponse.filter(function(x){return x.Title=='HR';}).length>0;
                    response.istraveldesk=groupsresponse.filter(function(x){return x.Title=='TravelDesk';}).length>0;
                    response.istraveladmin=groupsresponse.filter(function(x){return x.Title=='TICE_Admin';}).length>0; 
                    return response;        
                })
          });
    }; 

    const getGroupUsers = async (UserId:any,props: ICabaModuleProps) => {
      return await sp.web.siteUsers.getById(UserId).groups.get().then(groups => {
        return groups;
      });
    };
    // const getGroupUsers = async (groupId: number, props: IEximTravelBlockProps) => {
    //     let web = new Web(props.currentSPContext.pageContext.web.absoluteUrl+ "/_api/web/siteusers");
    //     const items: any = await web.siteGroups.getById(groupId);
    //     return items;
    // };

    const deleteData = async (listName: string, itemId: number, props: ICabaModuleProps) => {        
        let web = new Web(props.currentSPContext.pageContext.web.absoluteUrl);
        return await web.lists.getByTitle(listName).items.getById(itemId).delete().then(result => {
            return result;
        });
    };

    // const getListInfo = async (listName: string, props: IVendorBlockReleaseDevProps) => {
    //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
    //     const list = await web.lists.getByTitle(listName);
    //     const listInfo = await list.select("Id,Title")();

    //     return listInfo;
    // };



    // const batchUpdate = async (listName: string, data: any, props: IVendorBlockReleaseDevProps) => {
    //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
    //     let list = web.lists.getByTitle(listName);
    //     const entityTypeFullName = await list.getListItemEntityTypeFullName();
    //     let batch = web.createBatch();

    //     for (let d = 0; d < data.length; d++) {
    //         list.items.getById(data[d].Id).inBatch(batch).update(data[d], entityTypeFullName).then(b => {
    //             console.log(b);
    //         });
    //     }

    //     return await batch.execute();
    // };

    // const batchDelete = async (listName: string, data: any, props: IVendorBlockReleaseDevProps) => {
    //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
    //     let list = web.lists.getByTitle(listName);
    //     const entityTypeFullName = await list.getListItemEntityTypeFullName();
    //     let batch = web.createBatch();

    //     for (let d = 0; d < data.length; d++) {
    //         list.items.getById(data[d].Id).inBatch(batch).delete().then(b => {
    //             console.log(b);
    //         });
    //     }

    //     return await batch.execute();
    // };

    // const uploadFile = async (folderServerRelativeUrl: string, file: File, props: IVendorBlockReleaseDevProps) => {
    //     Logger.subscribe(new ConsoleListener());
    //     Logger.activeLogLevel = LogLevel.Verbose;

    //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);
    //     var ticks = ((new Date().getTime() * 10000) + 621355968000000000);
    //     return await web.getFolderByServerRelativeUrl(folderServerRelativeUrl).files.addChunked(ticks.toString() + "_" + file.name, file, data => {
    //         Logger.log({ data: data, level: LogLevel.Verbose, message: "progress" });
    //     }, true);
    // };

    // const deleteFile = async (fileServerRelativeUrl: string, props: IVendorBlockReleaseDevProps) => {
    //     Logger.subscribe(new ConsoleListener());
    //     Logger.activeLogLevel = LogLevel.Verbose;

    //     let web = Web(props.currentSPContext.pageContext.web.absoluteUrl);

    //     return await web.getFileByServerRelativeUrl(fileServerRelativeUrl).delete().then(result => {
    //         return result;
    //     });
    // };

    return {
        getData
        , insertData
        , getRootData
        ,batchInsert
        ,updateData
        ,getGroupUsers
       // ,currentProfile,
        ,currentUserInfo
        ,     deleteData,
        //     getListInfo,

        //     batchUpdate,
        //     batchDelete,
        //     uploadFile,
        //     deleteFile
    };
}