export type FolderItemType = {
    id: number;
    title: string;
    icon: string;
    canOpen: boolean;
    type: 'markdown' | 'folder';
    description?: string,
    status?: number,
    shortDescription?: string;

}