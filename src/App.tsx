import './css/App.css'
import knownTechnologies from "./pages/knownTechnologies.tsx";
import aboutMe from "./pages/aboutMe.tsx";
import PopupWindow from "./components/PopupWindow.tsx";
import React from "react";
import notepadIcon from './assets/notepadIcon.png'
import DesktopIcon from "./components/DesktopIcon.tsx";

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

        <div className="desktop-grid">
            <DesktopIcon iconTitle="About Me" imgUrl={notepadIcon} page={aboutMe}></DesktopIcon>
            <DesktopIcon iconTitle="Known Technologies" imgUrl={notepadIcon} page={knownTechnologies}></DesktopIcon>
        </div>
    </>
  )
}

export default App
