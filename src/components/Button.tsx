
interface Props {
    text: string;
    onClick?: () => void;
    img?: string;
    form?: string;
    type?: 'submit' | 'reset' | 'button';
}

const Button = ({ text, onClick, img, form, type }: Props) => {
    return (
        <button className="group relative h-10 w-fit py-5 px-4 bg-win-light-gray flex justify-center items-center cursor-pointer" onClick={onClick} form={form} type={type}>
            <div className="absolute inset-0 border-t-1 border-l-1 border-white group-active:border-black group-active:border-t-1 group-active:border-l-1 pointer-events-none" />
            <div className="absolute inset-0 border-b-1 border-r-1 border-black group-active:border-white group-active:border-b-1 group-active:border-r-1 pointer-events-none" />
            {img && (
                <img src={img} alt="App Icon" className="h-6 mr-2" />
            )}
            <p className="select-none">{text}</p>
        </button>
    );
};

export default Button;