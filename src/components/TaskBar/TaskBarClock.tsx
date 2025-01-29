import {useEffect, useState} from "react";

const TaskBarClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            setCurrentTime(new Date());
        }, 500);
    }, []);

    return (
        <div className="relative h-11 w-fit pt-5 pb-5 pl-4 pr-4 flex justify-center items-center">
            <div className="absolute inset-0 border-t-1 border-l-1 border-win-dark-gray" />
            <div className="absolute inset-0 border-b-1 border-r-1 border-white" />
            <p>{currentTime.getHours() + ":" + currentTime.getMinutes()}</p>
        </div>
    );
};

export default TaskBarClock;