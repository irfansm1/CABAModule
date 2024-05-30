import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import { IUserProfile } from "../interface/IUserProfile";
export interface UserProfileOps {
    getLoggUserProfile(props: ICabaModuleProps): Promise<IUserProfile>;
}
export default function LoggUserProfileOps(): {
    getLoggUserProfile: (props: ICabaModuleProps) => Promise<IUserProfile[]>;
};
