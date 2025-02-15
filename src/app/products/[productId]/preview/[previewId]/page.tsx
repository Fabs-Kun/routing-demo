import {notFound} from "next/navigation"

export default function previewDetails({params}: {params: {productId : string; previewId : string;}}){
    
    if (parseInt(params.previewId) > 1000) {
        notFound()
    }
    return(
        <h1>
            Review {params.previewId} for Product {params.productId}
        </h1>
    )
}