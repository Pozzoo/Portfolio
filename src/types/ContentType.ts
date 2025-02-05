export type ContentType = {
    id: number;
    title: string;
    icon: string;
    canOpen: boolean;
    type: 'markdown' | 'folder';
    description?: string,
    tags?: number[],
    langs?: number[],
    status?: number;
}