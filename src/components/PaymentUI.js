
import { useState } from "react";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import Paymentpopup from "./Paymentpopup";
const PaymentUI=({totalpayment,close})=>{
    const [check,setcheck]=useState(false);
    const dispatch=useDispatch();
    const paymentpopFn=()=>{
        setcheck(true);
        setTimeout(() => {
            setcheck(false)
        }, 2000);
    }
    return(
        <>
        {check && <Paymentpopup />}
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Payment</h2>
                <p className="mb-4">Your total payment is: ₹{totalpayment}</p>
                <button 
                    className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-md"
                    onClick={() => {
                        
                        dispatch(clearCart());
                        paymentpopFn();
                        setTimeout(() => {
                            close();
                        }, 2000);
                        
                    }}
                >
                    Pay Now
                </button>
                <button 
                    className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md ml-4"
                    
                    
                >
                    Cancel
                </button>
            </div>
        </div>
        </>
    )
}
export default PaymentUI;