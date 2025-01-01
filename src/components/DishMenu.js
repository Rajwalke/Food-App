import { useState,useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import DishCard from "./DishCard";
import { Link } from "react-router-dom";
const DishMenu=()=>{
    const {dishId,dishname}=useParams();
    // const dishname=useParams();
    console.log("dishId",dishId)
    console.log("dishname",dishname)
    const [menudishlist,setmenudishlist]=useState(null);
    const [favdish,setfavdish]=useState([]);
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async()=>{
        // const apiData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.113645&lng=72.8697339&collection="+dishId+"&tags=layout_CCS_"+dishname+"&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
        const apiData=await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.113645%26lng%3D72.8697339%26collection%3D"+dishId+"%26tags%3Dlayout_CCS_"+dishname+"%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull");
                                     
        const jsonData=await apiData.json();
        // console.log("Hello",jsonData);
        console.log(jsonData)
        const filteredRestaurants = jsonData?.data?.cards?.filter(item => {
            return item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
        });
        setmenudishlist(jsonData?.data);
        setfavdish(filteredRestaurants);

    }
    
    // if(menudishlist.length>=0){
    //     const onlyrestro=menudishlist.filter((item)=>{
    //         if(item?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"){
    //             return item;
    //         }
            
    //     })
    //     setfavdish(onlyrestro)
    // }
    
    console.log("newarray",favdish);
    if(menudishlist===null){return <ShimmerUI/>}
    // const {title,description}=menudishlist?.cards[0]?.card?.card;
    console.log("setmenulist",menudishlist)
    return(
        
        <div className="m-5 flex flex-col justify-center items-center ">
            <div className="text-center p-2">
                <h1 className="text-4xl font-bold">{menudishlist?.cards[0]?.card?.card?.title}</h1>
                <h2 className="text-1xl font-semiboldt">{menudishlist?.cards[0]?.card?.card?.description}</h2>
                <h2>Menu</h2>
            </div>
            
            <div className="flex flex-wrap items-center w-9/12">
                {
                
                favdish.map((itemcard)=>(
                   <Link key={itemcard?.card?.card?.info?.id} to={"/app/res/"+itemcard?.card?.card?.info?.id}><DishCard  dishdata={itemcard}/></Link> 
                ))
                }
                {/* <DishCard dishdata={favdish}/> */}
            </div>
        </div>
    )
}
export default DishMenu;