import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'CabaModuleWebPartStrings';
import CabaModule from './components/CabaModule';
//import { ICabaModuleProps } from './components/ICabaModuleProps';
import { ICabaModuleProps } from '../Services/interface/ICabaModuleProps';
export interface ICabaModuleWebPartProps {
  description: string;
}

export default class CabaModuleWebPart extends BaseClientSideWebPart<ICabaModuleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICabaModuleProps > = React.createElement(
      CabaModule,
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
