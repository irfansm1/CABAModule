import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'SpfxCabaUserModuleWebPartStrings';
import SpfxCabaUserModule from './components/SpfxCabaUserModule';
import { ISpfxCabaUserModuleProps } from './components/ISpfxCabaUserModuleProps';

export interface ISpfxCabaUserModuleWebPartProps {
  description: string;
}

export default class SpfxCabaUserModuleWebPart extends BaseClientSideWebPart<ISpfxCabaUserModuleWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ISpfxCabaUserModuleProps > = React.createElement(
      SpfxCabaUserModule,
      {
        description: this.properties.description
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
