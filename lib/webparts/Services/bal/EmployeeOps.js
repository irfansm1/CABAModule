var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import SPCRUDOPS from '../dal/spcrudops';
export default function EmployeeOps() {
    var _this = this;
    var spCrudOps = SPCRUDOPS();
    var getGroups = function (groupArray) {
        var groups = "";
        groupArray.forEach(function (element) {
            groups = groups + (groups == "" ? element.ShortName : "," + element.ShortName);
        });
        return groups;
    };
    var getEmployee = function (props) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        var currentUserLogin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentUserLogin = props.currentSPContext.pageContext._user._email;
                    return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).currentUserInfo(props).then(function (userInfo) { return __awaiter(_this, void 0, void 0, function () {
                        var currentloginname, LoggedInUser;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(userInfo);
                                    currentloginname = userInfo.LoginName;
                                    LoggedInUser = encodeURIComponent(currentloginname);
                                    if (LoggedInUser === 'i%3A0%23.f%7Cmembership%7C%C3%A0nsh.s') {
                                        LoggedInUser = 'i%3A0%23.f%7Cmembership%7CAnsh.s';
                                    }
                                    return [4 /*yield*/, spCrudOps];
                                case 1: return [4 /*yield*/, (_a.sent()).getRootData("EmployeeMaster", "*,Title,Designation/Title,LeaveLevel1/Title,LeaveLevel2/Name,LeaveLevel2/Title,LeaveLevel2/Id,SubGroup/ShortName,CurrentOfficeLocation/Title,UserName/Name", "SubGroup,Designation,LeaveLevel1,LeaveLevel2,CurrentOfficeLocation,UserName", "(UserName/Name eq '" + LoggedInUser + "')"
                                    // , "(CompanyEmail eq '"+(currentUserLogin)+"')"
                                    , { column: 'Id', isAscending: false }, props).then(function (results) {
                                        console.log(results);
                                        var employees = new Array();
                                        results.map(function (item) {
                                            employees.push({
                                                Title: item.Title,
                                                EmployeeId: item.Title,
                                                EmployeeTitle: item.EmployeeTitle,
                                                FirstName: item.FirstName,
                                                MiddleName: item.MiddleName,
                                                LastName: item.LastName,
                                                UserName: item.UserName,
                                                Gender: item.Gender,
                                                OfficeLocation: item.OfficeLocation,
                                                CurrentOfficeLocation: item.CurrentOfficeLocation.Title,
                                                SubGroup: (item.SubGroup.length > 0 ? getGroups(item.SubGroup) : ""),
                                                Unit: item.Unit,
                                                EmployeeType: item.EmployeeType,
                                                Scale: item.Scale,
                                                Grade: item.Grade,
                                                DesignationId: item.Designation.Title,
                                                Designation: item.Designation.Title,
                                                LoginUserDesignation: item.Designation.Title,
                                                Payscale: item.Payscale,
                                                ReportingManager: item.ReportingManager,
                                                AlternateReportingManager: item.AlternateReportingManager,
                                                Active: item.Active,
                                                Phone_x0020_No: item.Phone_x0020_No,
                                                MobileNo_x002e_: item.MobileNo_x002e_,
                                                CompanyEmail: item.CompanyEmail,
                                                AlternateEmail: item.AlternateEmail,
                                                LeaveLevel1: item.LeaveLevel1.Title,
                                                LeaveLevel2: item.LeaveLevel2.Name,
                                                LeaveLevel2val: item.LeaveLevel2.Title,
                                                LeaveLevel2Id: item.LeaveLevel2Id,
                                                Role: item.Role,
                                                BranchName: item.BranchName,
                                                HHApproverName: item.HHApproverName,
                                                LTCDate: item.LTCDate,
                                                TempDOB: item.TempDOB,
                                                EmpType: item.EmpType
                                            });
                                        });
                                        return employees[0];
                                    })];
                                case 2: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
                case 2: 
                //  var currentUserEmail = props.currentSPContext.pageContext._user._email;
                //var currentUserLogin=(props.currentSPContext.pageContext._user._displayName=="spfarmadmin")?"developer4@eximbankindia.in":props.currentSPContext.pageContext._user._email;
                //props.currentSPContext.pageContext._user._email;
                return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getAllEmployees = function (props) { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).currentUserInfo(props).then(function (userInfo) { return __awaiter(_this, void 0, void 0, function () {
                        var currentloginname, LoggedInUser;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(userInfo);
                                    currentloginname = userInfo.LoginName;
                                    LoggedInUser = encodeURIComponent(currentloginname);
                                    if (LoggedInUser === 'i%3A0%23.f%7Cmembership%7C%C3%A0nsh.s') {
                                        LoggedInUser = 'i%3A0%23.f%7Cmembership%7CAnsh.s';
                                    }
                                    return [4 /*yield*/, spCrudOps];
                                case 1: return [4 /*yield*/, (_a.sent()).getRootData("EmployeeMaster", "*,Title,Designation/Title,LeaveLevel1/Title,LeaveLevel2/Name,LeaveLevel2/Title,LeaveLevel2/Id,SubGroup/ShortName,CurrentOfficeLocation/Title,UserName/Name", "SubGroup,Designation,LeaveLevel1,LeaveLevel2,CurrentOfficeLocation,UserName", "", { column: 'Id', isAscending: false }, props).then(function (results) {
                                        console.log(results);
                                        var employees = new Array();
                                        results.map(function (item) {
                                            employees.push({
                                                Title: item.Title,
                                                EmployeeId: item.Title,
                                                EmployeeTitle: item.EmployeeTitle,
                                                FirstName: item.FirstName,
                                                MiddleName: item.MiddleName,
                                                LastName: item.LastName,
                                                UserName: item.UserName,
                                                Gender: item.Gender,
                                                OfficeLocation: item.OfficeLocation,
                                                CurrentOfficeLocation: item.CurrentOfficeLocation.Title,
                                                SubGroup: (item.SubGroup.length > 0 ? getGroups(item.SubGroup) : ""),
                                                Unit: item.Unit,
                                                EmployeeType: item.EmployeeType,
                                                Scale: item.Scale,
                                                Grade: item.Grade,
                                                DesignationId: item.Designation.Title,
                                                Designation: item.Designation.Title,
                                                LoginUserDesignation: item.Designation.Title,
                                                Payscale: item.Payscale,
                                                ReportingManager: item.ReportingManager,
                                                AlternateReportingManager: item.AlternateReportingManager,
                                                Active: item.Active,
                                                Phone_x0020_No: item.Phone_x0020_No,
                                                MobileNo_x002e_: item.MobileNo_x002e_,
                                                CompanyEmail: item.CompanyEmail,
                                                AlternateEmail: item.AlternateEmail,
                                                LeaveLevel1: item.LeaveLevel1.Title,
                                                LeaveLevel2: item.LeaveLevel2.Name,
                                                LeaveLevel2val: item.LeaveLevel2.Title,
                                                LeaveLevel2Id: item.LeaveLevel2Id,
                                                Role: item.Role,
                                                BranchName: item.BranchName,
                                                HHApproverName: item.HHApproverName,
                                                LTCDate: item.LTCDate,
                                                TempDOB: item.TempDOB,
                                                EmpType: item.EmpType
                                            });
                                        });
                                        return employees;
                                    })];
                                case 2: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        getEmployee: getEmployee,
        getAllEmployees: getAllEmployees
    };
}

//# sourceMappingURL=EmployeeOps.js.map
