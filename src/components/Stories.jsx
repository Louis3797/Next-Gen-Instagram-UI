import React from 'react';
import "../Css/Stories.css"

import Profile1 from "../assets/profile/Profile1.jpeg";
import Profile2 from "../assets/profile/Profile2.jpeg";
import Profile3 from "../assets/profile/Profile3.jpeg";
import Profile4 from "../assets/profile/Profile4.jpeg";

/*
const story = data.map((data) =>
    <div className="story-outer-ring">
        <div className="story-middle-ring">
            <img src={data.url} className="story-img" />
        </div>
    </div>  
);*/

export const Stories = () => {
    return(
        <div className="story-container">

     
             <div className="story-outer-ring">
                <div className="story-middle-ring">
                    <img src={Profile1} />
                </div>
            </div> 

            <div className="story-outer-ring">
                <div className="story-middle-ring">
                    <img src={Profile2} />
                </div>
            </div> 

            <div className="story-outer-ring">
                <div className="story-middle-ring">
                    <img src={Profile3} />
                </div>
            </div> 

            <div className="story-outer-ring">
                <div className="story-middle-ring">
                    <img src={Profile4} />
                </div>
            </div> 

         
            
        </div>
    )
}
