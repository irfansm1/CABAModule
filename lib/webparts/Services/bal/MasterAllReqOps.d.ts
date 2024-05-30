import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import { IMasterProps } from '../interface/IMasterProps';
export interface MasterAllReqOps {
    getCABASpecData(props: IMasterProps): Promise<IMasterProps>;
    getCABAFlateTypesData(props: IMasterProps): Promise<IMasterProps>;
    getOccupancyTypeData(props: IMasterProps): Promise<IMasterProps>;
    getSocietyNameData(props: IMasterProps): Promise<IMasterProps>;
}
export default function MasterAllReqOps(): {
    getCABASpecData: (props: ICabaModuleProps) => Promise<IMasterProps[]>;
    getCABAFlateTypesData: (props: ICabaModuleProps) => Promise<IMasterProps[]>;
    getOccupancyTypeData: (props: ICabaModuleProps) => Promise<IMasterProps[]>;
    getSocietyNameData: (props: ICabaModuleProps) => Promise<IMasterProps[]>;
};
