import TaskBar from "./components/TaskBar.tsx";
import Desktop from "./components/Desktop.tsx";

function App() {


    return (
        <div className="bg-win-background-blue w-full h-full flex flex-col items-center">
            <Desktop />

            <TaskBar />
        </div>
    )
}

export default App
