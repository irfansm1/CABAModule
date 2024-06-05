//import { IEximTravelBlockProps } from '../interface/IEximTravelBlockProps';
import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import { IEximCabaProps } from '../interface/IEximCabaProps';
import {IRankingMaster} from '../interface/IRankigMaster';

import SPCRUDOPS from '../dal/spcrudops';

export interface CABAReqOps {
    getCABAAdminData(props: IEximCabaProps): Promise<IEximCabaProps>;
    getRankingMasterData(props: IRankingMaster): Promise<IRankingMaster>;
    getUserAccomodationData(strFilter: string, sorting: any, props: IRankingMaster): Promise<IRankingMaster>;
   }

export default function CABAReqOps() {
    const spCrudOps = SPCRUDOPS();

    const getCABAAdminData = async (props: ICabaModuleProps): Promise<IEximCabaProps[]> => {
        
        var currentUserLogin = props.currentSPContext.pageContext._user._displayName;
        // var currentUserLogin= props.currentSPContext.pageContext._user.id;
        //  var currentUserLogin=(props.currentSPContext.pageContext._user._displayName=="spfarmadmin")?"Farm Admin":props.currentSPContext.pageContext._user._displayName;

        return await (await spCrudOps).getData("CABA_FlatMasters"
            , "*,Id,CABAFlatID,Author/Title,Author/Name,FlatSpecifications/FlatSpecifications,FlatSpecifications/Id,SocietyName/SocietyName,SocietyName/Id,OccupancyType/OccupancyType,OccupancyType/Id,FlatType/FlatType,FlatType/Id,OfficeLocation/OfficeLocation,OfficeLocation/Id,Wing,FlatNo,ActiveStatus,AssignedDate,EndDate,AssignedBy/Name,AssignedBy/Title,AssignedBy/Id,AssignedTo/Name,AssignedTo/Title,AssignedTo/Id"
            , "FlatSpecifications,Author,SocietyName,AssignedBy,AssignedTo,OccupancyType,FlatType,OfficeLocation"
            //, "(Author/Title eq '"+(currentUserLogin)+"') or (OnBehalfOf/Name eq '"+encodeURIComponent(currentUserLogin)+"')"
            , "(Author/Title) eq '" + (currentUserLogin) + "'"
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let brr: Array<IEximCabaProps> = new Array<IEximCabaProps>();
                results.map(item => {
                    brr.push({
                        ID:item.ID,
                         FlatSpecifications:item.FlatSpecifications !== undefined && item.FlatSpecifications !== null ? item.FlatSpecifications.FlatSpecifications: '',                       
                         FlatType:item.FlatType !== undefined ? item.FlatType.FlatType: '',                        
                         SocietyName:item.SocietyName !== undefined && item.SocietyName !== null ? item.SocietyName.SocietyName: '',
                         Wing:item.Wing,
                         FlatNo:item.FlatNo,
                         OccupancyType:item.OccupancyType !== undefined && item.OccupancyType !== null ? item.OccupancyType.OccupancyType: '',
                         ActiveStatus:item.ActiveStatus,
                         CABAFlatID:item.CABAFlatID,
                         OfficeLocation:item.OfficeLocation !==undefined && item.OfficeLocation !==null ? item.OfficeLocation.OfficeMaster:'',
                         //AssignedTo:item.AssignedTo,
                         AssignedTo:item.AssignedTo !==undefined && item.AssignedTo !==null ?item.AssignedTo.Title:'',
                         Occupied:item.Occupied,
                         Publish:item.Publish

                    });
                });

                return brr;
            });
    };

    const getRankingMasterData = async (props: ICabaModuleProps): Promise<IRankingMaster[]> => {
        
        var currentUserLogin = props.currentSPContext.pageContext._user._displayName;
        // var currentUserLogin= props.currentSPContext.pageContext._user.id;
        //  var currentUserLogin=(props.currentSPContext.pageContext._user._displayName=="spfarmadmin")?"Farm Admin":props.currentSPContext.pageContext._user._displayName;

        return await (await spCrudOps).getData("Ranking_Master"
            , "*,Id,DateofJoiningAppointment"
            , ""
            //, "(Author/Title eq '"+(currentUserLogin)+"') or (OnBehalfOf/Name eq '"+encodeURIComponent(currentUserLogin)+"')"
            , "(Author/Title) eq '" + (currentUserLogin) + "'"
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let brr: Array<IRankingMaster> = new Array<IRankingMaster>();
                results.map(item => {
                    brr.push({
                        Id:item.Id,
                        DateofJoiningAppointment:item.DateofJoiningAppointment,
                        Seniority:item.Seniority,
                        Transfer:item.Transfer,
                        YearofServiceinPresentGrade:item.YearofServiceinPresentGrade,
                        Spouse:item.Spouse,
                        Total:item.Total,
                        Rank:item.Rank ,
                        EmployeeCode:item.EmployeeCode !==undefined && item.EmployeeCode !==null ? item.EmployeeCode:'',
                        Designation:item.Designation !==undefined && item.Designation !==null ? item.Designation:'',

                    });
                });

                return brr;
            });
    };

   
    const getUserAccomodationData = async (strFilter: string, sorting: any, props: ICabaModuleProps): Promise<IEximCabaProps[]> => {
        debugger;
        var currentUserLogin = props.currentSPContext.pageContext._user._displayName;
        // var currentUserLogin=(props.currentSPContext.pageContext._user._displayName=="spfarmadmin")?"Farm Admin":props.currentSPContext.pageContext._user._displayName;

        return await (await spCrudOps).getData("CABA_FlatMasters"
            , "*,Id,CABAFlatID,Author/Title,Author/Name,FlatSpecifications/FlatSpecifications,FlatSpecifications/Id,SocietyName/SocietyName,SocietyName/Id,OccupancyType/OccupancyType,OccupancyType/Id,FlatType/FlatType,FlatType/Id,OfficeLocation/OfficeLocation,OfficeLocation/Id,Wing,FlatNo,ActiveStatus,AssignedDate,EndDate,AssignedBy/Name,AssignedBy/Title,AssignedBy/Id,AssignedTo/Name,AssignedTo/Title,AssignedTo/Id"
            , "FlatSpecifications,Author,SocietyName,AssignedBy,AssignedTo,OccupancyType,FlatType,OfficeLocation"
            , strFilter
            // , "(Author/Title eq '"+(currentUserLogin)+"') or (OnBehalfOf/Name eq '"+encodeURIComponent(currentUserLogin)+"')"
            , { column: 'Id', isAscending: false }, props).then(results => {
                console.log(results);
                let brr: Array<IEximCabaProps> = new Array<IEximCabaProps>();
                results.sort((a, b) => b.Id - a.Id).map(item => {
                    brr.push({
                        AuthorId: item.AuthorId,                        
                        ID:item.ID,
                        FlatSpecifications:item.FlatSpecifications !== undefined && item.FlatSpecifications !== null ? item.FlatSpecifications.FlatSpecifications: '',                       
                        FlatType:item.FlatType !== undefined ? item.FlatType.FlatType: '',                        
                        SocietyName:item.SocietyName !== undefined && item.SocietyName !== null ? item.SocietyName.SocietyName: '',
                        Wing:item.Wing,
                        FlatNo:item.FlatNo,
                        OccupancyType:item.OccupancyType !== undefined && item.OccupancyType !== null ? item.OccupancyType.OccupancyType: '',
                        ActiveStatus:item.ActiveStatus,
                        CABAFlatID:item.CABAFlatID,
                        OfficeLocation:item.OfficeLocation !==undefined && item.OfficeLocation !==null ? item.OfficeLocation.OfficeMaster:'',
                        AssignedBy:item.AssignedBy,
                        Occupied:item.Occupied,
                        Publish:item.Publish

                    });
                });

                return brr;
            });
    };

    return {
        getCABAAdminData,
        getRankingMasterData,
        getUserAccomodationData

    };
}