import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'CabaAdminModuleWebPartStrings';
import CabaAdminModule from './components/CabaAdminModule';
//import { ICabaAdminModuleProps } from './components/ICabaAdminModuleProps';
import { ICabaModuleProps } from '../Services/interface/ICabaModuleProps';
export interface ICabaAdminModuleWebPartProps {
  description: string;
}

export default class CabaAdminModuleWebPart extends BaseClientSideWebPart<ICabaAdminModuleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICabaModuleProps > = React.createElement(
      CabaAdminModule,
      {
        description: this.properties.description,
        myhttpclient:this.context.httpClient,
        siteURL:this.context.pageContext.web.absoluteUrl,
        currentSPContext:this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
  }
}
