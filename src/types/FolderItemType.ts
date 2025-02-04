export type FolderItemType = {
    id: number;
    title: string;
    icon: string;
    canOpen: boolean;
    type: 'project' | 'folder';
    description?: string,
    status?: number,
    shortDescription?: string;

}