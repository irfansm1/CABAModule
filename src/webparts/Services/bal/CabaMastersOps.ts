import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import SPCRUDOPS from '../dal/spcrudops';
import { IMasterProps } from '../interface/IMasterProps';
import { Item } from 'sp-pnp-js';


export interface CabaMasterOps {
    getFlatSpecifications(props:ICabaModuleProps): Promise<any>;
    getFlatType(props: ICabaModuleProps): Promise<any>;    
    getOccupancyType(props: ICabaModuleProps): Promise<any>;
    getSocietyName(props: ICabaModuleProps): Promise<any>;
    getOfficeLocation(props: ICabaModuleProps): Promise<any>;
    getDesignation(props: ICabaModuleProps): Promise<IMasterProps>;
    }

export default function CabaMasterOps() {
    const spCrudOps = SPCRUDOPS();
    debugger;
    
    const getFlatSpecifications = async (props: ICabaModuleProps): Promise<any[]> => {
        debugger;
        return await (await spCrudOps).getData("FlatSpecificationsMaster"
            , "*,FlatSpecifications"
            , ""
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                debugger;
                let master: Array<any> = new Array<any[]>();
                results.map(item => {
                    master.push({
                        key: item.Id,
                        text: item.FlatSpecifications
                    });
                });

                return master;
            });
    };
    const getFlatType = async (props: ICabaModuleProps): Promise<any[]> => {

        return await (await spCrudOps).getData("CABAFlatTypeMaster"
            , "*,FlatType"
            , ""
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let master: Array<any> = new Array<any[]>();
                results.map(item => {
                    master.push({
                        key: item.Id,
                        text: item.FlatType,
                        
                    });
                });

                return master;
            });
    };
    
    const getOccupancyType = async (props: ICabaModuleProps): Promise<any[]> => {

        return await (await spCrudOps).getData("OccupancyTypeMaster"
            , "*"
            , ""
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let master: Array<any> = new Array<any[]>();
                results.map(item => {
                    master.push({
                        key: item.Id,
                        text: item.OccupancyType
                    });
                });
                return master;
            });
    };
    const getSocietyName = async (props: ICabaModuleProps): Promise<any[]> => {
        return await (await spCrudOps).getData("SocietyNameMaster"
            , "*"
            , ""
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let master: Array<any> = new Array<any[]>();
                results.map(item => {
                    master.push({
                        key: item.Id,
                        text: item.SocietyName
                    });
                });

                return master;
            });
    };
    const getOfficeLocation = async (props: ICabaModuleProps): Promise<any[]> => {
        return await (await spCrudOps).getData("OfficeMaster"
            , "*"
            , ""
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let master: Array<any> = new Array<any[]>();
                results.map(item => {
                    master.push({
                        key: item.Id,
                        text: item.OfficeLocation
                    });
                });

                return master;
            });
    };

    // const getDesignation = async (props: ICabaModuleProps): Promise<IMasterProps[]> => {
    //     var currentUserLogin= props.currentSPContext.pageContext._user._displayName;
    //     return await (await spCrudOps).getData("CABA_AssociationList"
    //         , "*"
    //         , ""
    //         , "Designation eq '"+currentUserLogin+"'"
    //         , { column: 'Id', isAscending: false }, props).then(results => {
    //             console.log(results);
    //             let brr: Array<IMasterProps> = new Array<IMasterProps>();
    //             results.map(item => {
    //                 brr.push({
    //                     ID: item.ID,
    //                     Designation: item.Designation,
    //                     FlatType: item.FlatType,
    //                 });
    //             });

    //             return brr;
    //         });
    // };
    
    return {
        getFlatType       
        , getOccupancyType
        , getSocietyName       
        ,getFlatSpecifications
        ,getOfficeLocation
       // ,getDesignation
    };
}