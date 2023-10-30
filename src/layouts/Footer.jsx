import React from "react";
import facebook from "../asstes/images/facebook.png"
import twitter from "../asstes/images/twitter.png"
import linkdin from "../asstes/images/linkedin.png"
const Footer=()=>{
    return(
        <div>
            
            {/* flex flex-wrap */}
            <div className="bg-slate-950 text-white grid lg:grid-cols-4 p-2 mr-0 ">
                <div className="ml-48 lg:block  hidden">
                <h1 className="font-bold hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110" >Product</h1>
                    <div className="ml-8 mt-2 font-semibold ">
                    <p className="hover:text-sky-500 ">Teams</p>
                    <p className="hover:text-sky-500 ">Advertising</p>
                    <p className="hover:text-sky-500">Talent</p>
                    <p className="hover:text-sky-500">Electronics</p>
                    </div>
                        
                </div>
                <div className="ml-48 lg:block hidden">
                    <h1 className="font-bold hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Network</h1>
                        <div className="ml-8 mt-2 font-semibold ">
                            <p className="hover:text-sky-500">Audi MMI</p>
                            <p className="hover:text-sky-500">Cockpit</p>
                            <p className="hover:text-sky-500">Blutooth</p>
                            <p className="hover:text-sky-500">Smartphone</p>
                        </div>
                </div>
                <div className="ml-48 lg:block hidden">
                    <h1 className="font-bold hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Company</h1>
                        <div className="ml-8 mt-2 font-semibold">
                        <p className="hover:text-sky-500">Jaguar</p>
                        <p className="hover:text-sky-500">Lexus</p>
                        <p className="hover:text-sky-500">BMW</p>
                        <p className="hover:text-sky-500">Land Rover</p>  
                        </div>                          
                </div>
                <div  className="ml-48">
                    <h1 className="font-bold hover:text-orange-600 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">Follow us</h1>
                    <div className="flex mt-8">
                        <img className="w-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"src={facebook} alt="" />
                        <img className="w-6 ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"src={twitter} alt="" />
                        <img className="w-6 ml-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"src={linkdin} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;


// <!DOCTYPE html>
// <html>

// <head>
//     <meta name="viewport" content="width=device-width, initial-scale=1">
//     <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
// </head>

// <body class="bg-gray-200">

//     <h1 class="text-2xl font-bold text-center mt-8">Zoom on Hover</h1>
//     <p class="text-center">Hover over the div element.</p>

//     <div class="w-48 h-48 bg-green-500 mx-auto transition-transform transform scale-100 hover:scale-150"></div>

// </body>

// </html>

