/// <reference types="react" />
import * as React from 'react';
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
import { IEximCabaProps } from '../../../Services/interface/IEximCabaProps';
export default class AccomodationDashboards extends React.Component<ICabaModuleProps> {
    private columns;
    state: {
        UserAccomodationData: any[];
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
    newRequestForm: () => void;
    showDialog: () => void;
    closeDialog: () => void;
    UserAccomodationDatas: () => Promise<IEximCabaProps[]>;
    render(): React.ReactElement<any>;
}
