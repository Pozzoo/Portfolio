import ClosedFolderIcon from '../../assets/closedFolderIcon.png';
import FolderBar from "../folder/FolderBar.tsx";
import {useEffect, useState} from "react";
import {ContentType} from "../../types/ContentType.ts";
import Icon from "../Icon.tsx";
import axios from "../../api/axios.ts";

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
            <div className="h-full w-fit bg-linear-128 from-[#7BBDE7] to-white to-30%">
                <div className="w-fit ml-5 mt-1 mb-2.5">
                    <img src={ClosedFolderIcon} alt="Folder"/>

                    <h2 className="text-3xl mt-1">{title}</h2>
                </div>

                <FolderBar/>

                <div className="w-[45%] ml-5 mt-4 text-wrap">
                    <p className="text-xl">Select an item to view its description</p>
                </div>
            </div>

            <div className="grid h-fit w-full items-start justify-start grid-cols-5">
                {folderItems.map((item, i) => {
                    return (
                        <Icon key={i} content={item}/>
                    )
                })}
            </div>
        </>
    );
};

export default FolderContent;