import React from 'react';
import "../Css/TopNavbar.css";
import Logo from "../assets/logo/Instagram-Logo.png";
import { IoHeartOutline ,IoPaperPlaneOutline  } from "react-icons/io5";

export const TopNavbar = () => {
    return(
        <div className="topnav">
            <img src={Logo} alt="Instagram-Logo" className="topnav-logo"/>
            <IoHeartOutline className="topnav-icon" />
            <IoPaperPlaneOutline className="topnav-icon"/>
        </div>
    );
} 