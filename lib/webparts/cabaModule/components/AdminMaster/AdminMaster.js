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
import { Redirect } from "react-router-dom";
//import { IEximTravelProps } from '../Services/interface/IEximTravelProps';
import styles from '../CabaModule.module.scss';
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
            redirectFlatURL: false,
            redirectFlatTypeURL: false,
            redirectSocityURL: false,
            redirectOccupancyURL: false,
        };
        _this.state = {
            // dataitems: this._allItems,
            dataitems: [],
            dataitemsApprovals: [],
            //selectionDetails: this._getSelectionDetails(),
            isDialogVisible: false,
            RequestforBanksAccommodation: "",
            redirectFlatURL: false,
            redirectFlatTypeURL: false,
            redirectSocityURL: false,
            redirectOccupancyURL: false,
        };
        return _this;
    } //end constructor    
    AdminMaster.prototype.componentDidMount = function () {
    };
    AdminMaster.prototype.flatSpecification = function () {
        this.setState({ redirectFlatURL: true });
    };
    AdminMaster.prototype.flatTypes = function () {
        // <Redirect to="/FlatTypes" />
        this.setState({ redirectFlatTypeURL: true });
    };
    AdminMaster.prototype.societyName = function () {
        //<Redirect to="/SocietyName" />    
        this.setState({ redirectSocityURL: true });
    };
    AdminMaster.prototype.occupancyType = function () {
        //<Redirect to="/OccupancyType" /> 
        this.setState({ redirectOccupancyURL: true });
    };
    AdminMaster.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("h4", null, "Admin Master "),
            this.state.redirectFlatURL ? React.createElement(Redirect, { to: '/FlatSpecificationMaster' }) : null,
            this.state.redirectFlatTypeURL ? React.createElement(Redirect, { to: '/FlatTypes' }) : null,
            this.state.redirectSocityURL ? React.createElement(Redirect, { to: '/SocietyName' }) : null,
            this.state.redirectOccupancyURL ? React.createElement(Redirect, { to: '/OccupancyType' }) : null,
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-md-2' },
                    React.createElement("button", { className: styles.btnprimary + ' ' + styles.btntoggle, style: { height: '34px', border: 'none' }, onClick: function () { return _this.flatSpecification(); } }, "Flat Specification ")),
                React.createElement("div", { className: 'col-md-2' },
                    React.createElement("button", { className: styles.btnprimary + ' ' + styles.btntoggle, style: { height: '34px', border: 'none' }, onClick: function () { return _this.flatTypes(); } }, "Flat Type ")),
                React.createElement("div", { className: 'col-md-2' },
                    React.createElement("button", { className: styles.btnprimary + ' ' + styles.btntoggle, style: { height: '34px', border: 'none' }, onClick: function () { return _this.societyName(); } }, "Society Name ")),
                React.createElement("div", { className: 'col-md-2' },
                    React.createElement("button", { className: styles.btnprimary + ' ' + styles.btntoggle, style: { height: '34px', border: 'none' }, onClick: function () { return _this.occupancyType(); } }, "Occupancy Type")))));
    };
    return AdminMaster;
}(React.Component));
export default AdminMaster;

//# sourceMappingURL=AdminMaster.js.map
