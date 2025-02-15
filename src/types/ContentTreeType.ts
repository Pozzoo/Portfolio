export type ContentTreeType = {
    id: number;
    parent_id: number |null;
    title: string;
    icon: string;
    children: ContentTreeType[];
}