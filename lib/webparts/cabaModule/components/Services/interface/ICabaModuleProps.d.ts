import { HttpClient } from "@microsoft/sp-http";
export interface ICabaModuleProps {
    description?: string;
    currentSPContext: any;
    myhttpclient: HttpClient;
    siteURL: string;
}
