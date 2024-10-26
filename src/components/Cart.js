
import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";
import { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import PaymentUI from "./PaymentUI";
import ShimmerUI from "./ShimmerUI";
const Cart=()=>{
    const cartItemlist=useSelector((store)=>store.cart.items);
    const [total,settotal]=useState(0);
    const [status,setstatus]=useState(false);
    const removeAll=useDispatch();
    useEffect(()=>{
        
        const totalPrice = cartItemlist.reduce((acc, cart) => {
            // Calculate total for both defaultPrice and price, fallback to 0 if neither exists
            const price = cart?.defaultPrice/100 || cart?.price/100 || 0;
            return acc + price ;  
        }, 0);

        settotal(parseFloat(totalPrice.toFixed(2)));
        
    },[cartItemlist])
   
    // const [itemlist,setitemList]=useState(null);
    // setitemList(cartItemlist);
    return(
        <div className="text-center ">
            <h1 className="font-bold my-2 text-4xl">Cart-Items</h1>
           <div>{cartItemlist.map((cart,index)=>{        
                return(
                    <CartItemCard key={cart?.id} data={cart} index={index}/>
                )
            }
                
        )}</div>

        <div className="flex justify-center items-center "> 
            <div  className=" ">
            <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={()=>{
                removeAll(clearCart())
            }}
            >Clear All</button>
            <p className="text-2xl border-b-orange-200">Total Items:{cartItemlist.length}</p> 
            <p className="text-2xl">Item Total:₹{total}</p> 
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={()=>{
                // console.log("Hello");
                if(total>0){
                    setstatus(true);
                }
                else{
                    alert("please add items into the cart");
                }
                     
            }}
            >Payment</button>
             
            </div>
               
        </div>
        {
            status&&<PaymentUI totalpayment={total} close={()=>setstatus(false)}/>
        }
        </div>
    )
}
export default Cart;