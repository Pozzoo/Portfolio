import "../css/OptionsBar.css"
import LineStart from '../assets/LineStart.png'
import useRenderOrder from "../hooks/useRenderOrder.ts";
import React from "react";

const OptionsBar = () => {
    const {previousWindowContent, nextWindowContent} = useRenderOrder();

    const handleBack = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        previousWindowContent();
    }

    const handleForward = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        nextWindowContent();
    }

    return (
        <div className="options-bar">
            <img src={LineStart} alt=""/>

            <button onClick={(e) => handleBack(e)}>Back</button>
            <button onClick={(e) => handleForward(e)}>Forward</button>
        </div>
    );
};

export default OptionsBar;