import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import { IMasterProps } from '../interface/IMasterProps';
export interface CabaMasterOps {
    getFlatSpecifications(props: ICabaModuleProps): Promise<any>;
    getFlatType(props: ICabaModuleProps): Promise<any>;
    getOccupancyType(props: ICabaModuleProps): Promise<any>;
    getSocietyName(props: ICabaModuleProps): Promise<any>;
    getOfficeLocation(props: ICabaModuleProps): Promise<any>;
    getDesignation(props: ICabaModuleProps): Promise<IMasterProps>;
}
export default function CabaMasterOps(): {
    getFlatType: (props: ICabaModuleProps) => Promise<any[]>;
    getOccupancyType: (props: ICabaModuleProps) => Promise<any[]>;
    getSocietyName: (props: ICabaModuleProps) => Promise<any[]>;
    getFlatSpecifications: (props: ICabaModuleProps) => Promise<any[]>;
    getOfficeLocation: (props: ICabaModuleProps) => Promise<any[]>;
};
