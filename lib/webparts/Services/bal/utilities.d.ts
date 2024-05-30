import { WebPartContext } from "@microsoft/sp-webpart-base";
export interface IMonth {
    Id: number;
    Title: string;
    ShortMonth: string;
    NarrowMonth: string;
}
export interface TypedHash<T> {
    [key: string]: T;
}
export interface IUtilities {
    filterData(jsonData: any, filterValue: string, excludeColumns: Array<string>): Promise<any>;
    MonthColl(): Array<IMonth>;
    hideShow(hideIt: boolean, props: WebPartContext, loadingMessage: string): void;
}
export default function Utilities(): {
    filterData: (jsonData: any, filterValue: string, includeColumns: string[]) => Promise<any>;
    MonthColl: () => IMonth[];
    hideShow: (hideIt: boolean, ctx: WebPartContext, loadingMessage: string) => void;
};
