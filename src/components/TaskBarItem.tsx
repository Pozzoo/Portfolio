import React from "react";
import '../css/TaskBarItem.css'

type TaskBarItemProps = {
    title: string,
    imgUrl?: string
}

const TaskBarItem: React.FC<TaskBarItemProps> = props => {
    return(
        <div className="taskbar-item">
            <button>
                <div>
                    {props.imgUrl ? <img src={props.imgUrl} alt=""/> : null}
                    {props.title}
                </div>
            </button>
        </div>
    )
}

export default TaskBarItem