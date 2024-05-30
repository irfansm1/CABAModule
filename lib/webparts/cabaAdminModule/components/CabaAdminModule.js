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
import { DetailsList, SelectionMode, Checkbox, SearchBox, DetailsListLayoutMode, TextField, DefaultButton, PrimaryButton, DatePicker, Dropdown, Dialog, DialogFooter, DialogType, } from 'office-ui-fabric-react';
import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import useSPCRUD from '../../Services/bal/spcrud';
import CabaMasterOps from '../../Services/bal/CabaMastersOps';
import CABAReqOps from '../../Services/bal/CABAReqOps';
import EmployeeOps from '../../Services/bal/EmployeeOps';
import Utilities from '../../Services/bal/utilities';
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
        _this.getFlatSpecifications = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        return [4 /*yield*/, CabaMasterOps().getFlatSpecifications(this.props).then(function (brrResults) {
                                brrResults.map(function (item) {
                                    _this.FlatSpecifications.push({
                                        key: item.key,
                                        text: item.text
                                    });
                                });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.getFlatTypes = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        return [4 /*yield*/, CabaMasterOps().getFlatType(this.props).then(function (brrResults) {
                                brrResults.map(function (item) {
                                    _this.FlatTypes.push({
                                        key: item.key,
                                        text: item.text
                                    });
                                });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.getOccupancyTypes = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        return [4 /*yield*/, CabaMasterOps().getOccupancyType(this.props).then(function (brrResults) {
                                brrResults.map(function (item) {
                                    _this.OccupancyType.push({
                                        key: item.key,
                                        text: item.text
                                    });
                                });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.getgetSocietyName = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        return [4 /*yield*/, CabaMasterOps().getSocietyName(this.props).then(function (brrResults) {
                                brrResults.map(function (item) {
                                    _this.SocietyName.push({
                                        key: item.key,
                                        text: item.text
                                    });
                                });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.getOfficeLocation = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        return [4 /*yield*/, CabaMasterOps().getOfficeLocation(this.props).then(function (brrResults) {
                                brrResults.map(function (item) {
                                    _this.officeLocation.push({
                                        key: item.key,
                                        text: item.text
                                    });
                                });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
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
        _this.onflatSpecificationsChange = function (item) {
            _this.setState({ flatSpecifications: item.key });
        };
        _this.onflatTypesChange = function (item) {
            _this.setState({ flatTypes: item.key });
        };
        _this.onSocietyNameChange = function (item) {
            _this.setState({ societyName: item.key });
        };
        _this.onOccupancyTypeChange = function (item) {
            _this.setState({ occupancyType: item.key });
        };
        _this.onOfficeLocationChange = function (item) {
            _this.setState({ officeLocation: item.key });
        };
        _this.submitCabareq = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var CABAFlatID, cabaObjRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        CABAFlatID = "CABA|" + "Flat|" + this.state.EmployeeID;
                        cabaObjRequest = {
                            CABAFlatID: CABAFlatID,
                            FlatSpecificationsId: this.state.flatSpecifications,
                            FlatTypeId: this.state.flatTypes,
                            SocietyNameId: this.state.societyName,
                            Wing: this.state.wing,
                            FlatNo: this.state.flatNo,
                            OccupancyTypeId: this.state.occupancyType,
                            OfficeLocationId: this.state.officeLocation
                        };
                        return [4 /*yield*/, spCrudObj.insertData("CABA_FlatMasters", cabaObjRequest, this.props).then(function (brrResults) {
                                alert("Data Saved successfully!");
                                _this.setState({ Submitted: true, isDialogVisible: false });
                                _this.cabaAdminDashboard();
                                return brrResults;
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this._formatDate = function (date) {
            return (date.getMonth() + 1) + '/' + date.getDate() + '/' + (date.getFullYear());
        };
        _this.onTransferChange = function (item) {
            _this.setState({ Transfer: item.key });
        };
        _this._onSelectTravelDate = function (date) {
            _this.setState({
                DateofJoiningAppointment: date
            });
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
        _this.submitCabaRankForm = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var CABAFlatID, cabaObjRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        CABAFlatID = "CABA|" + "Flat|" + this.state.EmployeeID;
                        cabaObjRequest = {
                            //CABAFlatID : CABAFlatID,
                            DateofJoiningAppointment: this.state.DateofJoiningAppointment,
                            Seniority: this.state.Seniority,
                            Transfer: this.state.Transfer,
                            YearofServiceinPresentGrade: this.state.YearofServiceinPresentGrade,
                            Spouse: this.state.Spouse,
                            Total: this.state.Total,
                            Rank: this.state.Rank
                        };
                        return [4 /*yield*/, spCrudObj.insertData("Ranking_Master", cabaObjRequest, this.props).then(function (brrResults) {
                                alert("Data Saved successfully!");
                                _this.setState({ Submitted: true, isDialogRankingVisible: false });
                                _this.cabaAdminDashboard();
                                return brrResults;
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
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
                    case 0:
                        debugger;
                        return [4 /*yield*/, Utilities()];
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
                key: 'AssignedBy',
                name: 'AssignedBy',
                fieldName: 'AssignedBy',
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
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.getEmployeeData();
                        this.getFlatSpecifications();
                        this.getFlatTypes();
                        this.getOccupancyTypes();
                        this.getgetSocietyName();
                        this.getOfficeLocation();
                        return [4 /*yield*/, this.cabaAdminDashboard()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.cabaRankDashboard()];
                    case 2:
                        _a.sent();
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
            React.createElement("div", { className: 'text-right' },
                React.createElement("button", { onClick: function () { return _this.newRequestForm(); }, className: styles.btnprimary + ' ' + 'mr-3', style: { height: '34px', border: 'none' } }, "Add New Flat"),
                React.createElement("button", { onClick: function () { return _this.newRankForm(); }, className: styles.btnprimary, style: { height: '34px', border: 'none' } }, "Add Ranking")),
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
                        React.createElement(DetailsList, { items: this.state.cabaRankDashboard, columns: this.columnsRanking, setKey: "set", layoutMode: DetailsListLayoutMode.fixedColumns, selectionMode: SelectionMode.none, groupProps: { headerProps: { selectionMode: SelectionMode.none } } })))),
            React.createElement(Dialog, { hidden: !this.state.isDialogVisible, onDismiss: this.closeDialog, dialogContentProps: {
                    type: DialogType.normal,
                    title: 'CABA Admin Request',
                    closeButtonAriaLabel: 'Close',
                }, modalProps: {
                    containerClassName: 'cabadailog'
                } },
                React.createElement("div", null,
                    React.createElement("div", { className: 'form-group row' },
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Flat Specifications"),
                            React.createElement(Dropdown, { placeHolder: 'Please select Flat Specifications', selectedKey: this.state.flatSpecifications, options: this.FlatSpecifications, onChanged: this.onflatSpecificationsChange })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Type of Flat"),
                            React.createElement(Dropdown, { placeHolder: 'Please select Types Flat', selectedKey: this.state.flatTypes, options: this.FlatTypes, onChanged: this.onflatTypesChange })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Society Name"),
                            React.createElement(Dropdown, { placeHolder: 'Please select Society Name', selectedKey: this.state.societyName, options: this.SocietyName, onChanged: this.onSocietyNameChange })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Wing"),
                            React.createElement(TextField, { onChanged: function () { return _this.handleChange(event); }, name: "wing", value: this.state.wing })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Flat No."),
                            React.createElement(TextField, { onChanged: function () { return _this.handleChange(event); }, name: "flatNo", value: this.state.flatNo })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Occupancy Types"),
                            React.createElement(Dropdown, { placeHolder: 'Please select Occupancy Types', selectedKey: this.state.occupancyType, options: this.OccupancyType, onChanged: this.onOccupancyTypeChange })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Office Location"),
                            React.createElement(Dropdown, { placeHolder: 'Please select', selectedKey: this.state.officeLocation, options: this.officeLocation, onChanged: this.onOfficeLocationChange })))),
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { className: styles.btnprimary, onClick: function () { return _this.submitCabareq(); } }, "Submit"),
                    React.createElement(DefaultButton, { onClick: function () { return _this.closeDialog(); } }, "Cancel"))),
            React.createElement(Dialog, { hidden: !this.state.isDialogRankingVisible, onDismiss: this.closeDialog, dialogContentProps: {
                    type: DialogType.normal,
                    title: 'Ranking Request',
                    closeButtonAriaLabel: 'Close',
                }, modalProps: {
                    containerClassName: 'cabadailog'
                } },
                React.createElement("div", null,
                    React.createElement("div", { className: 'form-group row' },
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Employee Code"),
                            React.createElement("label", { defaultValue: this.state.EmployeeCode })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Designation"),
                            React.createElement("label", null)),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Date of Joining/Appointment"),
                            React.createElement(DatePicker, { formatDate: this._formatDate, onSelectDate: this._onSelectTravelDate, value: this.state.DateofJoiningAppointment })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Seniority"),
                            React.createElement(TextField, { onChanged: function () { return _this.handleChange(event); }, name: "Seniority", id: 'Seniority', value: this.state.Seniority })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Transfer"),
                            React.createElement(Dropdown, { placeHolder: '--Select--', selectedKey: this.state.Transfer, options: this.transfer, onChanged: this.onTransferChange })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Year of Service in present Grade"),
                            React.createElement(TextField, { onChanged: function () { return _this.handleChange(event); }, name: "YearofServiceinPresentGrade", id: 'YearofServiceinPresentGrade', value: this.state.YearofServiceinPresentGrade })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Spouse(Eximite)"),
                            React.createElement(TextField, { onChanged: function () { return _this.handleChange(event); }, name: "Spouse", id: 'Spouse', value: this.state.Spouse })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Total"),
                            React.createElement(TextField, { onChanged: function () { return _this.handleChange(event); }, name: "Total", value: this.state.Total })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Rank"),
                            React.createElement(TextField, { onChanged: function () { return _this.handleChange(event); }, name: "Rank", value: this.state.Rank })))),
                React.createElement(DialogFooter, null,
                    React.createElement(PrimaryButton, { className: styles.btnprimary, onClick: function () { return _this.submitCabaRankForm(); } }, "Submit"),
                    React.createElement(DefaultButton, { onClick: function () { return _this.closeDialog(); } }, "Cancel")))));
    };
    return CabaAdminModule;
}(React.Component));
export default CabaAdminModule;

//# sourceMappingURL=CabaAdminModule.js.map
