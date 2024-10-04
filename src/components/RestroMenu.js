import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import useRetaurantMenuData from "../utils/useRetaurantMenuData";
import ItemCard from "./ItemCard";
import { useState } from "react";
const RestroMenu=()=>{
    

    const {resId}=useParams();
    //use CoustomHook for fetch the data from API
    const menulist=useRetaurantMenuData(resId);
    const [showIndex,setshowIndex]=useState(0)
    if(menulist==null){
        return <ShimmerUI/>
    }
    // (sometime its 4 or 5 index of card)
    // console.log(menulist?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    const {name,cuisines,avgRatingString,costForTwoMessage}=menulist?.cards[2]?.card?.card?.info;
    // console.log(menulist);
    // const {itemCards}=menulist?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // it will be change 4 or 5
    const filterMenuList=menulist?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((menucard)=>{
        if(menucard?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"){
            return menucard;
        }
    })
    // console.log("filtermenulist",filterMenuList);
    return(
        
        <div className="">

            <div className="text-center">
                <h2>Menu</h2>
                <h1 className="text-2xl font-bold">{name}</h1>
                <h2>{cuisines.join(" , ")} - {costForTwoMessage}</h2>
                <h2>{avgRatingString}</h2>
            {
                filterMenuList.map((category,index)=>(
                        <ItemCard key={category?.card?.card?.title}
                         check={index===showIndex ?true :false} 
                         setcheck={()=>setshowIndex(index)}
                        //  setcheck={}
                         data={category?.card?.card}/>
                ))
                
            }
           {/* <ItemCard  data={filterMenuList} /> */}
            {/* <ul>
                {
                    itemCards.map((item)=>(
                        <li key={item?.card?.info?.id}> {item?.card?.info?.name} - {"₹"} {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</li>
                    ))
                }

            </ul> */}
            

            </div>
            

            
        </div>
    )
}
export default RestroMenu;