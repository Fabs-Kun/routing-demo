"use client";

export default function errorBoundary({error}: {error: Error}){
    return <h1>{error.message}</h1>
}