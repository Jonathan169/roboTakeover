import React from "react";


function game(props){
    var imageArr=props.images
    return (
        <div className="game">
        <h1 className="fontc">Click an image!</h1>
        <div className="images">
        {imageArr.map((url,i)=>{
           return <div className='imageCont' key={i} onClick={()=>props.func(i)}>
            <img src={process.env.PUBLIC_URL+url} className="gimage" data-id={i} alt="url" />
            </div>
        })}

        </div>
        </div>
    )
}
export default game;
