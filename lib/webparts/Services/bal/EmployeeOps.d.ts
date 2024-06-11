import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import { IEmployee } from '../interface/IEmployee';
export interface EmployeeOps {
    getEmployee(props: ICabaModuleProps): Promise<IEmployee>;
    getAllEmployees(props: ICabaModuleProps): Promise<IEmployee[]>;
}
export default function EmployeeOps(): {
    getEmployee: (props: ICabaModuleProps) => Promise<IEmployee>;
    getAllEmployees: (props: ICabaModuleProps) => Promise<IEmployee[]>;
};
