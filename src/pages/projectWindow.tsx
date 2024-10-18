import {ProjectModel} from "../models/project-model.tsx";
import React from "react";
import AddressBar from "../components/AddressBar.tsx";
import Window from "../components/Window.tsx";
import ExecutableGear from "../assets/executableGear.png"
import "../css/projectWindow.css"
import OptionsBar from "../components/OptionsBar.tsx";

type ProjectWindowProps = {
    project: ProjectModel
}

const ProjectWindow: React.FC<ProjectWindowProps> = props => {

    const title = props.project.title;
    const image = props.project.image !== null ? props.project.image : ExecutableGear;

    return (
        <Window title={title} iconUrl={image} extra={[<OptionsBar/>, <AddressBar address={"Projects\\" + props.project.title}/>]}>
            <div className="project-wrapper">
                <section className="content-left">
                    <img src={image} alt=""/>
                    <h2>{title}</h2>
                    <h4>{props.project.type}</h4>
                </section>
                <section className="content-right">
                    <p>{props.project.description}</p>
                </section>
            </div>
        </Window>
    );
};

export default ProjectWindow;