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
export default function CABAReqOps() {
    var _this = this;
    var spCrudOps = SPCRUDOPS();
    var getCABAAdminData = function (props) { return __awaiter(_this, void 0, void 0, function () {
        var currentUserLogin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentUserLogin = props.currentSPContext.pageContext._user._displayName;
                    return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("CABA_FlatMasters", "*,Id,CABAFlatID,Author/Title,Author/Name,FlatSpecifications/FlatSpecifications,FlatSpecifications/Id,SocietyName/SocietyName,SocietyName/Id,OccupancyType/OccupancyType,OccupancyType/Id,FlatType/FlatType,FlatType/Id,OfficeLocation/OfficeLocation,OfficeLocation/Id,Wing,FlatNo,ActiveStatus,AssignedDate,EndDate,AssignedBy/Name,AssignedBy/Title,AssignedBy/Id,AssignedTo/Name,AssignedTo/Title,AssignedTo/Id", "FlatSpecifications,Author,SocietyName,AssignedBy,AssignedTo,OccupancyType,FlatType,OfficeLocation"
                    //, "(Author/Title eq '"+(currentUserLogin)+"') or (OnBehalfOf/Name eq '"+encodeURIComponent(currentUserLogin)+"')"
                    , "(Author/Title) eq '" + (currentUserLogin) + "'", { column: 'Id', isAscending: false }, props).then(function (results) {
                        //console.log(results);
                        var brr = new Array();
                        results.map(function (item) {
                            brr.push({
                                ID: item.ID,
                                FlatSpecifications: item.FlatSpecifications !== undefined && item.FlatSpecifications !== null ? item.FlatSpecifications.FlatSpecifications : '',
                                FlatType: item.FlatType !== undefined ? item.FlatType.FlatType : '',
                                SocietyName: item.SocietyName !== undefined && item.SocietyName !== null ? item.SocietyName.SocietyName : '',
                                Wing: item.Wing,
                                FlatNo: item.FlatNo,
                                OccupancyType: item.OccupancyType !== undefined && item.OccupancyType !== null ? item.OccupancyType.OccupancyType : '',
                                ActiveStatus: item.ActiveStatus,
                                CABAFlatID: item.CABAFlatID,
                                OfficeLocation: item.OfficeLocation !== undefined && item.OfficeLocation !== null ? item.OfficeLocation.OfficeLocation : '',
                                //AssignedTo:item.AssignedTo,
                                AssignedTo: item.AssignedTo !== undefined && item.AssignedTo !== null ? item.AssignedTo.Title : '',
                                Occupied: item.Occupied,
                                Publish: item.Publish,
                                EmpCode: item.EmpCode
                            });
                        });
                        return brr;
                    })];
                case 2: 
                // var currentUserLogin= props.currentSPContext.pageContext._user.id;
                //  var currentUserLogin=(props.currentSPContext.pageContext._user._displayName=="spfarmadmin")?"Farm Admin":props.currentSPContext.pageContext._user._displayName;
                return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getRankingMasterData = function (props) { return __awaiter(_this, void 0, void 0, function () {
        var currentUserLogin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentUserLogin = props.currentSPContext.pageContext._user._displayName;
                    return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("Ranking_Master", "*,Id,DateofJoiningAppointment", ""
                    //, "(Author/Title eq '"+(currentUserLogin)+"') or (OnBehalfOf/Name eq '"+encodeURIComponent(currentUserLogin)+"')"
                    , "(Author/Title) eq '" + (currentUserLogin) + "'", { column: 'Id', isAscending: false }, props).then(function (results) {
                        //console.log(results);
                        var brr = new Array();
                        results.map(function (item) {
                            brr.push({
                                Id: item.Id,
                                DateofJoiningAppointment: item.DateofJoiningAppointment,
                                Seniority: item.Seniority,
                                Transfer: item.Transfer,
                                YearofServiceinPresentGrade: item.YearofServiceinPresentGrade,
                                Spouse: item.Spouse,
                                Total: item.Total,
                                Rank: item.Rank,
                                EmployeeCode: item.EmployeeCode !== undefined && item.EmployeeCode !== null ? item.EmployeeCode : '',
                                Designation: item.Designation !== undefined && item.Designation !== null ? item.Designation : '',
                            });
                        });
                        return brr;
                    })];
                case 2: 
                // var currentUserLogin= props.currentSPContext.pageContext._user.id;
                //  var currentUserLogin=(props.currentSPContext.pageContext._user._displayName=="spfarmadmin")?"Farm Admin":props.currentSPContext.pageContext._user._displayName;
                return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    var getUserAccomodationData = function (strFilter, sorting, props) { return __awaiter(_this, void 0, void 0, function () {
        var currentUserLogin;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    currentUserLogin = props.currentSPContext.pageContext._user._displayName;
                    return [4 /*yield*/, spCrudOps];
                case 1: return [4 /*yield*/, (_a.sent()).getData("CABA_FlatMasters", "*,Id,CABAFlatID,Author/Title,Author/Name,FlatSpecifications/FlatSpecifications,FlatSpecifications/Id,SocietyName/SocietyName,SocietyName/Id,OccupancyType/OccupancyType,OccupancyType/Id,FlatType/FlatType,FlatType/Id,OfficeLocation/OfficeLocation,OfficeLocation/Id,Wing,FlatNo,ActiveStatus,AssignedDate,EndDate,AssignedBy/Name,AssignedBy/Title,AssignedBy/Id,AssignedTo/Name,AssignedTo/Title,AssignedTo/Id", "FlatSpecifications,Author,SocietyName,AssignedBy,AssignedTo,OccupancyType,FlatType,OfficeLocation", strFilter
                    // , "(Author/Title eq '"+(currentUserLogin)+"') or (OnBehalfOf/Name eq '"+encodeURIComponent(currentUserLogin)+"')"
                    , { column: 'Id', isAscending: false }, props).then(function (results) {
                        //console.log(results);
                        var brr = new Array();
                        results.sort(function (a, b) { return b.Id - a.Id; }).map(function (item) {
                            brr.push({
                                AuthorId: item.AuthorId,
                                ID: item.ID,
                                FlatSpecifications: item.FlatSpecifications !== undefined && item.FlatSpecifications !== null ? item.FlatSpecifications.FlatSpecifications : '',
                                FlatType: item.FlatType !== undefined ? item.FlatType.FlatType : '',
                                SocietyName: item.SocietyName !== undefined && item.SocietyName !== null ? item.SocietyName.SocietyName : '',
                                Wing: item.Wing,
                                FlatNo: item.FlatNo,
                                OccupancyType: item.OccupancyType !== undefined && item.OccupancyType !== null ? item.OccupancyType.OccupancyType : '',
                                ActiveStatus: item.ActiveStatus,
                                CABAFlatID: item.CABAFlatID,
                                OfficeLocation: item.OfficeLocation !== undefined && item.OfficeLocation !== null ? item.OfficeLocation.OfficeMaster : '',
                                AssignedBy: item.AssignedBy,
                                Occupied: item.Occupied,
                                Publish: item.Publish
                            });
                        });
                        return brr;
                    })];
                case 2: 
                // var currentUserLogin=(props.currentSPContext.pageContext._user._displayName=="spfarmadmin")?"Farm Admin":props.currentSPContext.pageContext._user._displayName;
                return [2 /*return*/, _a.sent()];
            }
        });
    }); };
    return {
        getCABAAdminData: getCABAAdminData,
        getRankingMasterData: getRankingMasterData,
        getUserAccomodationData: getUserAccomodationData
    };
}

//# sourceMappingURL=CABAReqOps.js.map
