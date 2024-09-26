import { useEffect,useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";

const RestroMenu=()=>{
    const [menulist,setmenulist]=useState(null);

    const {resId}=useParams();
    console.log(resId);
    const MenuData=async()=>{
        
        const apiData=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.113645&lng=72.8697339&restaurantId=" + resId );
        const jsonData=await apiData.json();
        console.log(jsonData.data);
        setmenulist(jsonData?.data);
        //for testing
        // setmenulist(jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        // console.log(jsonData?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2])
        
    }
    useEffect(()=>{
        MenuData();
    },[]);
    if(menulist==null){
        return <ShimmerUI/>
    }
    // (sometime its 4 or 5 index of card)
    console.log(menulist?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    const {name,cuisines,avgRatingString,costForTwoMessage}=menulist?.cards[2]?.card?.card?.info;
    const {itemCards}=menulist?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return(
        <div>
             <h2>Menu</h2>
            <h1>{name}</h1>
            <h2>{cuisines.join(" , ")} - {costForTwoMessage}</h2>
            <h2>{avgRatingString}</h2>

            <div>
           
            <ul>
                {
                    itemCards.map((item)=>(
                        <li key={item?.card?.info?.id}> {item?.card?.info?.name} - {"₹"} {item?.card?.info?.defaultPrice/100 || item?.card?.info?.price/100}</li>
                    ))
                }

            </ul>
                
               
                
                
            </div>
        </div>
    )
}
export default RestroMenu;