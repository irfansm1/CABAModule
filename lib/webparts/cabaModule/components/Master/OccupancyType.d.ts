/// <reference types="react" />
import * as React from 'react';
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
import { IMasterProps } from '../../../Services/interface/IMasterProps';
export default class OccupancyType extends React.Component<ICabaModuleProps> {
    private columns;
    state: {
        isDialogVisible: boolean;
        OccupancyType: string;
        Submitted: boolean;
        OccupancyTypeDashboard: any[];
        isEditMode: boolean;
        editItemId: any;
    };
    constructor(props: ICabaModuleProps);
    componentDidMount(): void;
    handleChange: (e: any) => void;
    getOccupancyTypeDashboard: () => Promise<any>;
    requestType: () => Promise<any>;
    EditForm: (item: IMasterProps) => void;
    newRequestForm: () => void;
    showDialog: () => void;
    closeDialog: () => void;
    deleteRequest: (itemsID: any) => Promise<any>;
    render(): React.ReactElement<any>;
}
