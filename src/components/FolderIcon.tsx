import React from "react";
import ExecutableGear from "../assets/executableGear.png"
import "../css/FolderIcon.css"

type FolderIconProps = {
    title: string
    image: string
    description?: string
}

const FolderIcon: React.FC<FolderIconProps> = props => {
    return (
        <div className="folder-icon-container">
            <img src={props.image ? props.image : ExecutableGear} alt=""/>
            <p>{props.title}</p>
        </div>
    );
};

export default FolderIcon;