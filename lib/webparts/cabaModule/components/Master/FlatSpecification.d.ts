/// <reference types="react" />
import * as React from 'react';
import { ICabaModuleProps } from '../../../Services/interface/ICabaModuleProps';
import { IMasterProps } from '../../../Services/interface/IMasterProps';
export default class FlatSpecification extends React.Component<ICabaModuleProps> {
    private columns;
    state: {
        isDialogVisible: boolean;
        FlatSpecifications: string;
        Submitted: boolean;
        flatSpecificationData: any[];
        isEditMode: boolean;
        editItemId: any;
    };
    constructor(props: ICabaModuleProps);
    componentDidMount(): void;
    handleChange: (e: any) => void;
    getFlatSpecifications: () => Promise<any>;
    requestType: () => Promise<any>;
    EditForm: (item: IMasterProps) => void;
    newRequestForm: () => void;
    showDialog: () => void;
    closeDialog: () => void;
    deleteRequest: (itemsID: any) => Promise<any>;
    render(): React.ReactElement<any>;
}
