import React, {ReactNode} from "react";

import closedFolderIcon from '../assets/closedFolderIcon.png'
import rygbBar from '../assets/RYGB Bar.png'
import '../css/FolderContent.css'

type folderProps = {
    title: string,
    description?: string,
    imgUrl?: string,
    children: ReactNode
}

const FolderContent: React.FC<folderProps> = props => {
    return (
        <div className="folder-wrapper">
            <div className="folder-decoration">
                <img className="icon" src={props.imgUrl ? props.imgUrl : closedFolderIcon} alt=""/>
                <h1>{props.title}</h1>

                <img className='bar' src={rygbBar} alt=""/>

                <p>{props.description ? props.description : "Select an item to view its description"}</p>
            </div>
            <div className="folder-content">
                {props.children}
            </div>
        </div>
    );
}

export default FolderContent;