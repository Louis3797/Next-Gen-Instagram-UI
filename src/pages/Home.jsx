import React from 'react';
import "../Css/Home.css";
import {Stories} from '../components/Stories'
import {Content} from '../components/Content'

export const Home = () => {
    return(
        <div className="home-container">
            <Stories />
            <Content />
        </div>
    )
}