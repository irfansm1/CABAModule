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
import * as strings from 'CabaModuleWebPartStrings';
import CabaModule from './components/CabaModule';
var CabaModuleWebPart = (function (_super) {
    __extends(CabaModuleWebPart, _super);
    function CabaModuleWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CabaModuleWebPart.prototype.render = function () {
        var element = React.createElement(CabaModule, {
            description: this.properties.description,
            myhttpclient: this.context.httpClient,
            siteURL: this.context.pageContext.web.absoluteUrl,
            currentSPContext: this.context
        });
        ReactDom.render(element, this.domElement);
    };
    CabaModuleWebPart.prototype.onDispose = function () {
        ReactDom.unmountComponentAtNode(this.domElement);
    };
    Object.defineProperty(CabaModuleWebPart.prototype, "dataVersion", {
        get: function () {
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    CabaModuleWebPart.prototype.getPropertyPaneConfiguration = function () {
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
    return CabaModuleWebPart;
}(BaseClientSideWebPart));
export default CabaModuleWebPart;

//# sourceMappingURL=CabaModuleWebPart.js.map
