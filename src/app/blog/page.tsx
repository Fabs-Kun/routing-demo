import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        absolute: 'Blog',
    }
}

export default function Blog(){
    return <h1>Here's My Blog</h1>
}