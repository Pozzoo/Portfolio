import {ReactNode} from "react";

export type ContentType = {
    id?: number;
    parent_id?: number
    title: string;
    icon: string;
    can_open: boolean;
    type: 'markdown' | 'folder' | 'popup';
    options_bar: boolean;
    functions_bar: boolean;
    text?: string;
    tags?: number[];
    langs?: number[];
    status?: number;
    page?: ReactNode;
}