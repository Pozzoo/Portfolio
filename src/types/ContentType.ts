export type ContentType = {
    id: number;
    parent_id: number | null;
    title: string;
    icon: string;
    can_open: boolean;
    type: 'markdown' | 'folder';
    options_bar: boolean;
    functions_bar: boolean;
    text?: string,
    tags?: number[],
    langs?: number[],
    status?: number;
}