import { useRef, useState } from "react";
import validation from "../utils/vaildation";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import  { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [signupclick, setsignupclick] = useState(true);
  const [submitResult, setSubmitResult] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const Mobileno = useRef(null);
  const nevigate=useNavigate();
  const checkvalidation = () => {
    const message = validation(email?.current?.value, password?.current?.value);
    setSubmitResult(message);
    // console.log(submitResult)
    // console.log(submitResult);
    if(message!=null)return;
    if(signupclick){
      // signup click is tru means singup logic here 

      // const auth = getAuth(app);
      createUserWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log("userInfo",user)
          nevigate("/app/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSubmitResult("Already User Exist");
          // ..
        });
    }
    else{
      // signin logic here
      // const auth = getAuth(app);
      signInWithEmailAndPassword(auth, email?.current?.value, password?.current?.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        nevigate("/app/home");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setSubmitResult("Email or Password is Invalide");
      });
    
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-gray-700">
            {signupclick ? "New User Signup" : "Sign In"}
          </h2>
          {signupclick && (
            <>
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ref={username}
              />
              <input
                type="number"
                placeholder="Enter Mobile Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ref={Mobileno}
              />
            </>
          )}

          <input
            type="email"
            placeholder="Enter your Email"
            ref={email}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Enter your Password"
            ref={password}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {submitResult && (
            <p className="text-red-500 text-sm text-center">{submitResult}</p>
          )}

          <button
            type="button"
            onClick={checkvalidation}
            className="w-full py-2 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            {signupclick ? "Signup" : "Sign In"}
          </button>

          <p className="text-center text-sm text-gray-600">
            {signupclick
              ? "Already Registered on EasyEats?"
              : "New to EasyEats?"}{" "}
            <span
              className="text-blue-500 font-medium cursor-pointer hover:underline"
              onClick={() => setsignupclick(!signupclick)}
            >
              {signupclick ? "Sign In now" : "Signup now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;



// // import React from "react";
// import { useRef, useState } from "react";
// import validation from "../utils/vaildation";
// const FormLogin=()=>{
//     const [signupclick,setsignupclick]=useState(false);
//     const [submitResult,setSubmitresult]=useState(null);
//     const email=useRef(null);
//     const password=useRef(null);
//     console.log(signupclick);
 
//     const checkvalidation=()=>{
//         console.log("email",email?.current?.value);
//         console.log("password",password?.current?.value);
//         const message=validation(email?.current?.value,password?.current?.value);
//         setSubmitresult(message);
//     }
//     return(
//         <>
//         <div className="absolute my-44 w-3/12 mx-auto right-0 left-0 bg-black">

//             <form onSubmit={(e)=>{e.preventDefault()}}>

//             <h2 className="text-white text-xl p-2  font-bold">{signupclick ? "New User Singup" : "signIN" }</h2>
//             {signupclick && <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block"  type="text" placeholder="Enter your Name"></input>}
//             {signupclick && <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block"  type="number" placeholder="Enter Mobile Number" ></input>}

            

//             <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block"  type="gmail" placeholder="Enter the email" ref={email} ></input>

//             <input className="m-4   bg-gray-900 text-white rounded-md p-2 w-full block"  type="password" placeholder="Enter the password" ref={password}></input>
            
//             <p className="font-semibold text-xl text-red-500 my-2">{submitResult}</p>
//             <button className="m-4 font-bold text-white rounded-md p-2 w-full  bg-red-800 " 
//              onClick={()=>{
//                 checkvalidation();
//             }}>{signupclick?"Singup":"SignIn"}</button>

//             <p className="text-white my-3" >{signupclick?"Already Register on EasyEats?":"New to EasyEats?"}
//                 <span className="cursor-pointer underline font-semibold"  onClick={()=>{
//                     setsignupclick(!signupclick);
//                 }} >{signupclick?"SignIN now":"Signup now"}</span></p>

//             </form>
            
            
//         </div>
//         </>
//     )
// }
// export default FormLogin;