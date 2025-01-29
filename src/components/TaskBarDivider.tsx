const TaskBarDivider = () => {
    return (
        <div className="relative h-11 w-1 flex justify-center items-center ml-2 mr-2">
            <div className="absolute inset-0 border-l-1 border-win-dark-gray" />
            <div className="absolute inset-0 border-r-1 border-white" />
        </div>
    );
};

export default TaskBarDivider;