import { useEffect , useState } from "react";

const useOnline=()=>{

    const [connectionStatus,setconnectionStatus]=useState("online")
    useEffect(()=>{
        
        window.addEventListener("offline",()=>{
            setconnectionStatus("offline");
        })

        window.addEventListener("online",()=>{
            setconnectionStatus("online");
        })
    },[]);

    return connectionStatus;
}
export default useOnline;