import React, { lazy, Suspense, useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Error from "./components/Error";
// import About from "./components/About";
import Contact from "./components/Contact";
import RestroMenu from "./components/RestroMenu";
import { Outlet } from "react-router-dom";
import { createBrowserRouter,Navigate,RouterProvider } from "react-router-dom";
import ShimmerUI from "./components/ShimmerUI";
import DishMenu from "./components/DishMenu";
import Test from "./utils/Test";
import { Provider, useDispatch,useSelector } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import process from 'process';
import Login from "./components/Login";
const About=lazy(()=>import("./components/About"));
import { onAuthStateChanged } from "firebase/auth";
import { adduserInfo, removeUserInfo } from "./utils/userSlice";
import {auth} from "./utils/firebase"
const AppLayout=()=>{
    const dispatch = useDispatch()
    useEffect(() => {
        // const auth = getAuth(app);
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const {uid, email, displayName} = user;
                dispatch(adduserInfo({uid, email, displayName}));
            } else {
                dispatch(removeUserInfo()); // Fixed from disp to dispatch
            }
        });
    }, [dispatch]);


    return (
        
            <div className="app">
            
                <Header/>
                <Outlet/>
            </div>

    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/app",
        element: <AppLayout />,
        children: [
            {
                path: "home",
                element: <Body />
            },
            {
                path: "about", // Changed from "/About" to "about"
                element: <Suspense fallback={<ShimmerUI />}><About /></Suspense>
            },
            {
                path: "contact", // Changed from "Contact" to "contact"
                element: <Contact />
            },
            {
                path: "res/:resId",
                element: <RestroMenu />
            },
            {
                path: "dish/:dishId/:dishname",
                element: <DishMenu />
            },
            {
                path: "test",
                element: <Test />
            },
            {
                path: "cart", // Changed from "/cart" to "cart"
                element: <Cart />
            }
        ],
        errorElement: <Error />
    }
]);

const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(
<Provider store={appStore}>
<RouterProvider router={appRouter}/>
</Provider>
);
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