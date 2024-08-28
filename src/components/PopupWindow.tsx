import '../css/PopupWindow.css'
import React from "react";

type popupProps = {
    closePopup: () => void,
}

const PopupWindow: React.FC<popupProps> = props => {

    return (
        <div className="popup">
            <section className="popup-header">
                <p>Warning</p>
                <button onClick={props.closePopup}><img src="src/assets/exitButton.png" alt="X"/></button>
            </section>
            <section className="popup-body">
                <div className="popup-content">
                    <img src="src/assets/warningIcon.png" alt=""/>
                    <p>This website is still under development, some features may not work properly or at all!</p>
                </div>

                <button onClick={props.closePopup}>OK</button>
            </section>
        </div>
    );
}

export default PopupWindow;