import React from "react";
import ReactDOM from "react-dom/client";
/*
**Header
-Logo
-Navbar

**Body
-Search bar
-Top Rated Restro
-All Restro
-Pure-veg Restro
-RestroContainer
    -RestroCrad
        -RestroName
        -Rating
        -cuisines
        -Delivery Timming

**Footer
-Copyright
-Social media link
-address
-contact info


*/
const Header=()=>{
    return(
        //logo
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://t3.ftcdn.net/jpg/03/33/90/46/360_F_333904627_tnCepUpc3Uynb6stmEbverr8HeWS2VZl.jpg" alt="logo"></img>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        
    )
}

const RestaurantCard=()=>{
    return (
        <div className="restro-card">
            <img className="dish-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/230485dfde0c4916567efc8cf6ccae5e"></img>
            <h3>New Cafe</h3>
            <h3>Rs.250</h3>
            <h3><span>4.3</span> <span>15-20 mins</span></h3>
            <h3>Chines,Asian,Norath indain</h3>
            <h3>Andheri(East)</h3>
        </div>
    )
}

const Body=()=>{
    return (
        <div className="body">
            <div className="search-bar">
                <p>Search Items</p>
            </div>
            <div className="restro-container">
                <RestaurantCard/>
            </div>

        </div>
    )
}

const AppLayout=()=>{
    return (
        
        <div className="app">
            
            <Header/>
            <Body/>
        </div>
    )
}









const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppLayout/>);
// const heading=React.createElement("h1",{id:"heading"},"Nmaste React");
// const Title=(

//         <h2>Nmaste React</h2>
//     )
// const n=100;

// const Heading=()=>{
//     return( 
//         <div>
//             {Title}
//             <h1>Namste React Functional Component is here{n}</h1>
//             {/* <Title/> */}
            
//             {
//                 console.log("hello")
//             }
//         </div>
        
//     )
// }
// const Heading=()=><h1>Namste React Hello Functional Component</h1>


// const heading=(<h1 className="hello">
//     Namste React By Akshay Saini
//     </h1>)































/* <div id="Parents">
    <div id="child1">
        <h1>I'm h1 tag</h1>
        <h2>I'm H 2 tag<h2>
    </div>
    <div id="child2">
        <h1>I'm h1 tag</h1>
        <h2>I'm H 2 tag<h2>
    </div>

</div> */

// const parent=React.createElement("div",{id:"parents"},
//             [
//             React.createElement("div",{id:"child1"},
//                 [
//                  React.createElement("h1",{},"This is Namaste React 🚀"),
//                  React.createElement("h2",{},"I'm h2 Tag")
//                 ]
//             ),
//             React.createElement("div",{id:"child2"},
//                 [
//                  React.createElement("h1",{},"I'm h1 Tag"),
//                  React.createElement("h2",{},"I'm h2 Tag")
//                 ]
//             )
//             ]

// )

// // const heading=React.createElement(
// //     "h1",
// //     {class:"Hello"},
// //     "Hello World from React"
// // );
// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(parent); 