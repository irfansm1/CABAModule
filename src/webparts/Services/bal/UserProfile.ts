// import { IEximTravelBlockProps } from '../interface/IEximTravelBlockProps';
import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import SPCRUDOPS from '../dal/spcrudops';
import { IUserProfile } from "../interface/IUserProfile";

export interface UserProfileOps {
    getLoggUserProfile(props: ICabaModuleProps): Promise<IUserProfile>;
}
export default function LoggUserProfileOps() {
    const spCrudOps = SPCRUDOPS();
        const getLoggUserProfile = async (props: ICabaModuleProps): Promise<IUserProfile[]> => {
            return await (await spCrudOps).currentUserInfo(props).then(results => {
                let brr: Array<IUserProfile> = new Array<IUserProfile>();
                // results.map(item => {                        
                //         brr.push({
                         
                //             Title:item.Title
                //         });
                //     });
                  return results;
                });
            //return [];
    };
    return {
        getLoggUserProfile
    };
}