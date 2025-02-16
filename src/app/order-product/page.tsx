"use client";
import { useRouter } from "next/navigation";

export default function orderProduct(){
    const router = useRouter();
    const handleClick = () =>{
        console.log("Placing your order");
        router.push("/");
    }
    return(
        <>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}