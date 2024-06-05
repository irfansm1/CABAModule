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
import * as React from 'react';
import styles from './CabaAdminModule.module.scss';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { Switch, Route, HashRouter, NavLink } from 'react-router-dom';
SPComponentLoader.loadCss("https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css");
import AccommodationDashboards from '../../cabaModule/components/Accommodation/AccommodationDasboard';
import AdminGroupDashboards from '../../cabaModule/components/AdminGroup/AdminGroupDashboard';
import CabaAdminDashboards from '../../cabaModule/components/CABAAdmin/CABAAdminDasboard';
import AdminMaster from '../../cabaModule/components/AdminMaster/AdminMaster';
import FlatSpecification from '../../cabaModule/components/Master/FlatSpecification';
import FlatTypes from '../../cabaModule/components/Master/FlatTypes';
import SocietyName from '../../cabaModule/components/Master/SocietyName';
import OccupancyType from '../../cabaModule/components/Master/OccupancyType';
var CabaModule = (function (_super) {
    __extends(CabaModule, _super);
    function CabaModule() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CabaModule.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.cabaModule },
            React.createElement("div", null,
                React.createElement(HashRouter, null,
                    React.createElement("div", { className: styles.borderedpanel },
                        React.createElement("div", { className: "navbar navbar-expand-sm bg-blue" },
                            React.createElement("ul", { className: "navbar-nav" },
                                React.createElement("li", { className: "nav-item" },
                                    React.createElement(NavLink, { to: "/AccommodationDashboard", activeClassName: "active-link" }, "User Accommodation")),
                                React.createElement("li", { className: "nav-item" },
                                    React.createElement(NavLink, { to: "/CabaAdminDashboard", activeClassName: "active-link" }, "CABA Admin ")),
                                React.createElement("li", { className: "nav-item" },
                                    React.createElement(NavLink, { to: "/GroupAdminDashboard", activeClassName: "active-link" }, "Admin Group")),
                                React.createElement("li", { className: "nav-item" },
                                    React.createElement(NavLink, { to: "/AdminMaster", activeClassName: "active-link" }, "CABA Master")))),
                        React.createElement("div", { className: 'container mb-4' },
                            React.createElement(Switch, null,
                                React.createElement(Route, { path: "/", exact: true, render: function () { return React.createElement(AccommodationDashboards, __assign({}, _this.props)); } }),
                                React.createElement(Route, { path: "/AccommodationDashboard", exact: true, render: function () { return React.createElement(AccommodationDashboards, __assign({}, _this.props)); } }),
                                React.createElement(Route, { path: "/CabaAdminDashboard", exact: true, render: function () { return React.createElement(CabaAdminDashboards, __assign({}, _this.props)); } }),
                                React.createElement(Route, { path: "/GroupAdminDashboard", exact: true, render: function () { return React.createElement(AdminGroupDashboards, __assign({}, _this.props)); } }),
                                React.createElement(Route, { path: "/AdminMaster", exact: true, render: function () { return React.createElement(AdminMaster, __assign({}, _this.props)); } }),
                                React.createElement(Route, { path: "/FlatSpecificationMaster", exact: true, render: function () { return React.createElement(FlatSpecification, __assign({}, _this.props)); } }),
                                React.createElement(Route, { path: "/FlatTypes", exact: true, render: function () { return React.createElement(FlatTypes, __assign({}, _this.props)); } }),
                                React.createElement(Route, { path: "/SocietyName", exact: true, render: function () { return React.createElement(SocietyName, __assign({}, _this.props)); } }),
                                React.createElement(Route, { path: "/OccupancyType", exact: true, render: function () { return React.createElement(OccupancyType, __assign({}, _this.props)); } }))))))));
    };
    return CabaModule;
}(React.Component));
export default CabaModule;

//# sourceMappingURL=CabaModule.js.map
