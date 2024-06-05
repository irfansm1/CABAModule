/// <reference types="react" />
import * as React from 'react';
import { ICabaModuleProps } from '../../Services/interface/ICabaModuleProps';
import { IEximCabaProps } from '../../Services/interface/IEximCabaProps';
import { IRankingMaster } from '../../Services/interface/IRankigMaster';
import { IEmployee } from '../../Services/interface/IEmployee';
export default class CabaAdminModule extends React.Component<ICabaModuleProps> {
    private FlatSpecifications;
    private FlatTypes;
    private OccupancyType;
    private SocietyName;
    private officeLocation;
    private columns;
    private columnsRanking;
    private transfer;
    private PublishGetTemp;
    state: {
        isDialogVisible: boolean;
        isDialogRankingVisible: boolean;
        Submitted: boolean;
        cabaAdminData: any[];
        originalData: any[];
        cabaRankDashboard: any[];
        flatSpecifications: string;
        flatTypes: string;
        societyName: string;
        occupancyType: string;
        officeLocation: string;
        wing: string;
        flatNo: string;
        EmployeeID: string;
        EmployeeCode: string;
        DateofJoiningAppointment: Date;
        Seniority: string;
        Transfer: string;
        YearofServiceinPresentGrade: string;
        Spouse: string;
        Total: string;
        Rank: string;
        Designation: string;
        checkboxItemPublish: IEximCabaProps;
        publisbtnhideshow: boolean;
        searchQuery: string;
    };
    constructor(props: ICabaModuleProps);
    componentDidMount(): Promise<void>;
    getEmployeeData: () => Promise<IEmployee>;
    cabaAdminDashboard: () => Promise<IEximCabaProps[]>;
    private getExporttoExcel;
    downloadExcel: () => void;
    cabaRankDashboard: () => Promise<IRankingMaster[]>;
    handleChange: (e: any) => void;
    newRequestForm: () => void;
    showDialog: () => void;
    closeDialog: () => void;
    _onChange: (evItems: any) => void;
    newRankForm: () => Promise<void>;
    publishItem: (itemid: any) => Promise<any>;
    _onChangeSearch: (filterValue: string) => Promise<void>;
    render(): React.ReactElement<any>;
}
