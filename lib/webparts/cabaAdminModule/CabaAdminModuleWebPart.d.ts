import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart, IPropertyPaneConfiguration } from '@microsoft/sp-webpart-base';
export interface ICabaAdminModuleWebPartProps {
    description: string;
}
export default class CabaAdminModuleWebPart extends BaseClientSideWebPart<ICabaAdminModuleWebPartProps> {
    render(): void;
    protected onDispose(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
