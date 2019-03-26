import React from "react";

function nav(props){
    return (
        <nav>
            <p className="navitems">React Clicky-Game!</p>
            <p className="navitems">{props.guess||"Click an image to begin"}</p>
            <p className="navitems">Score: {props.score||0} | Top Score: {props.top||0}</p>
        </nav>

    )
}
export default nav;