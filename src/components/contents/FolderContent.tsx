import {useEffect, useState} from "react";
import {ContentType} from "../../types/ContentType.ts";
import axios from "../../api/axios.ts";
import FolderDecoration from "../folder/FolderDecoration.tsx";
import Icon from "../Icon.tsx";

interface Props {
    title: string
    id: number
}

const FolderContent = ({ title, id }: Props) => {
    const [folderItems, setFolderItems] = useState<ContentType[]>([]);

    useEffect(() => {
        axios.get(`/api/content/folder/${id}`).then((response) => setFolderItems(response.data));
    }, [id]);

    return (
        <>
            <FolderDecoration title={title} />

            <div className="grid h-fit w-full items-start justify-start grid-cols-5">
                {folderItems.map((item, i) => {
                    return (
                        <Icon key={i} content={item} />
                    )
                })}
            </div>
        </>
    );
};

export default FolderContent;