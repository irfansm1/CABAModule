import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import { IEximCabaProps } from '../interface/IEximCabaProps';
import { IRankingMaster } from '../interface/IRankigMaster';
export interface CABAReqOps {
    getCABAAdminData(props: IEximCabaProps): Promise<IEximCabaProps>;
    getRankingMasterData(props: IRankingMaster): Promise<IRankingMaster>;
    getUserAccomodationData(strFilter: string, sorting: any, props: IRankingMaster): Promise<IRankingMaster>;
}
export default function CABAReqOps(): {
    getCABAAdminData: (props: ICabaModuleProps) => Promise<IEximCabaProps[]>;
    getRankingMasterData: (props: ICabaModuleProps) => Promise<IRankingMaster[]>;
    getUserAccomodationData: (strFilter: string, sorting: any, props: ICabaModuleProps) => Promise<IEximCabaProps[]>;
};
