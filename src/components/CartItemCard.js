import { CDN_DISH_IMG_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemExtra, removespecific, subItemExtra } from "../utils/cartSlice";
const CartItemCard=({data,index})=>{
    const dispatch1=useDispatch();
    const dispatch2=useDispatch();
    const itemremove=useDispatch()
    const [itemCount,setItemCount]=useState(1);
    if(itemCount===0){
        itemremove(removespecific(index))
    }
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
                <div className="flex items-center gap-3 bg-white shadow-md rounded-2xl px-2 py-1 my-2 w-fit">
                    <button
                      className="bg-red-500 text-white text-md font-bold w-6 h-6 rounded-full flex items-center justify-center 
                                 hover:bg-red-600 active:scale-95 transition-all duration-200"
                      onClick={() =>{
                        setItemCount(itemCount - 1);
                        if(itemCount>1){
                            // parseFloat((data?.defaultPrice/100 || data?.price/100).toFixed(2))
                            dispatch1(subItemExtra(data?.defaultPrice/100 || data?.price/100));
                        }
                      }}
                    >
                      −
                    </button>
                    <input className="text-md font-semibold text-gray-800 w-14 text-center" type="number" value={itemCount} 
                    min="0" max="50"
                    onChange={(e)=>{
                        setItemCount(e.target.value);
                        
                    }}
                    />
                    <button
                      className="bg-green-500 text-white text-md font-bold w-6 h-6 rounded-full flex items-center justify-center 
                                 hover:bg-green-600 active:scale-95 transition-all duration-200"
                      onClick={() => {
                        setItemCount(itemCount + 1);
                        dispatch2(addItemExtra(data?.defaultPrice/100 || data?.price/100));
                      }}
                    >
                      +
                    </button>
                </div>

                
            </div>
           
        </div>

        </div>
        
    )
}
export default CartItemCard;