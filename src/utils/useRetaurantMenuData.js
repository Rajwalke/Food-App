// API call for Restaurant Menu Data

import { useEffect , useState } from "react";
import { MENU_API } from "./constant";
const useRetaurantMenuData=(resId)=>{
    const [menulist,setmenulist]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
        const apiData=await fetch(MENU_API + resId);
        const jsonData=await apiData.json();
        setmenulist(jsonData?.data);
    }

    return menulist;

}
export default useRetaurantMenuData;