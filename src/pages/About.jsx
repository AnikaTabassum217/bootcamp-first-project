import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../layouts/Navbar";
const About=()=>{

    return(
        <div>
            <Navbar/>
            <h1>This is about us</h1>
            <br/>
            <h2>Another Text</h2>
            <Link to={'/'}>Home</Link>
        </div>
    )
}

export default About;