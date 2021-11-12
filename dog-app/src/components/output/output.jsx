import React from "react";


const Output = (props)=>{
    return (
        <div className='picture'>
            <img
                src={props.img1}
            />
            <img
                src={props.img2}
            />
            <img
                src={props.img3}
            />
        </div>

    )
}

export default Output;