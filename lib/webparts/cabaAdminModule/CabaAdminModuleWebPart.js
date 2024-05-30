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
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, PropertyPaneTextField } from '@microsoft/sp-webpart-base';
import * as strings from 'CabaAdminModuleWebPartStrings';
import CabaAdminModule from './components/CabaAdminModule';
var CabaAdminModuleWebPart = (function (_super) {
    __extends(CabaAdminModuleWebPart, _super);
    function CabaAdminModuleWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CabaAdminModuleWebPart.prototype.render = function () {
        var element = React.createElement(CabaAdminModule, {
            description: this.properties.description,
            myhttpclient: this.context.httpClient,
            siteURL: this.context.pageContext.web.absoluteUrl,
            currentSPContext: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    CabaAdminModuleWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(CabaAdminModuleWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CabaAdminModuleWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return CabaAdminModuleWebPart;
}(BaseClientSideWebPart));
export default CabaAdminModuleWebPart;

//# sourceMappingURL=CabaAdminModuleWebPart.js.map
