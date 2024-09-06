import React from "react";

import closedFolderIcon from '../assets/closedFolderIcon.png'
import rygbBar from '../assets/RYGB Bar.png'
import '../css/FolderContent.css'

type folderProps = {
    title: string,
}

const FolderContent: React.FC<folderProps> = props => {
    return(
        <div className="folder-wrapper">
            <div className="folder-decoration">
                <img className="icon" src={closedFolderIcon} alt=""/>
                <h1>{props.title}</h1>

                <img className='bar' src={rygbBar} alt=""/>

                <p>Select an item to view its description</p>
            </div>
            <div className="folder-content">

            </div>
        </div>
    );
}

export default FolderContent;