import {LOGO_URL} from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
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
                
                    <li><Link className="link-page" to="/">Home</Link></li>
                    <li><Link className="link-page" to="/About">About Us</Link></li>
                    <li><Link className="link-page" to="/Contact">Contact Us</Link></li>
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