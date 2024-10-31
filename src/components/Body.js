import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { DISH_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Body=()=>{
    
    const [restroList,setrestroList]=useState([]);
    const [resobj,setresobj]=useState([]);
    const [searchtext,setsearchtext]=useState("");
    const [dishList,setdishList]=useState([]);
    // console.log("body render",restroList);
    const fetchData= async ()=>{
        const apiData=await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D19.113645%26lng%3D72.8697339%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING");
        const jsonData=await apiData.json();

        const restaurantInfo=jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        const dishlistarray=jsonData?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;

        setrestroList(restaurantInfo);
        setresobj(restaurantInfo);
        setdishList(dishlistarray);

        // console.log(dishlistarray);
       
        // console.log(jsonData);
        //resobj is used for creating a features beacuses restroList is updated when click on features so resobj having always the full data 
       
    }
    useEffect(()=>{
        fetchData();
    },[])
    // console.log(restroList);
    // console.log("setlist",dishList);
    
    const connectionStatus=useOnline();
    if(connectionStatus === "offline") return <h1>Looks like you're offline!!....please check internet connection</h1>
    if(!restroList || restroList.length ===0 ){
        return <ShimmerUI/>
    }
    return (
        

        <div className="body mx-10 my-10">
            <div className="searchBar flex-shrink-0 flex items-center">
                <input
                    type="text"
                    className="filter-btn-search w-full sm:w-64 text-base sm:text-lg border-2 px-3 py-1 text-left border-[#000000] rounded-md bg-[#f0f0f0]"
                    value={searchtext}
                    onChange={(input) => setsearchtext(input.target.value)}
                />
                <button
                    className="filter-btn-search text-base sm:text-lg ml-2 border-2 px-3 py-1 text-center border-[#b5b5b5] rounded-md bg-green-100"
                    onClick={() => {
                        const filterData = resobj.filter((restro) =>
                            restro.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        if (filterData.length === 0) {
                            alert("Sorry, we couldn't find any restaurant matching your search. Please try again!");
                        } else {
                            setrestroList(filterData);
                        }
                    }}
                >
                    Search
                </button>
            </div>
            {console.log("dishList",dishList)}
            {/* Dish-Slider */}
            <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide  bg-white my-10 border-1  shadow-[0_1px_50px_rgba(0,0,0,0.16)]">
                {
                    dishList.map((dish,index)=>{
                        // const firstItemEntityId = dishList[0].entityId;
                        // const params = new URLSearchParams(firstItemEntityId.split("?")[1]);
                        // const collectionId = params.get("collection_id");
                        const collectionId = dish.entityId.match(/collection_id=(\d+)/)?.[1];

                        return(
                       <Link key={dish.id}  to={"/dish/"+collectionId+"/"+dish.description}>
                        <img className="w-48 object-cover mx-20 flex-shrink-0" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" + dish.imageId} alt={dish.description}></img>
                        </Link> 
                        )
                    })
                }
                
                
            </div>


{/*  filter buttons */}
        <div className="features-Btn flex items-center my-10 p-2 rounded-lg  overflow-x-scroll space-x-3">


            <button
                className="filter-btn flex-shrink-0 text-base sm:text-lg border-2 px-3 py-1 text-center border-[#b5b5b5] rounded-md bg-[#f0f0f0]"
                onClick={() => {
                    const filterData = resobj.filter((res) => res.info.avgRatingString >= 4.5);
                    setrestroList(filterData);
                }}
            >
                Top Rated
            </button>
            
            <button
                className="filter-btn flex-shrink-0 text-base sm:text-lg border-2 px-3 py-1 text-center border-[#b5b5b5] rounded-md bg-[#f0f0f0]"
                onClick={() => setrestroList(resobj)}
            >
                All Items
            </button>
            
            <button
                className="filter-btn flex-shrink-0 text-base sm:text-lg border-2 px-3 py-1 text-center border-[#b5b5b5] rounded-md bg-[#f0f0f0]"
                onClick={() => {
                    const filterData = resobj.filter((restro) => restro.info.sla.lastMileTravel <= 0.5);
                    if (filterData.length === 0) {
                        alert("No nearby Restaurant is available");
                    } else {
                        setrestroList(filterData);
                    }
                }}
            >
                Near-by
            </button>
            
            <button
                className="filter-btn flex-shrink-0 text-base sm:text-lg border-2 px-3 py-1 text-center border-[#b5b5b5] rounded-md bg-[#f0f0f0]"
                onClick={() => {
                    const filterData = resobj.filter((restro) => restro.info.veg === true);
                    if (filterData.length === 0) {
                        alert("No Pure-Veg Restaurant is available");
                    } else {
                        setrestroList(filterData);
                    }
                }}
            >
                Pure-Veg
            </button>
            
            <button
                className="filter-btn flex-shrink-0 text-base sm:text-lg border-2 px-3 py-1 text-center border-[#b5b5b5] rounded-md bg-[#f0f0f0]"
                onClick={() => {
                    const filterData = resobj.filter((rescard) => rescard?.info?.sla?.deliveryTime <= 20);
                    setrestroList(filterData);
                }}
            >
                With-In 20Mins
            </button>
        </div>

            
            <div className="flex flex-wrap flex-shrink-2 items-center">
              {
                 restroList.map((restaurant,index)=>(
                 <Link className="link-page" key={restaurant.info.id} to={"/res/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link> 
                 ))
              }
                
                {/* <RestaurantCard resData={resobj[1]}/>
                <RestaurantCard resData={resobj[2]}/>
                <RestaurantCard resData={resobj[3]}/>
                <RestaurantCard resData={resobj[4]}/>
                <RestaurantCard resData={resobj[5]}/>
                <RestaurantCard resData={resobj[6]}/>
                <RestaurantCard resData={resobj[7]}/> */}
                
                {/* <RestaurantCard resname="New Cafe" cuisines="chines,indain,non-veg"/> */}
            </div>

        </div>
    )
}
export default Body;