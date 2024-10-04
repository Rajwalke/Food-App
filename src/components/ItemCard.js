import { useState } from "react";
import { CDN_DISH_IMG_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemCard=({data,check,setcheck})=>{
    // console.log("data",data)
    const dispatch=useDispatch();
    // const [conditioncheckar,setconditioncheckar]=useState("false")
    return(
        <div className="flex flex-wrap justify-center">
            <div className="w-8/12 bg-[#f0f0f0]">
            {/* header */}
            <h1 className="flex justify-between m-2 p-2 border-b-8" onClick={()=>{
                setcheck();
                // (conditioncheckar == "false") ? setconditioncheckar("true") : setconditioncheckar("false");
            }}><span className="block text-2xl font-semibold">{data.title} ({data.itemCards.length})</span><span className="block text-2xl ">⬇</span></h1>
             
            
                {data.itemCards.map((menudata)=>{
                    // if(conditionChecker)
                    if(check)

                        return(
                         <div key={menudata?.card?.info?.id} className="flex justify-between border-b-4 items-center m-2">
                        
                            <div className="text-start w-8/12 pl-2">
                            <span className="text-sm border-solid border-2 border-sky-500 text-center p-0.5 bg-white mb-5">{(menudata?.card?.info?.itemAttribute?.vegClassifier=="NONVEG")?"🔴":"🟢"}</span>
                                <p className="text-left font-bold">{menudata?.card?.info?.name}</p>
                                <p><span>₹{menudata?.card?.info?.price/100 || menudata?.card?.info?.defaultPrice/100}</span></p>
                                <p className="text-sm "><span className="font-bold">★{menudata?.card?.info?.ratings?.aggregatedRating?.rating}</span>  <span>({menudata?.card?.info?.ratings?.aggregatedRating?.ratingCountV2})</span></p>
                                <p className="py-2 text-start">{menudata?.card?.info?.description}</p>
                                
                            </div>
                             
                            <div className="w-3/12 p-2 flex flex-col items-center justify-center">
                                <img className="w-36 rounded-md" src={CDN_DISH_IMG_URL+menudata?.card?.info?.imageId} alt={menudata?.card?.info?.name}></img>
                                <button className="font-bold text-base py-1 bg-white text-green-600 px-4 border-[#f0f0f0] border-2 mt-[-15] rounded-md" 
                                onClick={()=>{
                                    dispatch(addItem(menudata.card.info));
                                    // dispatch and action
                                }}
                                >ADD</button>
                            </div>

                        </div>
                        
                )}
            )}

            {/* {body} */}
            </div>
        </div>
    )

    
}
export default ItemCard;



