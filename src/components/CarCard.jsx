import React from "react";
import { Link } from "react-router-dom";

const CarCard=(props)=>{

return(
  <div>
     <Link to= {"/car-details/"+props.modelName+"/"+props.price}>
     {/* <Link to= {"/car-details/"+props.modelName+"/"+props.price+"/"+props.image}> */}
     <div className="">

       <div className="bg-red-500 p-2 px-12 w-60 h-72 ml-10 rounded-lg mt-10 transform hover:scale-110">
         <div className="">
           <img className="w-40 h-30 rounded-lg" src={props.image} alt="Car" />
         </div>
   
         <div className="mt-6 ml-8 font-bold">
           {props.modelName}
         </div>
   
         <div className="ml-6 mt-2 font-bold">
           {"Rs"+" "+ props.price}
         </div>
   
         <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded mt-8 ml-0 text-center">
           <button className="p-2">{props.button}</button>
         </div>
       </div>
     
     </div>
      
      </Link>
  </div>
)
}

export default CarCard;