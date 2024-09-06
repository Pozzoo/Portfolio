import './css/App.css'
import React from "react";

import PopupWindow from "./components/PopupWindow.tsx";
import DesktopIcon from "./components/DesktopIcon.tsx";
import FolderContent from "./components/FolderContent.tsx";

import notepadIcon from './assets/notepadIcon.png'
import folderIcon from './assets/folderIcon.png'
import AboutMe from "./pages/aboutMe.tsx";
import KnownTechnologies from "./pages/knownTechnologies.tsx";



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
            <DesktopIcon iconTitle="About Me" imgUrl={notepadIcon}>
                <AboutMe />
            </DesktopIcon>
            <DesktopIcon iconTitle="Known Technologies" imgUrl={notepadIcon}>
                <KnownTechnologies />
            </DesktopIcon>
            <DesktopIcon iconTitle="Projects" imgUrl={folderIcon}>
                <FolderContent />
            </DesktopIcon>
        </div>
    </>
  )
}

export default App
