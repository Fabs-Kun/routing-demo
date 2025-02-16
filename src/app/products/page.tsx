import Link from "next/link"

export default function productList(){
    const productId = "test";
    return(
        <>
            <h1>Product List :</h1>
            <h1>Product 1</h1>
            <h1>Product 2</h1>
            <h1>Product 3</h1>
            <h1>
                <Link href="/products/4" replace>Product 4</Link>
            </h1>
            <h1>
                <Link href={`products/${productId}`}>Product {productId}</Link>
            </h1>
            <a href="products/test">Product Test</a><br />
            <a href="products/test/preview/test">Product Test Preview</a>
        </>
    )
}