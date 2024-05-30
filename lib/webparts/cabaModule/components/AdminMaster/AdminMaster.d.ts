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
        redirectFlatURL: boolean;
        redirectFlatTypeURL: boolean;
        redirectSocityURL: boolean;
        redirectOccupancyURL: boolean;
    };
    constructor(props: ICabaModuleProps);
    componentDidMount(): void;
    flatSpecification(): void;
    flatTypes(): void;
    societyName(): void;
    occupancyType(): void;
    render(): React.ReactElement<any>;
}
