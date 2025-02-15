import {useEffect, useState} from "react";
import {ContentType} from "../../types/ContentType.ts";
import axios from "../../api/axios.ts";
import FolderDecoration from "../folder/FolderDecoration.tsx";
import MutableIcon from "../MutableIcon.tsx";
import Icon from "../Icon.tsx";

interface Props {
    title: string
    id: number
    disableDecoration?: boolean
    mutableIcon?: boolean
}

const FolderContent = ({ title, id, disableDecoration, mutableIcon }: Props) => {
    const [folderItems, setFolderItems] = useState<ContentType[]>([]);

    useEffect(() => {
        axios.get(`/api/content/folder/${id}`).then((response) => setFolderItems(response.data));
    }, [id]);

    return (
        <>
            {!disableDecoration && (
                <FolderDecoration title={title} />
            )}

            <div className="grid h-fit w-full items-start justify-start grid-cols-5">
                {folderItems.map((item, i) => {
                    return (
                        mutableIcon ? <MutableIcon key={i} content={item} /> : <Icon key={i} content={item} />
                    )
                })}
            </div>
        </>
    );
};

export default FolderContent;