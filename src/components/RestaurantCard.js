import { CDN_DISH_IMG_URL } from "../utils/constant";
const RestaurantCard=({resData})=>{
    // optinal chaining
    const {name,costForTwo,avgRatingString,cuisines,areaName}=resData?.info;
    const {slaString,lastMileTravelString}=resData?.info?.sla;
      return (
          <div className="restro-card">
              <img className="dish-img" src={CDN_DISH_IMG_URL+resData.info.cloudinaryImageId}></img>
              <h3>{name}</h3>
              <p className="res-info">{costForTwo}</p>
              <p className="res-info"><span>{avgRatingString}</span> <span>{slaString}</span></p>
              <p className="res-info cusines">{cuisines.join(",")}</p>
              <p className="res-info">{areaName} <span>{lastMileTravelString}</span> </p>
              
          </div>
      )
  }
  
export default RestaurantCard;