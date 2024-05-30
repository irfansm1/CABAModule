import { ICabaModuleProps } from '../interface/ICabaModuleProps';
import SPCRUDOPS from '../dal/spcrudops';
// import { IEximTravelProps } from "../interface/IEximTravelProps";
import { IEximCabaProps } from '../interface/IEximCabaProps';
import { IEmployee } from '../interface/IEmployee';


export interface EmployeeOps {
    getEmployee( props: ICabaModuleProps): Promise<IEximCabaProps>;
 
}

export default function EmployeeOps() {
    const spCrudOps = SPCRUDOPS();    
        const getGroups=(groupArray)=>{
            let groups= "";
            groupArray.forEach(element => {
                groups =groups+ (groups==""?element.ShortName:","+element.ShortName)
            });
            return groups;
        }
        const getEmployee = async (props: ICabaModuleProps): Promise<IEmployee> => {
            debugger;
            var currentUserLogin = props.currentSPContext.pageContext._user._email;
          //  var currentUserEmail = props.currentSPContext.pageContext._user._email;

            //var currentUserLogin=(props.currentSPContext.pageContext._user._displayName=="spfarmadmin")?"developer4@eximbankindia.in":props.currentSPContext.pageContext._user._email;
            //props.currentSPContext.pageContext._user._email;
            return await (await spCrudOps).currentUserInfo(props).then(async(userInfo:any) =>
                {
                    console.log(userInfo)
                    var currentloginname = userInfo.LoginName;
                    var LoggedInUser = encodeURIComponent(currentloginname);
                    if(LoggedInUser==='i%3A0%23.f%7Cmembership%7C%C3%A0nsh.s')
                    {
                        LoggedInUser='i%3A0%23.f%7Cmembership%7CAnsh.s';
                    }
                    return await (await spCrudOps).getRootData("EmployeeMaster"
                    , "*,Title,Designation/Title,LeaveLevel1/Title,LeaveLevel2/Name,LeaveLevel2/Title,LeaveLevel2/Id,SubGroup/ShortName,CurrentOfficeLocation/Title,UserName/Name"
                    , "SubGroup,Designation,LeaveLevel1,LeaveLevel2,CurrentOfficeLocation,UserName"
                    , "(UserName/Name eq '"+LoggedInUser+"')"
                    // , "(CompanyEmail eq '"+(currentUserLogin)+"')"
                    , { column: 'Id', isAscending: false }, props).then(results => {
                        console.log(results);
                        let employees: Array<IEmployee> = new Array<IEmployee>();
                        results.map(item => {
                            employees.push({
                            Title:item.Title,
                            EmployeeId:item.Title,
                            EmployeeTitle:item.EmployeeTitle,
                            FirstName:item.FirstName,
                            MiddleName:item.MiddleName,
                            LastName:item.LastName,
                            UserName:item.UserName,
                            Gender:item.Gender,
                            OfficeLocation:item.OfficeLocation,
                            CurrentOfficeLocation:item.CurrentOfficeLocation.Title,
                            SubGroup:(item.SubGroup.length>0 ? getGroups(item.SubGroup):""),
                            Unit:item.Unit,
                            EmployeeType:item.EmployeeType,
                            Scale:item.Scale,
                            Grade:item.Grade,
                            DesignationId:item.Designation.Title,
                            Designation:item.Designation.Title,
                            LoginUserDesignation:item.Designation.Title,
                            Payscale:item.Payscale,
                            ReportingManager:item.ReportingManager,
                            AlternateReportingManager:item.AlternateReportingManager,
                            Active:item.Active,
                            Phone_x0020_No:item.Phone_x0020_No,
                            MobileNo_x002e_:item.MobileNo_x002e_,
                            CompanyEmail:item.CompanyEmail,
                            AlternateEmail:item.AlternateEmail,
                            LeaveLevel1:item.LeaveLevel1.Title,
                            LeaveLevel2:item.LeaveLevel2.Name,
                            LeaveLevel2val:item.LeaveLevel2.Title,
                            LeaveLevel2Id:item.LeaveLevel2Id,
                            Role:item.Role,
                            BranchName:item.BranchName,
                            HHApproverName:item.HHApproverName,
                            LTCDate:item.LTCDate,
                            TempDOB:item.TempDOB,
                            EmpType:item.EmpType
                            });
                        });
    
                        return employees[0];
                    },error=>{
                        console.log(error);
                    });
                })
                
        };


    return {
        getEmployee
       
    };
}