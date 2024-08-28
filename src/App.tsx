import './css/App.css'
import Window from "./components/Window.tsx";
import knownTechnologies from "./pages/knownTechnologies.tsx";
import aboutMe from "./pages/aboutMe.tsx";
import PopupWindow from "./components/PopupWindow.tsx";
import React from "react";
import notepadIcon from './assets/notepadIcon.png'

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
            <Window title="About Me" iconUrl={notepadIcon} windowContent={aboutMe} ></Window>
        </div>

        <div className="windowLeft">
            <Window title="Known Technologies" iconUrl={notepadIcon} windowContent={knownTechnologies} ></Window>
        </div>
    </>
  )
}

export default App
