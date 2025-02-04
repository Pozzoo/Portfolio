import ClosedFolderIcon from '../assets/closedFolderIcon.png';
import {ReactNode} from "react";
import useWindow from "../hooks/useWindow.ts";

interface Props {
    title: string
    img?: string
    content?: ReactNode
    address?: string
    optionsBar?: boolean
    functionsBar?: boolean
}

const DesktopIcon = ({ title, img, content, address, optionsBar, functionsBar }: Props) => {
    const windowManager = useWindow();

    const onDoubleClick = () => {
        if (!content) return;

        windowManager.openWindow(content, (img ? img : ClosedFolderIcon), title, address, optionsBar, functionsBar);
    }

    return (
        <div className="h-fit w-20 m-3 flex flex-col justify-between items-center text-center text-white cursor-pointer" onDoubleClick={onDoubleClick}>
            <img src={img ? img : ClosedFolderIcon} alt="Desktop Icon" className="h-9 select-none" />

            <p className="select-none">{title}</p>
        </div>
    );
};

export default DesktopIcon;