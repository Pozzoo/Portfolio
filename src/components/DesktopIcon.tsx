import ClosedFolderIcon from '../assets/closedFolderIcon.png';

interface Props {
    title: string
    img?: string
}

const DesktopIcon = ({ title, img }: Props) => {
    return (
        <div className="h-fit w-20 m-3 flex flex-col justify-between items-center text-center text-white">
            <img src={img ? img : ClosedFolderIcon} alt="Desktop Icon" className="h-9 select-none" />

            <p className="select-none">{title}</p>
        </div>
    );
};

export default DesktopIcon;