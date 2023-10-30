import React from "react";
import Layout from "../layouts/Layout";
import CarCard from "../components/CarCard";
import Car1 from "../asstes/images/car1.webp";
import background from '../asstes/images/background-car.jpg'
const Home=()=>{
    let card=[       
        {    
            modelName:"Audi A3",
            price: "1.0 Core",
            image:Car1,
            button:"Buy Now"
        },
        {
            modelName:"Audi TT",
            price: "2.5 Core",
            image:Car1,
            button:"Buy Now"
        },
        {
            modelName:"Audi R8",
            price: "2.5 Core",
            image:Car1,
            button:"Buy Now"
        },   
        
        {
            modelName:"Audi SUV",
            price: "3.5 Core",
            image:Car1,
            button:"Buy Now"
        }, 
    ]
    return(
        <div>
           <Layout>
            <div className="relative bg-cover bg-center h-screen mx-auto " style={{
              backgroundImage: `url(${background})`,}}>
            <div className="grid lg:grid-cols-4  md:grid-cols-4 sm:grid-cols-2">
            {card.map((item) => {
                    return (
                        <CarCard  modelName={item.modelName} price={item.price} image={item.image} button={item.button}/>
                    )
                })}
            </div>
            </div>
            </Layout>
            {/* <Link to ="/about-us">
                About us
            </Link> */}
        </div>
    )
}
export default Home;