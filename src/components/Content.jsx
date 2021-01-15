import React from 'react';
import "../Css/Content.css"
import { IoHeartOutline, IoChatbubbleOutline, IoPaperPlaneOutline, IoBookmarkOutline } from "react-icons/io5";



export const Content = ({contentImg, profileImg, profileName}) => {
    return(
        <div className="content-container">
          <div classname="content-div">
            <img src={contentImg} alt="" className="content-img"/>
            <div className="content-topbar">
            <img src={profileImg} alt="" className="content-profile-img" />
            <p className="content-profile-name">{profileName}</p></div>
      
            <div className="content-bottom-menu">
              <div className="content-bottom-menu-icon-div">
                  <IoHeartOutline className="content-icons" />
                  <IoChatbubbleOutline className="content-icons" />
                  <IoPaperPlaneOutline className="content-icons" />
                  <IoBookmarkOutline className="content-icons" />
              </div>
             <p className="content-likes-count">Gefällt 0 Mal</p>
             <p className="content-comment-field">Kommentare anzeigen</p>
             <p className="content-time">Vor 0 Stunden</p>
           </div>    
          </div>
        </div>
    )
}
