interface Props {
    text?: string;
    image?: string;
    onClick?: () => void;
    fullHeight?: boolean;
}

const WindowButton = ({ text, image, onClick, fullHeight }: Props) => {
    return (
        <div
            className={"group relative w-fit py-1.5 px-1.5 bg-win-light-gray flex flex-col justify-center items-center cursor-pointer " + (fullHeight ? 'h-full' : 'h-5.5')}
            onClick={onClick}>
            <div className="absolute inset-0 group-hover:border-white group-hover:border-t-1 group-hover:border-l-1
              group-active:border-win-dark-gray group-active:border-t-1 group-active:border-l-1"/>

            <div className="absolute inset-0 group-hover:border-win-dark-gray group-hover:border-b-1 group-hover:border-r-1
              group-active:border-white group-active:border-b-1 group-active:border-r-1"/>

            {image && (
                <img src={image} alt="App Icon" className="h-6 mr-2"/>
            )}
            <p className="select-none h-fit">{text}</p>
        </div>
    );
};

export default WindowButton;