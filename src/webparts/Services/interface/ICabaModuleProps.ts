import { HttpClient } from "@microsoft/sp-http";
import { IEximCabaProps } from "./IEximCabaProps";
import { IMasterProps } from "./IMasterProps";

export interface ICabaModuleProps {
  description?: string;
  currentSPContext: any;
  myhttpclient:HttpClient;
  siteURL:string,
}
