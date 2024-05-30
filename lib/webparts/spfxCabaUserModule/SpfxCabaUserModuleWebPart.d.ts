import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ISpfxCabaUserModuleWebPartProps {
    description: string;
}
export default class SpfxCabaUserModuleWebPart extends BaseClientSideWebPart<ISpfxCabaUserModuleWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
