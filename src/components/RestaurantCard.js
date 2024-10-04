import { CDN_DISH_IMG_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
    // Optional chaining to safely access nested properties
    const { name, costForTwo, avgRatingString, cuisines, areaName } = resData?.info;
    const { slaString, lastMileTravelString } = resData?.info?.sla;

    return (
        <div className="w-64 h-auto flex flex-col justify-between mr-4 mb-3 p-2 pb-3 rounded-lg border-2 shadow-[0_1px_50px_rgba(0,0,0,0.16)] hover:bg-gray-200 hover:border-gray-300">
            {/* Image */}
            <img
                className="w-full h-56 rounded-lg object-cover"
                src={CDN_DISH_IMG_URL + resData?.info?.cloudinaryImageId}
                alt={name}
            />

            {/* Restaurant details */}
            <div className="flex-1 flex flex-col">
                {/* Name */}
                <h3 className="font-bold py-2 text-lg break-words">{name}</h3>

                {/* Cost for two */}
                <p className="res-info text-base pb-2">{costForTwo}</p>

                {/* Rating and delivery time */}
                <p className="res-info pb-2">
                    <span className="pr-2">{avgRatingString}</span>
                    <span>{slaString}</span>
                </p>

                {/* Cuisines - Single line with ellipsis */}
                <p className="pb-2 res-info whitespace-nowrap overflow-hidden text-ellipsis">
                    {cuisines?.join(", ")}
                </p>
            </div>

            {/* Area name and last mile travel - Ensure wrapping */}
            <p className="res-info pb-1 break-words">
                {areaName} <span>{lastMileTravelString}</span>
            </p>
        </div>
    );
};

export default RestaurantCard;
