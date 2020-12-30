import React from 'react';
import "../Css/Content.css"

import Profile4 from "../assets/profile/Profile4.jpeg";

export const Content = () => {
    return(
        <div className="content-container">
          <div classname="content-div">
            <img src={Profile4} alt="" className="content-img"/>
            <p>Clara</p>
          </div>
        </div>
    )
}