import {notFound} from "next/navigation"

function getRandomInt(count:number) {
    return Math.floor(Math.random() * count);
}

export default async function previewDetails({params}: {params: Promise<{productId : string; previewId : string;}>}){
    // const random = getRandomInt(2);

    // if(random === 1){
    //     throw new Error("Error loading preview...")
    // }
    
    if (parseInt((await params).previewId) > 1000) {
        notFound()
    }
    return(
        <h1>
            Review {(await params).previewId} for Product {(await params).productId}
        </h1>
    )
}