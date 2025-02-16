import { Metadata } from "next";
import Link from "next/link"

export const metadata: Metadata = {
    title: {
        absolute: 'Blog',
    }
}

export default function Blog(){
    return(
        <>  
            <Link href="/">Home</Link>
            <h1>Here's My Blog</h1>
            <h2>
                <Link href="/blog/first">First Page</Link>
            </h2>
            <h2>
                <Link href="/blog/second">Second Page</Link>
            </h2>
        </>
    )
}