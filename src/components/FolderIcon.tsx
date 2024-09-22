import React, {ReactNode} from "react";
import ExecutableGear from "../assets/executableGear.png"
import "../css/FolderIcon.css"
import useRenderOrder from "../hooks/useRenderOrder.ts";

type FolderIconProps = {
    title: string,
    image?: string | null,
    children?: ReactNode
}

const FolderIcon: React.FC<FolderIconProps> = props => {
    const {changeWindowContent} = useRenderOrder();

    const handleClick = () => {
        changeWindowContent(props.children);
    }

    return (
        <div className="folder-icon-container" onClick={handleClick}>
            <img src={props.image ? props.image : ExecutableGear} alt={ExecutableGear}/>
            <p>{props.title}</p>
        </div>
    );
};

export default FolderIcon;