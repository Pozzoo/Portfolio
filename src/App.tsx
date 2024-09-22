import './css/App.css'
import { useEffect, useState } from "react";

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
import useRenderOrder from "./hooks/useRenderOrder.ts";


function App() {
    const [display, setDisplay] = useState("flex");
    const [projects, setProjects] = useState<[]>([]);
    const {renderOrder, changeWindowOrder} = useRenderOrder();

    const getProjects = async () => {
        try {
            const response = await axios.get('/project/all');
            return response?.data.projects;

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProjects().then(res => setProjects(res));
    }, []);

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

        {renderOrder.map((window) => (
            <div key={window.id} onMouseDown={() => changeWindowOrder(window.id)} >
                {window.content}
            </div>
        ))}

        <div className="desktop-grid">
            <DesktopIcon iconTitle="About Me" imgUrl={notepadIcon}>
                <AboutMe />
            </DesktopIcon>

            <DesktopIcon iconTitle="Known Technologies" imgUrl={notepadIcon}>
                <KnownTechnologies />
            </DesktopIcon>

            <DesktopIcon iconTitle="Projects" imgUrl={folderIcon} windowExtra={AddressBar}>
                <FolderContent title="Projects">
                    {projects.map((project: ProjectModel) => (
                        <FolderIcon
                            key={project.id}
                            title={project.title}
                            image={project.image}
                            description={project.description}
                        />
                    ))}
                </FolderContent>
            </DesktopIcon>

            <DesktopIcon iconTitle="Contact" imgUrl={networkIcon}>
                <FolderContent title="Contact" imgUrl={networkIcon} description="\\poz98x64 -computer" >
                    <FolderIcon title="Email me!" image={envelopeOpenIcon} />
                </FolderContent>
            </DesktopIcon>

            <DesktopIcon iconTitle="Login" imgUrl={keyPadlock} isPopup={true}>
                <Login></Login>
            </DesktopIcon>
        </div>
    </>
  )
}

export default App