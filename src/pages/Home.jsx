import React from 'react';
import "../Css/Home.css";
import {Stories} from '../components/Stories'
import {Content} from '../components/Content'
import {data} from '../data/data'

const content = data.map((data) => 
    <Content contentImg={data.img} profileImg={data.img} profileName={data.name} />
)

export const Home = () => {
    return(
        <div className="home-container">
            <Stories />
            <div className="home-content-container">
                {content}  
                <div className="home-seperator"/>
            </div>
        </div>
    )
}