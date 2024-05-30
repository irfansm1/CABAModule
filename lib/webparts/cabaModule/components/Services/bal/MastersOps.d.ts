import { IEximTravelBlockProps } from '../interface/IEximTravelBlockProps';
export interface MasterOps {
    getAgencyNames(props: IEximTravelBlockProps): Promise<any>;
    getCities(props: IEximTravelBlockProps): Promise<any>;
    getBookingType(props: IEximTravelBlockProps): Promise<any>;
    getTravelMode(props: IEximTravelBlockProps): Promise<any>;
    getTravelModeType(props: IEximTravelBlockProps): Promise<any>;
    getScale(props: IEximTravelBlockProps): Promise<any>;
}
export default function MasterOps(): {
    getAgencyNames: (props: any) => Promise<any[]>;
    getCities: (props: any) => Promise<any[]>;
    getBookingType: (props: any) => Promise<any[]>;
    getTravelMode: (props: any) => Promise<any[]>;
    getTravelModeType: (props: any) => Promise<any[]>;
    getScale: (props: any) => Promise<any[]>;
};
