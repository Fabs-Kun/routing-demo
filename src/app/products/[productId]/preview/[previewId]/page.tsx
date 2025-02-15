export default function previewDetails({params}: {params: {productId : string; previewId : string;}}){
    return(
        <h1>
            Review {params.previewId} for Product {params.productId}
        </h1>
    )
}