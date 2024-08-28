import '../css/Window.css'
import React from "react";
import DefaultExtra from './DefaultExtra';

type windowProps = {
    title?: string,
    iconUrl?: string,
    windowContent?: React.FC,
    extra?: React.FC
}

const Window: React.FC<windowProps> = props => {
    const WindowContent = props.windowContent;
    const Extra = props.extra;

    return (
        <div className="windowWrapper">
            <section className="aboveContent">
                <div className="upperBar">
                    <img src={props.iconUrl} alt=""/>
                    <p>{props.title}</p>
                </div>
                <div className="additionalBar">
                    {Extra ? (<Extra></Extra>) : (<DefaultExtra></DefaultExtra>)}
                </div>
            </section>
            <section className="content">
                {WindowContent ? <WindowContent></WindowContent> : null}
            </section>
        </div>
    );
}

export default Window;