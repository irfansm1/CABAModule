var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import * as React from 'react';
import styles from './CabaAdminModule.module.scss';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { DetailsList, SelectionMode, Checkbox, SearchBox, DetailsListLayoutMode, PrimaryButton, Icon, } from 'office-ui-fabric-react';
import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css");
import useSPCRUD from '../../Services/bal/spcrud';
import CABAReqOps from '../../Services/bal/CABAReqOps';
import EmployeeOps from '../../Services/bal/EmployeeOps';
import Utilities from '../../Services/bal/utilities';
import * as XLSX from 'xlsx';
var spCrudObj;
var CabaAdminModule = (function (_super) {
    __extends(CabaAdminModule, _super);
    function CabaAdminModule(props) {
        var _this = _super.call(this, props) || this;
        //}
        //export default class CABAAdminDashboards extends React.Component<ICabaModuleProps> {
        _this.FlatSpecifications = [];
        _this.FlatTypes = [];
        _this.OccupancyType = [];
        _this.SocietyName = [];
        _this.officeLocation = [];
        _this.transfer = [
            { key: 'Yes', text: 'Yes' },
            { key: 'No', text: 'No' },
        ];
        _this.PublishGetTemp = { ID: "", EmployeeName: "", GradeorScale: 0,
            FlatSpecifications: "", FlatType: "", SocietyName: "", Wing: "", FlatNo: "", OccupancyType: "", ActiveStatus: "",
            CABAFlatID: "", OfficeLocation: "", AssignedTo: "", AssignedDate: "", EndDate: "", AssignedBy: "", Occupied: "",
            Publish: ""
        };
        _this.state = {
            isDialogVisible: false,
            isDialogRankingVisible: false,
            Submitted: false,
            cabaAdminData: [],
            originalData: [],
            cabaRankDashboard: [],
            flatSpecifications: "",
            flatTypes: "",
            societyName: "",
            occupancyType: "",
            officeLocation: "",
            wing: "",
            flatNo: "",
            EmployeeID: "",
            EmployeeCode: "",
            DateofJoiningAppointment: new Date(),
            Seniority: '',
            Transfer: '',
            YearofServiceinPresentGrade: '',
            Spouse: '',
            Total: '',
            Rank: '',
            Designation: '',
            checkboxItemPublish: _this.PublishGetTemp,
            publisbtnhideshow: false,
            searchQuery: "",
        };
        _this.getEmployeeData = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        return [4 /*yield*/, EmployeeOps().getEmployee(this.props).then(function (brrResults) {
                                _this.setState({
                                    EmployeeID: brrResults.Title,
                                    EmployeeName: (brrResults.FirstName + ' ' + brrResults.LastName),
                                    EmployeeCode: brrResults.EmployeeTitle,
                                });
                                return brrResults;
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.cabaAdminDashboard = function () { return __awaiter(_this, void 0, void 0, function () {
            var spCrudObj_1, brrResults, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj_1 = _a.sent();
                        this.setState(spCrudObj_1);
                        return [4 /*yield*/, CABAReqOps().getCABAAdminData(this.props)];
                    case 2:
                        brrResults = _a.sent();
                        this.setState({ cabaAdminData: brrResults,
                            originalData: brrResults
                        });
                        return [2 /*return*/, brrResults];
                    case 3:
                        error_1 = _a.sent();
                        console.error("Error fetching CABA Admin Data: ", error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getExporttoExcel = function () { return __awaiter(_this, void 0, void 0, function () {
            var items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, CABAReqOps().getCABAAdminData(this.props)];
                    case 1:
                        items = _a.sent();
                        console.log(items);
                        return [2 /*return*/, items];
                }
            });
        }); };
        _this.downloadExcel = function () {
            var cabaAdminData = _this.state.cabaAdminData;
            var worksheet = XLSX.utils.json_to_sheet(cabaAdminData);
            var workbook = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(workbook, worksheet, 'Flate Master');
            XLSX.writeFile(workbook, 'FlatMaser.xlsx');
            console.log('You downloaded the Excel file');
        };
        _this.cabaRankDashboard = function () { return __awaiter(_this, void 0, void 0, function () {
            var spCrudObj_2, brrResults, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj_2 = _a.sent();
                        this.setState(spCrudObj_2);
                        return [4 /*yield*/, CABAReqOps().getRankingMasterData(this.props)];
                    case 2:
                        brrResults = _a.sent();
                        this.setState({ cabaRankDashboard: brrResults });
                        return [2 /*return*/, brrResults];
                    case 3:
                        error_2 = _a.sent();
                        console.error("Error fetching CABA Admin Data: ", error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // cabaDesignation = async() =>{
        //   debugger;
        //   try {
        //     const spCrudObj = await useSPCRUD();
        //     this.setState(spCrudObj);
        //     const brrResults = await CabaMasterOps().getDesignation(this.props);
        //     return brrResults;
        // } catch (error) {
        //     console.error("Error fetching CABA Admin Data: ", error);
        // }
        // }
        _this.handleChange = function (e) {
            _this.setState(__assign({}, _this.state, (_a = {}, _a[e.target.name] = e.target.value, _a)));
            var _a;
        };
        _this.newRequestForm = function () {
            _this.showDialog();
        };
        _this.showDialog = function () {
            _this.setState({ isDialogVisible: true });
        };
        _this.closeDialog = function () {
            _this.setState({ isDialogVisible: false });
            _this.setState({ isDialogRankingVisible: false });
        };
        _this._onChange = function (evItems) {
            debugger;
            var itemid = evItems;
            _this.setState({
                checkboxItemPublish: itemid,
                publisbtnhideshow: true
            });
        };
        _this.newRankForm = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.setState({ isDialogRankingVisible: true });
                return [2 /*return*/];
            });
        }); };
        _this.publishItem = function (itemid) { return __awaiter(_this, void 0, void 0, function () {
            var flatPublishedObj, brrResults, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        console.log(itemid);
                        return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        //var PublishItems:any = this.state.checkboxItemPublish
                        if (itemid.Publish == 'No') {
                            this.state.checkboxItemPublish.Publish = "Yes";
                        }
                        if (itemid.Occupied == 'No') {
                            this.state.checkboxItemPublish.Occupied = "Yes";
                        }
                        flatPublishedObj = {
                            Occupied: this.state.checkboxItemPublish.Occupied,
                            Publish: this.state.checkboxItemPublish.Publish,
                        };
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, spCrudObj.updateData("CABA_FlatMasters", itemid.ID, flatPublishedObj, this.props)];
                    case 3:
                        brrResults = _a.sent();
                        alert("Flat has been Published!");
                        this.setState({ Submitted: true, isDialogVisible: false });
                        this.cabaAdminDashboard();
                        return [2 /*return*/, brrResults];
                    case 4:
                        error_3 = _a.sent();
                        console.error('Error publishing item:', error_3);
                        alert('An error occurred while publishing the item.');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this._onChangeSearch = function (filterValue) { return __awaiter(_this, void 0, void 0, function () {
            var utility, query, filteredData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Utilities()];
                    case 1:
                        utility = _a.sent();
                        this.setState(utility);
                        query = filterValue.toLowerCase();
                        if (!(query !== '')) return [3 /*break*/, 3];
                        return [4 /*yield*/, utility.filterData(this.state.originalData, query, ['ID', 'FlatSpecifications', 'FlatType', 'SocietyName', 'Wing', 'FlatNo', 'OccupancyType'])];
                    case 2:
                        filteredData = _a.sent();
                        console.log(filteredData);
                        this.setState({
                            cabaAdminData: filteredData,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        this.setState({
                            originalData: this.state.originalData,
                        });
                        this.cabaAdminDashboard();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            isDialogVisible: false,
            isDialogRankingVisible: false,
            Submitted: false,
            cabaAdminData: [],
            originalData: [],
            cabaRankDashboard: [],
            flatSpecifications: "",
            flatTypes: "",
            societyName: "",
            occupancyType: "",
            officeLocation: "",
            wing: "",
            flatNo: "",
            EmployeeID: "",
            EmployeeCode: "",
            DateofJoiningAppointment: new Date(),
            Seniority: '',
            Transfer: '',
            YearofServiceinPresentGrade: '',
            Spouse: '',
            Total: '',
            Rank: '',
            Designation: '',
            checkboxItemPublish: _this.PublishGetTemp,
            publisbtnhideshow: false,
            searchQuery: "",
        };
        _this.columns = [
            {
                key: 'CABAFlatID',
                name: 'CABAFlatID',
                fieldName: 'CABAFlatID',
                minWidth: 100,
                maxWidth: 100,
                isResizable: true
            },
            {
                key: 'FlatSpecifications',
                name: 'Flat Specifications',
                fieldName: 'FlatSpecifications',
                minWidth: 150,
                maxWidth: 150,
                isResizable: true
            },
            {
                key: 'FlatType',
                name: 'Flat Type',
                fieldName: 'FlatType',
                minWidth: 100,
                maxWidth: 100,
                isResizable: true
            },
            {
                key: 'SocietyName',
                name: 'Society Name',
                fieldName: 'SocietyName',
                minWidth: 150,
                maxWidth: 150,
                isResizable: true
            },
            {
                key: 'Wing',
                name: 'Wing',
                fieldName: 'Wing',
                minWidth: 70,
                maxWidth: 70,
                isResizable: true
            },
            {
                key: 'FlatNo',
                name: 'Flat No',
                fieldName: 'FlatNo',
                minWidth: 70,
                maxWidth: 70,
                isResizable: true
            },
            {
                key: 'OccupancyType',
                name: 'Occupancy Type',
                fieldName: 'OccupancyType',
                minWidth: 100,
                maxWidth: 150,
                isResizable: true
            },
            {
                key: 'AssignedTo',
                name: 'Assigned To',
                fieldName: 'AssignedTo',
                minWidth: 100,
                maxWidth: 100,
                isResizable: false
            },
            {
                key: 'Occupied',
                name: 'Occupied',
                fieldName: 'Occupied',
                minWidth: 100,
                maxWidth: 100,
                isResizable: false
            },
            {
                key: 'Publish',
                name: 'Publish',
                fieldName: 'Publish',
                minWidth: 100,
                maxWidth: 100,
                isResizable: false,
                onRender: function (item, index, columns) {
                    var ItemId = item['ID'];
                    if (item['Publish'] == 'No') {
                        return React.createElement(Checkbox, { onChange: function () { return _this._onChange(item); } });
                    }
                    else {
                        return (React.createElement("div", null, "Yes"));
                    }
                }
            }
            // ,
            // {
            //     key: 'ID', name: 'Action',fieldName: 'ID', minWidth: 100, isResizable: true,
            //     onRender: (item:any, index:number, columns:IColumn) => {
            //     //   const ItemId = item['ID'];
            //     const Items = item;
            //       return<div> 
            //     <Link><Icon iconName='Edit' /></Link>
            //       </div>;
            //     }
            // }
        ];
        _this.columnsRanking = [
            {
                key: 'EmployeeCode',
                name: 'Employee Code',
                fieldName: 'EmployeeCode',
                minWidth: 100,
                maxWidth: 200,
                isResizable: true
            },
            {
                key: 'Designation',
                name: 'Designation',
                fieldName: 'Designation',
                minWidth: 100,
                maxWidth: 200,
                isResizable: true
            },
            {
                key: 'DateofJoiningAppointment',
                name: 'Date of Joining/Appointment',
                fieldName: 'DateofJoiningAppointment',
                onRender: function (item) {
                    var EndDate = new Date(item.DateofJoiningAppointment);
                    var formattedDate = EndDate.toLocaleDateString('en-GB');
                    return React.createElement("span", null, formattedDate);
                },
                minWidth: 200,
                maxWidth: 200,
                isResizable: true
            },
            {
                key: 'Seniority',
                name: 'Seniority',
                fieldName: 'Seniority',
                minWidth: 100,
                maxWidth: 100,
                isResizable: true
            },
            {
                key: 'Transfer',
                name: 'Transfer',
                fieldName: 'Transfer',
                minWidth: 100,
                maxWidth: 100,
                isResizable: true
            },
            {
                key: 'YearofServiceinPresentGrade',
                name: 'Year of Service in Present Grade',
                fieldName: 'YearofServiceinPresentGrade',
                minWidth: 100,
                maxWidth: 100,
                isResizable: true
            },
            {
                key: 'Spouse',
                name: 'Spouse',
                fieldName: 'Spouse',
                minWidth: 100,
                maxWidth: 100,
                isResizable: true
            },
            {
                key: 'Total',
                name: 'Total',
                fieldName: 'Total',
                minWidth: 100,
                maxWidth: 200,
                isResizable: true
            },
            {
                key: 'Rank',
                name: 'Rank',
                fieldName: 'Rank',
                minWidth: 100,
                maxWidth: 200,
                isResizable: true
            }
            // ,
            // {
            //     key: 'ID', name: 'Action',fieldName: 'ID', minWidth: 100, isResizable: true,
            //     onRender: (item:any, index:number, columns:IColumn) => {
            //     //   const ItemId = item['ID'];
            //     const Items = item;
            //       return<div> 
            //     <Link><Icon iconName='Edit' /></Link>
            //       </div>;
            //     }
            // }
        ];
        return _this;
    } //end constructor    
    CabaAdminModule.prototype.componentDidMount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getEmployeeData();
                        return [4 /*yield*/, this.cabaAdminDashboard()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cabaRankDashboard()];
                    case 2:
                        _a.sent();
                        // this.cabaDesignation();
                        this.getExporttoExcel().then(function (response) {
                            var result = [];
                            response.forEach(function (element) {
                                result.push({
                                    ID: element.ID,
                                    CABAFlatID: element.CABAFlatID,
                                    EmployeeName: element.EmployeeName,
                                    FlatSpecifications: element.FlatSpecifications,
                                    FlatType: element.FlatType,
                                    SocietyName: element.SocietyName,
                                    Wing: element.Wing,
                                    FlatNo: element.FlatNo,
                                    OccupancyType: element.OccupancyType,
                                    ActiveStatus: element.ActiveStatus,
                                    OfficeLocation: element.OfficeLocation,
                                    AssignedTo: element.AssignedTo,
                                    Occupied: element.Occupied,
                                    Publish: element.Publish
                                });
                            });
                            _this.setState({ cabaAdminData: result });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CabaAdminModule.prototype.render = function () {
        var _this = this;
        var cabaAdminData = this.state.cabaAdminData;
        return (React.createElement("div", null,
            React.createElement("h4", null, "CABA Admin Dashboard "),
            React.createElement("div", { className: 'text-right' }, cabaAdminData.length > 0 && (React.createElement("button", { className: styles.exporttoexcel + ' ' + 'btn-outline-info', onClick: this.downloadExcel },
                React.createElement(Icon, { iconName: 'ExcelDocument', style: { marginRight: '5px' } }),
                " Export To Excel"))),
            React.createElement("div", { className: 'mt-2 text-right' },
                this.state.publisbtnhideshow ?
                    (React.createElement(PrimaryButton, { className: styles.btnprimary, onClick: function () { return _this.publishItem(_this.state.checkboxItemPublish); } }, "Publish Flat")) : null,
                React.createElement("span", null,
                    " ",
                    React.createElement(SearchBox, { placeholder: "Search", onChange: this._onChangeSearch, onClear: function (ev) { return _this._onChangeSearch(''); } }))),
            React.createElement(Pivot, { linkSize: PivotLinkSize.large, linkFormat: PivotLinkFormat.tabs },
                React.createElement(PivotItem, { linkText: 'CABA Dashboard' },
                    React.createElement("div", { className: 'panel' },
                        React.createElement(DetailsList, { items: cabaAdminData, columns: this.columns, setKey: "set", layoutMode: DetailsListLayoutMode.fixedColumns, selectionMode: SelectionMode.none }))),
                React.createElement(PivotItem, { linkText: 'Ranking Dashboard' },
                    React.createElement("div", { className: 'panel' },
                        React.createElement(DetailsList, { items: this.state.cabaRankDashboard, columns: this.columnsRanking, setKey: "set", layoutMode: DetailsListLayoutMode.fixedColumns, selectionMode: SelectionMode.none, groupProps: { headerProps: { selectionMode: SelectionMode.none } } }))))));
    };
    return CabaAdminModule;
}(React.Component));
export default CabaAdminModule;

//# sourceMappingURL=CabaAdminModule.js.map
