import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import { IEximCabaProps } from '../interface/IEximCabaProps';
import { IEmployee } from '../interface/IEmployee';
export interface EmployeeOps {
    getEmployee(props: ICabaModuleProps): Promise<IEximCabaProps>;
}
export default function EmployeeOps(): {
    getEmployee: (props: ICabaModuleProps) => Promise<IEmployee>;
};
