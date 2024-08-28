import '../css/UpperBar.css'
import {useState} from "react";

const UpperBar = () => {
    const [time, setTime] = useState(updateTime);

    setInterval(() => {
        setTime(updateTime);
    },60000 - parseInt(time.slice(6)) * 1000);

    return(
        <div className="upper-bar">
            <div className="upper-left">
                <button>Start</button>
                <button>
                    <div>
                        <img src="src/assets/folderIcon.png" alt=""/>
                        Projects
                    </div>
                </button>
                <button>
                    <div>
                        <img src="src/assets/networkIcon.png" alt=""/>
                        Contact
                    </div>
                </button>
            </div>

            <div className='upper-right'>
                <p>{time.slice(0, 5)}</p>
            </div>
        </div>
    );
}

function updateTime() {
    return (new Date().toLocaleTimeString())
}

export default UpperBar;