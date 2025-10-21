// API call for Restaurant Menu Data

import { useEffect , useState } from "react";
import { MENU_API } from "./constant";
import mockSampleData from "./mockData";
const useRetaurantMenuData=(resId)=>{
    const [menulist,setmenulist]=useState(null);
    useEffect(()=>{
        // fetchData();
        setmenulist(mockSampleData.data);
    },[]);

    // const fetchData=async()=>{
    //     try{
    //         const apiData=await fetch(MENU_API + resId);
    //     const jsonData=await apiData.json();
    //     console.log("Api call is here",jsonData)
    //     setmenulist(jsonData?.data);
    //     }catch(err){
    //         console.log(err.message)
    //     }
    // }

    return menulist;

}
export default useRetaurantMenuData;