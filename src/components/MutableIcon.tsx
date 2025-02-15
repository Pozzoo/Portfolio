import {ContentType} from "../types/ContentType.ts";
import ClosedFolderIcon from "../assets/closedFolderIcon.png";

interface Props {
    content: ContentType;
}

const MutableIcon = ({ content }: Props) => {


    return (
        <div className={`h-fit w-20 m-3 flex flex-col justify-between items-center text-center cursor-pointer`}>
            <img src={content.icon ? content.icon : ClosedFolderIcon} alt="Folder Icon" className="h-9 select-none"/>

            <p className={`select-none text-black`}>{content.title}</p>
        </div>
    );
};

export default MutableIcon;