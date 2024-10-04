import { CDN_DISH_IMG_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removespecific } from "../utils/cartSlice";
const CartItemCard=({data,index})=>{
    const itemremove=useDispatch()
    return(
        <div className="flex justify-center">
            
            <div className="flex w-8/12 justify-center border-2 bg-[#f0f0f0] items-center m-2 p-4">
            <div className="w-3/12">
                <img className="w-40" src={CDN_DISH_IMG_URL+data.imageId}></img>
            </div>
            <div className="w-9/12 text-left">
                <h2 className="text-2xl font-bold">{data?.name}</h2>
                <p className="text-sm">{data?.description}</p>
                <h2 className="text-2xl font-bold">₹{data?.defaultPrice/100 || data?.price/100}<button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-1 ml-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={()=>{
                    itemremove(removespecific(index))
                }}
                >remove</button></h2>    
                
            </div>
           
        </div>

        </div>
        
    )
}
export default CartItemCard;