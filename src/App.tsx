import './css/App.css'
import React from "react";

import PopupWindow from "./components/PopupWindow.tsx";
import DesktopIcon from "./components/DesktopIcon.tsx";
import FolderContent from "./components/FolderContent.tsx";

import notepadIcon from './assets/notepadIcon.png'
import folderIcon from './assets/folderIcon.png'
import networkIcon from './assets/networkIcon.png'
import keyPadlock from './assets/keyPadlock.png'
import AboutMe from "./pages/aboutMe.tsx";
import KnownTechnologies from "./pages/knownTechnologies.tsx";
import AddressBar from "./components/AddressBar.tsx";
import Login from "./pages/login.tsx";
import WarningPopup from "./pages/warningPopup.tsx";



function App() {
    const [display, setDisplay] = React.useState("flex");

    function closePopup() {
        setDisplay("none");
    }

  return (
    <>
        <div className="center" style={{display: display}}>
            <PopupWindow closePopup={closePopup} title={'Warning'} okButton={true}>
                <WarningPopup></WarningPopup>
            </PopupWindow>
        </div>

        <div className="desktop-grid">
            <DesktopIcon iconTitle="About Me" imgUrl={notepadIcon}>
                <AboutMe />
            </DesktopIcon>
            <DesktopIcon iconTitle="Known Technologies" imgUrl={notepadIcon}>
                <KnownTechnologies />
            </DesktopIcon>
            <DesktopIcon iconTitle="Projects" imgUrl={folderIcon} windowExtra={AddressBar}>
                <FolderContent title="Projects" />
            </DesktopIcon>
            <DesktopIcon iconTitle="Contact" imgUrl={networkIcon} windowExtra={AddressBar}>
                <FolderContent title="Contact" imgUrl={networkIcon} description="\\poz98x64 -computer" />
            </DesktopIcon>
            <DesktopIcon iconTitle="Login" imgUrl={keyPadlock} isPopup={true}>
                <Login></Login>
            </DesktopIcon>
        </div>
    </>
  )
}

export default App
