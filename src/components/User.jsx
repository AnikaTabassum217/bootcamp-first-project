import React from "react";

const User=({user})=>{
    const{id,name,username,email,address}=user;

    return(
        <div className="">
            <p>The ID is {id}</p>
            <p>Name is {name}</p>
            <p>User Name is {username}</p>
            <p>Email is {email}</p>
            <div>
            <p><h1>Address Street {address.street}</h1></p>
            <p>Suite {address.suite}</p>
            <p>City {address.city}</p>
            <p>Zipcode {address.zipcode}</p>
            <p>{address.geo.lat}</p>
            <p>{address.geo.lng}</p>
            </div>
        </div>
    )
}
export default User