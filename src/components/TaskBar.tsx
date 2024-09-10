import '../css/TaskBar.css'
import {useState} from "react";
import folderIcon from '../assets/folderIcon.png'
import networkIcon from '../assets/networkIcon.png'
import divider from '../assets/divider.png'
import TaskBarItem from "./TaskBarItem.tsx";

const TaskBar = () => {
    const [time, setTime] = useState(updateTime);

    setInterval(() => {
        setTime(updateTime);
    },60000 - parseInt(time.slice(6)) * 1000);

    return(
        <div className="upper-bar">
            <div className="upper-left">
                <TaskBarItem title="Start" />

                <img className="divider" src={divider} alt=""/>

                <TaskBarItem title="Projects" imgUrl={folderIcon} />
                <TaskBarItem title="Contact" imgUrl={networkIcon} />
            </div>

            <div className='upper-right'>
                <img className="divider" src={divider} alt=""/>
                <p>{time.slice(0, 5)}</p>
            </div>
        </div>
    );
}

function updateTime() {
    return (new Date().toLocaleTimeString())
}

export default TaskBar;