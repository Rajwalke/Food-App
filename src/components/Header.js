import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from 'react-redux';
// import UserInfo from "../utils/UserInfo";

const Header=()=>{
    const [loginBtn,setloginBtn]=useState("Login");

    const connectionStatus=useOnline();
   
    // const {logName}=useContext(UserInfo);
    // selector
    const cartItems= useSelector ((store)=>store.cart.items);
    // console.log(cartItems)
    return(
        //logo
        <div className="flex justify-between mx-10 items-center flex-wrap pl-10 pr-10 border-2 border-black/16 shadow-[0_1px_50px_rgba(0,0,0,0.16)]">
            <div className="logo-container">
                <img className="w-28" src={LOGO_URL} alt="logo"></img>
            </div>

            <div className="nav-items">
                <ul className="flex flex-wrap text-xl font-medium py-2 items-center">
                    <li className="link-page" >{(connectionStatus === "online")? "ONLINE✅" : "OFFLI NE🔴"}</li>
                    <li><Link className="mx-7" to="/">Home</Link></li>
                    <li><Link className="mx-7" to="/About">About Us</Link></li>
                    <li><Link className="mx-7" to="/Contact">Contact Us</Link></li>
                    <li><Link className="mx-7" to="/cart">Cart ({cartItems.length}- Items)</Link></li>
                    <li  className="mx-7 px-2 py-1 font-semibold text-center border-2 border-gray-500 "><button
                    onClick={()=>{
                        if(loginBtn === "Login"){
                            setloginBtn("Logout");
                        }
                        else{
                            setloginBtn("Login");
                        }
                        
                    }}
                    >{loginBtn}</button>
                    </li>
                </ul>
            </div>
        </div>
        
    )
}
export default Header;