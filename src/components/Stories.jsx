import React from 'react';
import "../Css/Stories.css"
//import { data } from '../data/data'

import Profile1 from "../assets/profile/Profile1.jpeg";
import Profile2 from "../assets/profile/Profile2.jpeg";
import Profile3 from "../assets/profile/Profile3.jpeg";
import Profile4 from "../assets/profile/Profile4.jpeg";


export const Stories = () => {
/*  
const story = data.map((data) =>
    <div className="full-story">
        <div className="story-outer-ring">
            <div className="story-middle-ring">
                <img src={data.url} alt={data.name} className="story-img" />
            </div>
        </div>
        <p className="story-user-name">{data.name}</p>  
    </div>
);
*/
    return(
        <div className="story-container">
           <div className="full-story">
        <div className="story-outer-ring">
            <div className="story-middle-ring">
                <img src={Profile1} alt="" className="story-img" />
            </div>
        </div>
        <p className="story-user-name">Lars</p>  
    </div>

    
    <div className="full-story">
        <div className="story-outer-ring">
            <div className="story-middle-ring">
                <img src={Profile2} alt="" className="story-img" />
            </div>
        </div>
        <p className="story-user-name">Bexter</p>  
    </div>

    <div className="full-story">
        <div className="story-outer-ring">
            <div className="story-middle-ring">
                <img src={Profile3} alt="" className="story-img" />
            </div>
        </div>
        <p className="story-user-name">Julia</p> 
 </div>

                  <div className="full-story">
        <div className="story-outer-ring">
            <div className="story-middle-ring">
                <img src={Profile4} alt="" className="story-img" />
            </div>
        </div>
        <p className="story-user-name">Clara</p>  
    </div> 
   
        </div>
    )
}
