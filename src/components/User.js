import { useState } from "react";
const User=({name,age,location})=>{
    const [count,setcount]=useState(0);

    return(
        <div className="user_info">
            <button onClick={()=>{
                setcount(count+1);
            }}> + </button>
            <h1>Count is={count}</h1>
            <h1>Functional based Compoent</h1>
            <h1>Name={name}</h1>
            <h2>Age={age}</h2>
            <h2>Location={location}</h2>
        </div>
    )
}
export default User;