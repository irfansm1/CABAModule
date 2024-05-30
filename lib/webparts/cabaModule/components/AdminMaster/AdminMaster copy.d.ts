/// <reference types="react" />
import * as React from 'react';
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
export default class AdminMaster extends React.Component<ICabaModuleProps> {
    private FlatSpecifications;
    private FlatTypes;
    private OccupancyType;
    private SocietyName;
    state: {
        dataitems: any[];
        dataitemsApprovals: any[];
        isDialogVisible: boolean;
        RequestforBanksAccommodation: string;
        Transfer: string;
        Married: string;
        SpouseEximite: string;
        emplyeecode: string;
        emplyeeName: string;
        grade: string;
    };
    constructor(props: ICabaModuleProps);
    componentDidMount(): void;
    getFlatSpecifications: () => Promise<any>;
    getFlatTypes: () => Promise<any>;
    getOccupancyTypes: () => Promise<any>;
    getSocietyNames: () => Promise<any>;
    getDateCurrent(): Date;
    newRequestForm: () => void;
    showDialog: () => void;
    closeDialog: () => void;
    handleChange: (e: any) => void;
    render(): React.ReactElement<any>;
}
