import {notFound} from "next/navigation"

function getRandomInt(count:number) {
    return Math.floor(Math.random() * count);
}

export default function previewDetails({params}: {params: {productId : string; previewId : string;}}){
    const random = getRandomInt(2);

    if(random === 1){
        throw new Error("Error loading preview...")
    }
    
    if (parseInt(params.previewId) > 1000) {
        notFound()
    }
    return(
        <h1>
            Review {params.previewId} for Product {params.productId}
        </h1>
    )
}