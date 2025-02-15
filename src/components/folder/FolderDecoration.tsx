import ClosedFolderIcon from "../../assets/closedFolderIcon.png";
import FolderBar from "./FolderBar.tsx";

interface Props {
    title: string;
}

const FolderDecoration = ({ title }: Props) => {
    return (
        <div className="h-full w-fit bg-linear-128 from-[#7BBDE7] to-white to-30%">
            <div className="w-fit ml-5 mt-1 mb-2.5">
                <img src={ClosedFolderIcon} alt="Folder"/>

                <h2 className="text-3xl mt-1">{title}</h2>
            </div>

            <FolderBar/>

            <div className="w-[45%] ml-5 mt-4 text-wrap">
                <p className="text-xl">Select an item to view its description</p>
            </div>
        </div>
    );
};

export default FolderDecoration;