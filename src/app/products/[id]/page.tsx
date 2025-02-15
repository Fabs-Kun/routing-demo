export default function productDetails({params}: {params : {id : string}}){
    return <h1>Details About Product {params.id}</h1>
}