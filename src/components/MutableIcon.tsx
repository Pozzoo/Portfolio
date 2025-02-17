import {ContentType} from "../types/ContentType.ts";
import ClosedFolderIcon from "../assets/closedFolderIcon.png";
import {useEffect, useState} from "react";
import axios from "../api/axios.ts";

interface Props {
    content: ContentType;
    onClick: () => void;
}

const MutableIcon = ({ content, onClick }: Props) => {
    const [icon, setIcon] = useState(content.icon ? content.icon : ClosedFolderIcon);

    useEffect(() => {
        if (content.id)
            axios.get(`/api/content/${content.id}/icon`).then((r) => setIcon(r.data));
    }, []);

    return (
        <div className={`h-fit w-20 m-3 flex flex-col justify-between items-center text-center cursor-pointer`} onClick={onClick}>
            <img src={icon} alt="Folder Icon" className="h-9 select-none"/>

            <p className={`select-none text-black`}>{content.title}</p>
        </div>
    );
};

export default MutableIcon;