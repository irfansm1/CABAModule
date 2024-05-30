import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import { IMasterProps } from '../interface/IMasterProps';
import SPCRUDOPS from '../dal/spcrudops';

export interface MasterAllReqOps {
    getCABASpecData(props: IMasterProps): Promise<IMasterProps>;
    getCABAFlateTypesData(props: IMasterProps): Promise<IMasterProps>;
    getOccupancyTypeData(props: IMasterProps): Promise<IMasterProps>;
    getSocietyNameData(props:IMasterProps): Promise<IMasterProps>;
   }

export default function MasterAllReqOps() {
    const spCrudOps = SPCRUDOPS();
    const getCABASpecData = async (props: ICabaModuleProps): Promise<IMasterProps[]> => {
        debugger;
        var currentUserLogin = props.currentSPContext.pageContext._user._displayName;
          return await (await spCrudOps).getData("FlatSpecificationsMaster"
            , "*,Id,FlatSpecifications"
            , ""          
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let brr: Array<IMasterProps> = new Array<IMasterProps>();
                results.map(item => {
                    brr.push({
                        ID:item.ID,
                         FlatSpecifications:item.FlatSpecifications
                    });
                });

                return brr;
            });
    };

    const getCABAFlateTypesData = async (props: ICabaModuleProps): Promise<IMasterProps[]> => {
        debugger;
        var currentUserLogin = props.currentSPContext.pageContext._user._displayName;
          return await (await spCrudOps).getData("CABAFlatTypeMaster"
            , "*,Id,FlatType"
            , ""          
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let brr: Array<IMasterProps> = new Array<IMasterProps>();
                results.map(item => {
                    brr.push({
                        ID:item.ID,
                        FlatType:item.FlatType
                    });
                });

                return brr;
            });
    };
    const getOccupancyTypeData = async (props: ICabaModuleProps): Promise<IMasterProps[]> => {
        debugger;
        var currentUserLogin = props.currentSPContext.pageContext._user._displayName;
          return await (await spCrudOps).getData("OccupancyTypeMaster"
            , "*,Id,OccupancyType"
            , ""          
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let brr: Array<IMasterProps> = new Array<IMasterProps>();
                results.map(item => {
                    brr.push({
                        ID:item.ID,
                        OccupancyType:item.OccupancyType
                    });
                });

                return brr;
            });
    };
    const getSocietyNameData = async (props: ICabaModuleProps): Promise<IMasterProps[]> => {
        debugger;
        var currentUserLogin = props.currentSPContext.pageContext._user._displayName;
          return await (await spCrudOps).getData("SocietyNameMaster"
            , "*,Id,SocietyName"
            , ""          
            , ""
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let brr: Array<IMasterProps> = new Array<IMasterProps>();
                results.map(item => {
                    brr.push({
                        ID:item.ID,
                        SocietyName:item.SocietyName
                    });
                });

                return brr;
            });
    };

    return {
        getCABASpecData,
        getCABAFlateTypesData,
        getOccupancyTypeData,
        getSocietyNameData
    };
}