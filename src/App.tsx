import TaskBar from "./components/taskbar/TaskBar.tsx";
import Desktop from "./components/Desktop.tsx";

function App() {

    return (
        <div className="bg-win-background-blue w-full h-full flex flex-col justify-between">
            <Desktop />

            <TaskBar />
        </div>
    )
}

export default App
