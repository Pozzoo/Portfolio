import ClosedFolderIcon from "../../assets/closedFolderIcon.png";
import useWindow from "../../hooks/useWindow.ts";
import {ContentType} from "../../types/ContentType.ts";
import MarkdownContent from "../contents/MarkdownContent.tsx";

interface Props {
    item: ContentType
}

const FolderIcon = ({ item }: Props) => {
    const windowManager = useWindow();

    const handleClick = () => {
        if (!item.canOpen) return;

        switch (item.type) {
            case "folder":
                return; //TODO: IMPLEMENT SUB-FOLDER

            case "markdown":
                windowManager.addContentWithoutID(<MarkdownContent markdownText={item.description!} />);
        }
    }

    return (
        <div className="h-fit w-20 m-3 flex flex-col justify-between items-center text-center text-white cursor-pointer" onClick={() => handleClick()}>
            <img src={item.icon ? item.icon : ClosedFolderIcon} alt="Folder Icon" className="h-9 select-none"/>

            <p className="select-none text-black">{item.title}</p>
        </div>
    );
};

export default FolderIcon;