import closedFolderIcon from '../assets/closedFolderIcon.png'

const FolderContent = () => {
    return(
        <div className="folder-wrapper">
            <div className="folder-decoration">
                <img src={closedFolderIcon} alt=""/>
            </div>
        </div>
    );
}

export default FolderContent;