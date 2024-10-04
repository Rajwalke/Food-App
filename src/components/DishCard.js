import { CDN_DISH_IMG_URL } from "../utils/constant";

const DishCard = ({ dishdata }) => {
    return (
        <div className="w-64 h-[400px] flex flex-col justify-between mr-4 mb-3 p-2 pb-3 rounded-lg border-2 shadow-[0_1px_50px_rgba(0,0,0,0.16)] hover:bg-gray-200 hover:border-gray-300">
            <img className="dish-img w-full h-56 rounded-lg" src={CDN_DISH_IMG_URL + dishdata?.card?.card?.info?.cloudinaryImageId} alt={dishdata?.card?.card?.info?.name} />
            <div className="flex-1">
                <h3 className="font-bold py-2 text-lg">{dishdata?.card?.card?.info?.name}</h3>
                <p className="res-info text-base pb-2">{dishdata?.card?.card?.info?.costForTwo}</p>
                <p className="res-info pb-2">
                    <span>{dishdata?.card?.card?.info?.avgRatingString}</span>
                    <span> {dishdata?.card?.card?.info?.sla?.slaString}</span>
                </p>
                {/* Ensure cuisines text wraps or truncates */}
                <p className="pb-2 res-info overflow-hidden text-ellipsis whitespace-nowrap">
                    {dishdata?.card?.card?.info?.cuisines.join(", ")}
                </p>
            </div>
            <p className="res-info pb-1">
                {dishdata?.card?.card?.info?.areaName}
                <span> {dishdata?.card?.card?.info?.sla?.lastMileTravelString}</span>
            </p>
        </div>
    );
}

export default DishCard;
