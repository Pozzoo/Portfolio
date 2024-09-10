import React from "react";
import '../css/AddressBar.css'
import LineStart from '../assets/LineStart.png'

type AddressBarProps = {
    address: string
}

const AddressBar:React.FC<AddressBarProps> | React.FC = (props: { address: string }) => {
    return(
        <div className='address-bar'>
            <div className='address-text'>
                <img src={LineStart} alt=""/>
                <p>Address</p>
            </div>

            <div className='address'>
                <p>C:\Pozzoo\Dev\{props.address}</p>
            </div>
        </div>
    )
}

export default AddressBar;