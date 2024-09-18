import './css/App.css'
import React, {ReactNode, useEffect} from "react";

import axios from "./api/axios.ts"

import PopupWindow from "./components/PopupWindow.tsx";
import DesktopIcon from "./components/DesktopIcon.tsx";
import FolderContent from "./components/FolderContent.tsx";

import notepadIcon from './assets/notepadIcon.png'
import folderIcon from './assets/folderIcon.png'
import networkIcon from './assets/networkIcon.png'
import keyPadlock from './assets/keyPadlock.png'
import envelopeOpenIcon from './assets/envelopeOpenIcon.png'

import AboutMe from "./pages/aboutMe.tsx";
import KnownTechnologies from "./pages/knownTechnologies.tsx";
import AddressBar from "./components/AddressBar.tsx";
import Login from "./pages/login.tsx";
import WarningPopup from "./pages/warningPopup.tsx";
import FolderIcon from "./components/FolderIcon.tsx";
import {ProjectModel} from "./models/project-model.tsx";



function App() {
    let windowIndex = 0;

    type windowData = {
        id: number,
        content: ReactNode;
    }

    const [display, setDisplay] = React.useState("flex");
    const [projects, setProjects] = React.useState([]);
    const [renderOrder, setRenderOrder] = React.useState<windowData[]>([]);

    function closePopup() {
        setDisplay("none");
    }

    const addWindow = (window: ReactNode) => {
        const id = windowIndex;
        windowIndex++;

        setRenderOrder(prev => [...prev, {id, content: window}]);

        return id;
    }

    const removeWindow = (id: number) => {
        setRenderOrder(prev => prev.filter(window => window.id !== id));
    }

    const changeWindowOrder = (id: number) => {
        setRenderOrder(prevRenderOrder => {
            const currentIndex = prevRenderOrder.findIndex(window => window.id === id);

            const updatedRenderOrder = [...prevRenderOrder];
            const [removedWindow] = updatedRenderOrder.splice(currentIndex, 1);

            updatedRenderOrder.splice(renderOrder.length - 1, 0, removedWindow);

            return updatedRenderOrder;
        });
    }

    const getProjects = async () => {
        try {
            const response = await axios.get('/project/all');

            return response?.data.projects;

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProjects().then(r => setProjects(r));
    }, []);

  return (
    <>
        <div className="center" style={{display: display}}>
            <PopupWindow closePopup={closePopup} title={'Warning'} okButton={true}>
                <WarningPopup></WarningPopup>
            </PopupWindow>
        </div>

        {renderOrder.map((window) => (
            <div key={window.id} onMouseDown={() => changeWindowOrder(window.id)} >
                {window.content}
            </div>
        ))}

        <div className="desktop-grid">
            <DesktopIcon iconTitle="About Me" imgUrl={notepadIcon} addWindow={addWindow} removeWindow={removeWindow}>
                <AboutMe />
            </DesktopIcon>

            <DesktopIcon iconTitle="Known Technologies" imgUrl={notepadIcon} addWindow={addWindow} removeWindow={removeWindow} >
                <KnownTechnologies />
            </DesktopIcon>

            <DesktopIcon iconTitle="Projects" imgUrl={folderIcon} windowExtra={AddressBar} addWindow={addWindow} removeWindow={removeWindow}>
                <FolderContent title="Projects">
                    {projects?.map((project: ProjectModel, index: number) => (
                        <FolderIcon key={index} title={project.title} image={project.image} description={project.description} />
                    ))}
                </FolderContent>
            </DesktopIcon>

            <DesktopIcon iconTitle="Contact" imgUrl={networkIcon} windowExtra={AddressBar} addWindow={addWindow} removeWindow={removeWindow}>
                <FolderContent title="Contact" imgUrl={networkIcon} description="\\poz98x64 -computer" >
                    <FolderIcon title="Email me!" image={envelopeOpenIcon} />
                </FolderContent>
            </DesktopIcon>

            <DesktopIcon iconTitle="Login" imgUrl={keyPadlock} isPopup={true} addWindow={addWindow} removeWindow={removeWindow}>
                <Login></Login>
            </DesktopIcon>
        </div>
    </>
  )
}

export default App
