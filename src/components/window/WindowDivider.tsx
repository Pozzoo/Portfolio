const WindowDivider = () => {
    return (
        <div className="relative h-5.5 w-1 mx-3 bg-win-light-gray">
            <div className="absolute inset-0 border-t-1 border-l-1 border-white pointer-events-none"/>
            <div className="absolute inset-0 border-b-1 border-r-1 border-win-dark-gray pointer-events-none"/>
        </div>
    );
};

export default WindowDivider;