import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
const Body=()=>{
    
    const [restroList,setrestroList]=useState([]);
    const [resobj,setresobj]=useState([]);
    const [searchtext,setsearchtext]=useState("");
    const fetchData= async ()=>{
        const apiData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.113645&lng=72.8697339&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData=await apiData.json();
        const restaurantInfo=jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setrestroList(restaurantInfo);
        setresobj(restaurantInfo)
       console.log(jsonData);
        //resobj is used for creating a features beacuses restroList is updated when click on features so resobj having always the full data 
       
    }
    useEffect(()=>{
        fetchData();
    },[])
    console.log(restroList);
    if(!restroList || restroList.length ===0 ){
        return <ShimmerUI/>
    }
    return (
        <div className="body">
            <div className="features-Btn">
                <div className="searchBar">
                    <input type="text" className="filter-btn-search" value={searchtext} onChange={(input)=>{
                        setsearchtext(input.target.value);
                    }}></input>
                    <button className="filter-btn-search" onClick={()=>{
                        // console.log(searchtext);
                        const filterData=resobj.filter((restro)=>{
                            return restro.info.name.toLowerCase().includes(searchtext.toLowerCase());
                        })
                        if(filterData.length === 0){
                            alert("Sorry, we couldn't find any restaurant matching your search. Please try again !!....");
                        }
                        else{
                            setrestroList(filterData);
                        }   
                    }}>Search</button>
                </div>

                <button className="filter-btn" 
                onClick={()=>{
                    const filterData=resobj.filter((res)=>{
                        if(res.info.avgRatingString>=4.5){
                            return res;
                        }
                    })
                    setrestroList(filterData);
                }}
                >Top Rated Restaurant</button>

                <button className="filter-btn" onClick={()=>{
                    setrestroList(resobj);
                }}>All Items</button>

                <button className="filter-btn" 
                onClick={()=>{
                    const filterData=resobj.filter((restro)=>{
                        if(restro.info.sla.lastMileTravel<=0.5){
                            return restro;
                        }
                    })
                    if(filterData.length === 0){
                        alert("No nearby Restaurant is avaliable")
                    }
                    else{
                        setrestroList(filterData);
                    }
                    
                   
                    
                }}
                >
                    Near-by Restro
                </button>

                <button className="filter-btn"
                    onClick={()=>{
                        const filterData=resobj.filter((restro)=>{
                            return restro.info.veg==true ;
                            // if(restro.info.veg== true){
                            //     return restro;
                            // }
                        })
                        if(filterData.length === 0){
                            alert("No Pure-Veg  Restaurant is avaliable")
                        }
                        else{
                        setrestroList(filterData);
                        }
                    }}
                    
                >
                    Pure-Veg
                </button>
            </div>
            
            <div className="restro-container">
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