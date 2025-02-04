import ClosedFolderIcon from "../../assets/closedFolderIcon.png";
import useWindow from "../../hooks/useWindow.ts";

interface Props {
    title: string;
    icon: string;
    canOpen: boolean;
    type: 'project' | 'folder';
}

const FolderIcon = ({ title, icon, canOpen, type }: Props) => {
    const windowManager = useWindow();

    const handleClick = () => {
        if (!canOpen) return;

        switch (type) {
            case "folder":
                return; //TODO: IMPLEMENT SUB-FOLDER

            case "project":
                //windowManager.openWindow()
        }
    }

    return (
        <div className="h-fit w-20 m-3 flex flex-col justify-between items-center text-center text-white cursor-pointer" onClick={() => handleClick()}>
            <img src={icon ? icon : ClosedFolderIcon} alt="Folder Icon" className="h-9 select-none"/>

            <p className="select-none text-black">{title}</p>
        </div>
    );
};

export default FolderIcon;