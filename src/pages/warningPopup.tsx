import warningIcon from "../assets/warningIcon.png";

const WarningPopup = () => {
    return (
        <div className="popup-content">
            <img src={warningIcon} alt=""/>
            <p>This website is still under development, some features may not work properly or at all!</p>
        </div>
    );
};

export default WarningPopup;