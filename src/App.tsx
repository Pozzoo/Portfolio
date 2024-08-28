import './css/App.css'
import Window from "./components/Window.tsx";
import knownTechnologies from "./pages/knownTechnologies.tsx";
import aboutMe from "./pages/aboutMe.tsx";
import PopupWindow from "./components/PopupWindow.tsx";
import React from "react";

function App() {
    const [display, setDisplay] = React.useState("flex");

    function closePopup() {
        setDisplay("none");
    }

  return (
    <>
        <div className="center" style={{display: display}}>
            <PopupWindow closePopup={closePopup}></PopupWindow>
        </div>

        <div className="windowRight">
            <Window title="About Me" iconUrl="src/assets/notepadIcon.png" windowContent={aboutMe} ></Window>
        </div>

        <div className="windowLeft">
            <Window title="Known Technologies" iconUrl="src/assets/notepadIcon.png" windowContent={knownTechnologies} ></Window>
        </div>
    </>
  )
}

export default App
