import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'First Blog',
}

export default function firstBlog() {
    return <h1>First Page of My Blog</h1>
}