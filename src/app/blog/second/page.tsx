import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Second Blog',
}

export default function secondBlog(){
    return <h1>Second Page of My Blog</h1>
}