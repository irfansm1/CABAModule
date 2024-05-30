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
//import { IEximTravelProps } from '../Services/interface/IEximTravelProps';
import styles from '../CabaModule.module.scss';
import { Dropdown, Dialog, DialogFooter, DialogType, } from 'office-ui-fabric-react';
import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import useSPCRUD from '../../../Services/bal/spcrud';
import CabaMasterOps from '../../../Services/bal/CabaMastersOps';
var spCrudObj;
var AdminMaster = (function (_super) {
    __extends(AdminMaster, _super);
    function AdminMaster(props) {
        var _this = _super.call(this, props) || this;
        _this.FlatSpecifications = [];
        _this.FlatTypes = [];
        _this.OccupancyType = [];
        _this.SocietyName = [];
        _this.state = {
            dataitems: [],
            dataitemsApprovals: [],
            isDialogVisible: false,
            RequestforBanksAccommodation: "",
            Transfer: "",
            Married: "",
            SpouseEximite: "",
            emplyeecode: '99999',
            emplyeeName: 'Farm Admin',
            grade: 'Junior Management',
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
        _this.getSocietyNames = function () { return __awaiter(_this, void 0, void 0, function () {
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
        _this.newRequestForm = function () {
            _this.showDialog();
        };
        _this.showDialog = function () {
            _this.setState({ isDialogVisible: true });
        };
        _this.closeDialog = function () {
            _this.setState({ isDialogVisible: false });
        };
        _this.handleChange = function (e) {
            _this.setState(__assign({}, _this.state, (_a = {}, _a[e.target.name] = e.target.value, _a)));
            var _a;
        };
        _this.state = {
            // dataitems: this._allItems,
            dataitems: [],
            dataitemsApprovals: [],
            //selectionDetails: this._getSelectionDetails(),
            isDialogVisible: false,
            RequestforBanksAccommodation: "",
            Transfer: "",
            Married: "",
            SpouseEximite: "",
            emplyeecode: '99999',
            emplyeeName: 'Farm Admin',
            grade: 'Junior Management',
        };
        return _this;
    } //end constructor    
    AdminMaster.prototype.componentDidMount = function () {
        this.getFlatSpecifications();
        this.getFlatTypes();
        this.getOccupancyTypes();
        this.getSocietyNames();
    };
    AdminMaster.prototype.getDateCurrent = function () {
        var date = new Date();
        return date;
    };
    AdminMaster.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h4", null, "Admin Master Form "),
            React.createElement("div", { className: 'text-right' },
                React.createElement("button", { onClick: function () { return _this.newRequestForm(); }, className: styles.btnprimary, style: { height: '34px', border: 'none' } }, "Add Request")),
            React.createElement(Pivot, { linkSize: PivotLinkSize.large, linkFormat: PivotLinkFormat.tabs },
                React.createElement(PivotItem, { linkText: 'Details' },
                    React.createElement("div", { className: 'panel' }))),
            React.createElement(Dialog, { hidden: !this.state.isDialogVisible, onDismiss: this.closeDialog, dialogContentProps: {
                    type: DialogType.normal,
                    title: 'Admin Master Request',
                    closeButtonAriaLabel: 'Close',
                } },
                React.createElement("div", null,
                    React.createElement("div", { className: 'form-group row' },
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Flat Specifications"),
                            React.createElement(Dropdown, { placeHolder: 'Please select Flat Specifications', 
                                //selectedKey={this.state.travelData.TravelModeId}
                                options: this.FlatSpecifications })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Type of Flat"),
                            React.createElement(Dropdown, { placeHolder: 'Please select Types Flat', 
                                //selectedKey={this.state.travelData.TravelModeId}
                                options: this.FlatTypes })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Society Name"),
                            React.createElement(Dropdown, { placeHolder: 'Please select Types Flat', 
                                //selectedKey={this.state.travelData.TravelModeId}
                                options: this.SocietyName })),
                        React.createElement("div", { className: 'col-md-4 form-group' },
                            React.createElement("label", null, "Occupancy Types"),
                            React.createElement(Dropdown, { placeHolder: 'Please select Occupancy Types', 
                                //selectedKey={this.state.travelData.TravelModeId}
                                options: this.OccupancyType })))),
                React.createElement(DialogFooter, null))));
    };
    return AdminMaster;
}(React.Component));
export default AdminMaster;

//# sourceMappingURL=AdminMaster copy.js.map
