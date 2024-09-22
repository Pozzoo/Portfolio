import React from "react";
import ExecutableGear from "../assets/executableGear.png"
import "../css/FolderIcon.css"
import useRenderOrder from "../hooks/useRenderOrder.ts";
import Window from "./Window.tsx";

type FolderIconProps = {
    title: string,
    image?: string | null,
    description?: string | null;
}

const FolderIcon: React.FC<FolderIconProps> = props => {
    const {changeWindowContent} = useRenderOrder();

    //TODO: ACTUALLY IMPLEMENT FOLDER ICON PAGE
    const content = <Window title={"asda"}>
        <p>oi</p>
    </Window>

    const handleClick = () => {
        changeWindowContent(content)
    }

    return (
        <div className="folder-icon-container" onClick={handleClick}>
            <img src={props.image ? props.image : ExecutableGear} alt={ExecutableGear}/>
            <p>{props.title}</p>
        </div>
    );
};

export default FolderIcon;