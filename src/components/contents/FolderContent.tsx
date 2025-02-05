import ClosedFolderIcon from '../../assets/closedFolderIcon.png';
import FolderBar from "../folder/FolderBar.tsx";
import {useEffect, useState} from "react";
import {ContentType} from "../../types/ContentType.ts";
import FolderIcon from "../folder/FolderIcon.tsx";

interface Props {
    title: string
}

const FolderContent = ({ title }: Props) => {
    const [folderItems, setFolderItems] = useState<ContentType[]>([]);

    useEffect(() => {
        //TODO: QUERY TO PROJECTS DATA
        //axios.get(`example.com/api/folder/${title}`)...;

        //TODO: EXAMPLE DATA, REMOVE LATER
        const response: ContentType[] = [
            {
                id: 1,
                title: 'test',
                icon: '',
                canOpen: true,
                type: 'markdown',
                description: '### Hello! \n This is a **test**!',
                tags: [1],
                langs: [1],
                status: 1
            },

        ];

        setFolderItems(response);
    }, []);

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
                        <FolderIcon key={i} item={item}/>
                    )
                })}
            </div>
        </>
    );
};

export default FolderContent;