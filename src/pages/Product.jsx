import React, { useEffect, useState } from "react";
import User from "../components/User";
import Layout from "../layouts/Layout";
import { Link } from "react-router-dom";

const Product=()=>{
    const [user,setUser]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(response=>{
            return response.json()          
        })
        .then(data=>{
            setUser(data)
        })
    })
    return (
        <div>
            <Layout>
            <div className="">
            {
                user.map((item,index)=>{
                    return(
                        <div key={index}>
                            <User user={item}></User>
                        </div>
                    )
                })
            }
            </div>
            </Layout>
            <Link to={'/'}>Home</Link>

        </div>
    )
}
export default Product