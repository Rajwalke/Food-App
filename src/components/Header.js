import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
const Header=()=>{
    const [loginBtn,setloginBtn]=useState("Login");
    return(
        //logo
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login-btn"
                    onClick={()=>{
                        if(loginBtn === "Login"){
                            setloginBtn("Logout");
                        }
                        else{
                            setloginBtn("Login");
                        }
                        
                    }}
                    >{loginBtn}</button>
                </ul>
            </div>
        </div>
        
    )
}
export default Header;