// import {LOGO_URL} from "../utils/constant";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";
// import { useSelector } from 'react-redux';
// // import UserInfo from "../utils/UserInfo";

// const Header=()=>{
//     const [loginBtn,setloginBtn]=useState("Login");

//     const connectionStatus=useOnline();
   
//     // const {logName}=useContext(UserInfo);
//     // selector
//     const cartItems= useSelector ((store)=>store.cart.items);
//     // console.log(cartItems)
//     return(
//         //logo
//         <div className="flex justify-between mx-10 items-center flex-wrap pl-10 pr-10 border-2 border-black/16 shadow-[0_1px_50px_rgba(0,0,0,0.16)]">
//             <div className="logo-container">
//                 <img className="w-28" src={LOGO_URL} alt="logo"></img>
//             </div>

//             <div className="nav-items">
//                 <ul className="flex flex-wrap text-xl font-medium py-2 items-center">
//                     <li className="link-page" >{(connectionStatus === "online")? "ONLINE✅" : "OFFLI NE🔴"}</li>
//                     <li><Link className="mx-7" to="/">Home</Link></li>
//                     <li><Link className="mx-7" to="/About">About Us</Link></li>
//                     <li><Link className="mx-7" to="/Contact">Contact Us</Link></li>
//                     <li><Link className="mx-7" to="/cart">Cart ({cartItems.length}- Items)</Link></li>
//                     <li  className="mx-7 px-2 py-1 font-semibold text-center border-2 border-gray-500 "><button
//                     onClick={()=>{
//                         if(loginBtn === "Login"){
//                             setloginBtn("Logout");
//                         }
//                         else{
//                             setloginBtn("Login");
//                         }
                        
//                     }}
//                     >{loginBtn}</button>
//                     </li>
//                 </ul>
//             </div>
//         </div>
        
//     )
// }
// export default Header;
import { LOGO_URL } from "../utils/constant";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
const Header = () => {
    const [loginBtn, setLoginBtn] = useState("Login");
    const [menuOpen, setMenuOpen] = useState(false);

    const connectionStatus = useOnline();
    const cartItems = useSelector((store) => store.cart.items);
    const nevigate=useNavigate();
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }


    const NeviagteToForm=()=>{
        // const auth = getAuth(app);
        signOut(auth).then(() => {
          // Sign-out successful.
          nevigate("/")
        }).catch((error) => {
          // An error happened.
        });
    }

    return (
        <nav className="p-4 border-2 border-black/16 shadow-[0_1px_50px_rgba(0,0,0,0.16)]">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div>
                    <img className="w-28" src={LOGO_URL} alt="logo" />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="text-black md:hidden"
                    onClick={toggleMenu}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-xl font-semibold">
                    <ul className="flex items-center space-x-6 text-black">
                        <li>{connectionStatus === "online" ? "ONLINE✅" : "OFFLINE🔴"}</li>
                        <li><Link to="/app/home" className="hover:text-gray-500">Home</Link></li>
                        <li><Link to="/app/about" className="hover:text-gray-500">About Us</Link></li>
                        <li><Link to="/app/contact" className="hover:text-gray-500">Contact Us</Link></li>
                        <li>
                            <Link to="/app/cart" className="hover:text-gray-500">
                                Cart ({cartItems.length} Items)
                            </Link>
                        </li>
                        <li>
                            <button
                                className="px-4 py-2 text-xl border-2 rounded-md  font-semibold hover:bg-gray-700 hover:text-white transition-colors duration-200"
                                onClick={() =>{
                                    //  setLoginBtn(loginBtn === "Login" ? setLoginBtn("LogOUt") : setLoginBtn("LogOut"));
                                     NeviagteToForm();
                                    }
                                    }
                            >
                                LogOut
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className={`md:hidden ${menuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'} transition-max-height duration-300 ease-in-out mt-2`}>
                <ul className="text-center text-black space-y-4 p-4 bg-gray-100 rounded shadow-md text-xl font-semibold">
                    <li>{connectionStatus === "online" ? "ONLINE✅" : "OFFLINE🔴"}</li>
                    <li><Link to="/app/home" className="block hover:text-gray-500">Home</Link></li>
                    <li><Link to="/app/about" className="block hover:text-gray-500">About Us</Link></li>
                    <li><Link to="/app/contact" className="block hover:text-gray-500">Contact Us</Link></li>
                    <li>
                        <Link to="/app/cart" className="block hover:text-gray-500">
                            Cart ({cartItems.length} Items)
                        </Link>
                    </li>
                    <li>
                        <button
                            className="py-2 px-3 border-2 border-gray-500 font-semibold hover:bg-gray-700 hover:text-white transition-colors duration-200"
                            onClick={() =>{
                                setLoginBtn(loginBtn === "Login" ? "Logout" : "Login");
                                NeviagteToForm();
                               }
                               }
                        >
                            {loginBtn}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
