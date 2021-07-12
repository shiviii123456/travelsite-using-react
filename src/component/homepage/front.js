import React from "react";
import "./front.css";
import Card from "./card";
const Front = () => {
    return (<>
        <div className="container">
            <div className="top-cont">
                <h4>Find your passion</h4>
                <p>Take only memories, leave only footprints</p>
            </div>
            <div className="bottom-cont">
                <Card />
            </div>
        </div>
    </>)
}

export default Front;