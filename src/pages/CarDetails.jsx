import React from "react";
import { useParams } from "react-router-dom";

const CarDetails=()=>{
    const {modelName,price,image}= useParams();
   
    // console.log( modelName);
    return (
        <div>
            <p>The car model is {modelName}</p>
            <p>The price is {price}</p>
            {/* <img src={image} alt={modelName} /> */}
        </div>
    )
}
export default CarDetails;