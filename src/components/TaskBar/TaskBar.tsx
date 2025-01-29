import TaskBarButton from "./TaskBarButton.tsx";
import TaskBarDivider from "./TaskBarDivider.tsx";
import TaskBarApps from "./TaskBarApps.tsx";
import TaskBarClock from "./TaskBarClock.tsx";

const TaskBar = () => {
    return (
        <div className="bg-win-light-gray h-15 w-full border-t-3 border-white flex items-center p-1">
            <TaskBarButton text="Start"/>
            <TaskBarDivider />
            <TaskBarApps />
            <TaskBarDivider />
            <TaskBarClock />
        </div>
    );
};

export default TaskBar;