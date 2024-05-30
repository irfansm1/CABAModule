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
import { Link, Redirect } from "react-router-dom";
//import { IEximTravelProps } from '../Services/interface/IEximTravelProps';
import styles from '../CabaModule.module.scss';
import { DetailsList, PrimaryButton, Icon, Dialog, DialogFooter, DialogType, } from 'office-ui-fabric-react';
import useSPCRUD from '../../../Services/bal/spcrud';
import MasterAllReqOps from '../../../Services/bal/MasterAllReqOps';
var spCrudObj;
var FlatTypes = (function (_super) {
    __extends(FlatTypes, _super);
    function FlatTypes(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isDialogVisible: false,
            FlatType: '',
            Submitted: false,
            FlatTypeData: [],
            isEditMode: false,
            editItemId: null
        };
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
                        return [4 /*yield*/, MasterAllReqOps().getCABAFlateTypesData(this.props).then(function (brrResults) {
                                _this.setState({ FlatTypeData: brrResults });
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.requestType = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var ObjectRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        ObjectRequest = {
                            FlatType: this.state.FlatType,
                        };
                        if (!this.state.isEditMode) return [3 /*break*/, 3];
                        return [4 /*yield*/, spCrudObj.updateData("CABAFlatTypeMaster", this.state.editItemId, ObjectRequest, this.props).then(function (brrResults) {
                                alert('Data Updated successfully!');
                                _this.setState({ Submitted: true, isDialogVisible: false, isEditMode: false, editItemId: null });
                                _this.getFlatSpecifications();
                                return brrResults;
                            })];
                    case 2: 
                    // Update operation
                    return [2 /*return*/, _a.sent()];
                    case 3: return [4 /*yield*/, spCrudObj.insertData("CABAFlatTypeMaster", ObjectRequest, this.props).then(function (brrResults) {
                            alert('Data Saved successfully!');
                            _this.setState({ Submitted: true, isDialogVisible: false });
                            _this.getFlatSpecifications();
                            return brrResults;
                        })];
                    case 4: 
                    // Add operation
                    return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.EditForm = function (item) {
            debugger;
            var items = item;
            console.log(items);
            _this.setState({
                FlatType: item.FlatType,
                isDialogVisible: true,
                isEditMode: true,
                editItemId: item.ID
            });
        };
        _this.newRequestForm = function () {
            //  this.showDialog();
            _this.setState({ isDialogVisible: true, isEditMode: false, FlatType: '' });
        };
        _this.showDialog = function () {
            _this.setState({ isDialogVisible: true });
        };
        _this.closeDialog = function () {
            _this.setState({ isDialogVisible: false });
        };
        _this.deleteRequest = function (itemsID) { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var confirmDelete;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        confirmDelete = confirm("Are you sure you want to delete this item?");
                        if (!confirmDelete) return [3 /*break*/, 3];
                        return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        return [4 /*yield*/, spCrudObj.deleteData("CABAFlatTypeMaster", itemsID, this.props).then(function (response) {
                                alert('Item deleted successfully!');
                                _this.getFlatSpecifications(); // Refresh the list after deletion
                                return response;
                            }).catch(function (error) {
                                console.error("Error deleting item: ", error);
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/];
                }
            });
        }); };
        _this.state = {
            isDialogVisible: false,
            FlatType: '',
            Submitted: false,
            FlatTypeData: [],
            isEditMode: false,
            editItemId: null
        };
        _this.columns = [
            {
                key: 'FlatType',
                name: 'Flat Types',
                fieldName: 'FlatType',
                minWidth: 100,
                // maxWidth: 200, 
                isResizable: true
            },
            {
                key: 'Edit', name: 'Action', fieldName: 'ID', minWidth: 100, isResizable: true,
                onRender: function (item, index, columns) {
                    //   const ItemId = item['ID'];
                    var Items = item;
                    return React.createElement("div", null,
                        React.createElement(PrimaryButton, { onClick: function () { return _this.EditForm(Items); }, className: styles.btnprimary + " " + styles.btnround + " " + 'mr-2' },
                            React.createElement(Icon, { iconName: 'Edit' })),
                        React.createElement(PrimaryButton, { onClick: function () { return _this.deleteRequest(Items.ID); }, className: styles.btnred + " " + styles.btnround },
                            React.createElement(Icon, { iconName: 'Delete' })));
                }
            },
        ];
        return _this;
    } //end constructor    
    FlatTypes.prototype.componentDidMount = function () {
        this.getFlatSpecifications();
    };
    FlatTypes.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            this.state.Submitted ? React.createElement(Redirect, { to: '/FlatTypes' }) : null,
            React.createElement("h4", null, "Flat Types Master"),
            React.createElement("div", null,
                React.createElement(Link, { to: "/AdminMaster" },
                    React.createElement(Icon, { iconName: 'NavigateBack' }),
                    " Home")),
            React.createElement("div", { className: 'text-right' },
                React.createElement("button", { onClick: function () { return _this.newRequestForm(); }, className: styles.btnprimary, style: { height: '34px', border: 'none', width: '70px' } },
                    React.createElement(Icon, { iconName: 'AddTo' }),
                    " Add")),
            React.createElement(DetailsList, { columns: this.columns, items: this.state.FlatTypeData }),
            React.createElement("div", { className: 'flatspecification' },
                React.createElement(Dialog, { hidden: !this.state.isDialogVisible, onDismiss: this.closeDialog, dialogContentProps: {
                        type: DialogType.normal,
                        title: 'Flat Types',
                        closeButtonAriaLabel: 'Close',
                    }, modalProps: {
                        containerClassName: 'specificationdialogMain'
                    } },
                    React.createElement("div", { className: 'form-group row' },
                        React.createElement("div", { className: 'col-md-8' },
                            React.createElement("label", null, "Types Flat"),
                            React.createElement("input", { type: "text", onChange: this.handleChange, name: "FlatType", id: 'FlatType', value: this.state.FlatType, className: "form-control" }))),
                    React.createElement(DialogFooter, null,
                        React.createElement(PrimaryButton, { onClick: function () { return _this.requestType(); } }, "Submit"))))));
    };
    return FlatTypes;
}(React.Component));
export default FlatTypes;

//# sourceMappingURL=FlatTypes.js.map
