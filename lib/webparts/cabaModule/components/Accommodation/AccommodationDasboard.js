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
import useSPCRUD from '../../../Services/bal/spcrud';
import { DetailsList, SelectionMode, DetailsListLayoutMode, } from 'office-ui-fabric-react';
import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
import CABAReqOps from '../../../Services/bal/CABAReqOps';
var AccomodationDashboards = (function (_super) {
    __extends(AccomodationDashboards, _super);
    function AccomodationDashboards(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            UserAccomodationData: [],
            isDialogVisible: false,
            RequestforBanksAccommodation: "",
            Transfer: "",
            Married: "",
            SpouseEximite: "",
            emplyeecode: '',
            emplyeeName: '',
            grade: '',
        };
        _this.newRequestForm = function () {
            _this.showDialog();
        };
        _this.showDialog = function () {
            _this.setState({ isDialogVisible: true });
        };
        _this.closeDialog = function () {
            _this.setState({ isDialogVisible: false });
        };
        _this.UserAccomodationDatas = function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var spCrudObj, filters;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        debugger;
                        return [4 /*yield*/, useSPCRUD()];
                    case 1:
                        spCrudObj = _a.sent();
                        this.setState(spCrudObj);
                        filters = "(Occupied eq 'Yes') or (Publish eq 'Yes')";
                        return [4 /*yield*/, CABAReqOps().getUserAccomodationData(filters, { column: 'Id', isAscending: false }, this.props).then(function (brrResults) {
                                var filterdataUserACC = brrResults.filter(function (itemUserAccomodation) {
                                    return itemUserAccomodation.AuthorId === parseInt(_this.props.currentSPContext.pageContext.legacyPageContext.userId);
                                });
                                _this.setState({ UserAccomodationData: filterdataUserACC });
                                return filterdataUserACC;
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        }); };
        _this.state = {
            UserAccomodationData: [],
            isDialogVisible: false,
            RequestforBanksAccommodation: "",
            Transfer: "",
            Married: "",
            SpouseEximite: "",
            emplyeecode: '',
            emplyeeName: '',
            grade: '',
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
            },
        ];
        return _this;
    } //end constructor    
    AccomodationDashboards.prototype.componentDidMount = function () {
        this.UserAccomodationDatas();
    };
    AccomodationDashboards.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h4", null, "Accommodation Dashboard "),
            React.createElement("div", { className: 'text-right', style: { display: 'none' } },
                React.createElement("button", { onClick: function () { return _this.newRequestForm(); }, className: styles.btnprimary, style: { height: '34px', border: 'none' } }, "Accommodation Request")),
            React.createElement(Pivot, { linkSize: PivotLinkSize.large, linkFormat: PivotLinkFormat.tabs },
                React.createElement(PivotItem, { linkText: 'Pending' },
                    React.createElement("div", { className: 'panel' },
                        React.createElement(DetailsList, { items: this.state.UserAccomodationData, columns: this.columns, setKey: "set", layoutMode: DetailsListLayoutMode.fixedColumns, selectionMode: SelectionMode.none }))),
                React.createElement(PivotItem, { linkText: 'Approval in Process' },
                    React.createElement("div", { className: 'panel' })),
                React.createElement(PivotItem, { linkText: 'Approved' },
                    React.createElement("div", { className: 'panel' })))));
    };
    return AccomodationDashboards;
}(React.Component));
export default AccomodationDashboards;

//# sourceMappingURL=AccommodationDasboard.js.map
