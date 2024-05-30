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
import * as React from 'react';
//import { IEximTravelProps } from '../Services/interface/IEximTravelProps';
import styles from '../CabaModule.module.scss';
import { Dialog, DialogFooter, DialogType, } from 'office-ui-fabric-react';
import { Pivot, PivotItem, PivotLinkSize, PivotLinkFormat } from 'office-ui-fabric-react/lib/Pivot';
var AdminGroupDashboards = (function (_super) {
    __extends(AdminGroupDashboards, _super);
    function AdminGroupDashboards(props) {
        var _this = _super.call(this, props) || this;
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
        _this.newRequestForm = function () {
            // alert("alert");
            _this.showDialog();
        };
        _this.showDialog = function () {
            _this.setState({ isDialogVisible: true });
        };
        _this.closeDialog = function () {
            _this.setState({ isDialogVisible: false });
        };
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
        return _this;
    } //end constructor    
    AdminGroupDashboards.prototype.componentDidMount = function () {
    };
    AdminGroupDashboards.prototype.getDateCurrent = function () {
        var date = new Date();
        return date;
    };
    AdminGroupDashboards.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h4", null, "Admin Group Dashboard "),
            React.createElement("div", { className: 'text-right', style: { display: 'none' } },
                React.createElement("button", { onClick: function () { return _this.newRequestForm(); }, className: styles.btnprimary, style: { height: '34px', border: 'none' } }, "CABA Admin Request")),
            React.createElement(Pivot, { linkSize: PivotLinkSize.large, linkFormat: PivotLinkFormat.tabs },
                React.createElement(PivotItem, { linkText: 'Pending' },
                    React.createElement("div", { className: 'panel' })),
                React.createElement(PivotItem, { linkText: 'Approved' },
                    React.createElement("div", { className: 'panel' })),
                React.createElement(PivotItem, { linkText: 'Rejected' },
                    React.createElement("div", { className: 'panel' }))),
            React.createElement(Dialog, { hidden: !this.state.isDialogVisible, onDismiss: this.closeDialog, dialogContentProps: {
                    type: DialogType.normal,
                    title: 'CABA Admin Request',
                    closeButtonAriaLabel: 'Close',
                } },
                React.createElement(DialogFooter, null))));
    };
    return AdminGroupDashboards;
}(React.Component));
export default AdminGroupDashboards;

//# sourceMappingURL=AdminGroupDashboard.js.map
