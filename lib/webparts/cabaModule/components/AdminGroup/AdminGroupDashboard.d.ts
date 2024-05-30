/// <reference types="react" />
import * as React from 'react';
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
export default class AdminGroupDashboards extends React.Component<ICabaModuleProps> {
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
    getDateCurrent(): Date;
    newRequestForm: () => void;
    showDialog: () => void;
    closeDialog: () => void;
    render(): React.ReactElement<any>;
}
