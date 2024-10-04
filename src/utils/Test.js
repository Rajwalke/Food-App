// import React from "react";
import { CDN_DISH_IMG_URL } from "./constant";
import { useState } from "react";


const Test=()=>{

const images = [
  CDN_DISH_IMG_URL+"e0839ff574213e6f35b3899ebf1fc597",
   CDN_DISH_IMG_URL+"hypuvsvf6y0swy9oza8f",
   CDN_DISH_IMG_URL+"gojdiokvalc9u33yw5f8",
   CDN_DISH_IMG_URL+"230485dfde0c4916567efc8cf6ccae5e",
   CDN_DISH_IMG_URL+"xrrngexulv9uzxg7jcnv"
];
const [indexImg,setindexImg]=useState(0);
    return(
        <div className="">
            <div className="flex justify-between">
            <button className="text-5xl m-10 bg-black text-white font-bold p-5 text-start" 
            onClick={()=>{
                if(indexImg>0){
                    setindexImg(indexImg-1);
                }
                else{
                    alert("Please click om Right arrow")
                    // setindexImg(indexImg);
                }
                
            }}
            
            >{"<"}</button>
            <button className="text-5xl m-10 bg-black text-white font-bold p-5 text-end"
            onClick={()=>{
                if(indexImg<images.length-1){
                    setindexImg(indexImg+1);
                }
                else{
                    alert("Please Click on Left arrow");
                    // setindexImg(indexImg);
                }
                
            }} 
            >{">"}</button>
            </div>
            
            <div className="flex items-center justify-center">
            {
                images.map((imagecard,index)=>{ if(indexImg==index  && indexImg>=0 && indexImg<images.length )return(
                    <img className="w-64" key={index} src={imagecard} alt={index}></img>
                )
            })
            }
            </div>
           
            
            
            {console.log("Index is:",indexImg)}

        </div>
    )
}
export default Test;