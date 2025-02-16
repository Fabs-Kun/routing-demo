import { Metadata } from "next";

// type props = Promise<{
//     params : {
//         productId : string
//     }
// }>

export const generateMetadata = async ({params}: {params: Promise<{productId: string[]}>}): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(async () => {
            resolve(`iPhone ${(await params).productId}`)
        }, 100)
    })
    return{
        title: `Product ${title}`
    }
} 

export default async function productDetails({params}: {params: Promise<{productId: string[]}>}){
    return <h1>Details About Product {(await params).productId}</h1>
}