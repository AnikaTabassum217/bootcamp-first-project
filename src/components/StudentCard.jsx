import React from "react";

const StudentCard=(props)=>{
    return (
        <>
        <p>My name is {props.xyz}</p>
        <p>And my Roll is {props.roll}</p>
        <p>I live in {props.add}</p>
        </>
    )
}

export default StudentCard;