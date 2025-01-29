interface Props {
    text: string;
    onClick?: () => void;
    img?: string;
}

const TaskBarButton = ({ text, onClick, img }: Props) => {
    return (
        <div className="group relative h-10 w-fit pt-5 pb-5 pl-4 pr-4 bg-win-light-gray flex justify-center items-center cursor-pointer" onClick={onClick}>
            <div className="absolute inset-0 border-t-1 border-l-1 border-white group-active:border-black group-active:border-t-2 group-active:border-l-2 " />
            <div className="absolute inset-0 border-b-1 border-r-1 border-black group-active:border-white group-active:border-b-2 group-active:border-r-2 " />
            {img && (
                <img src={img} alt="App Icon" className="h-6 mr-2" />
            )}
            <p className="select-none">{text}</p>
        </div>
    );
};

export default TaskBarButton;