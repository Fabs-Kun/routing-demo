"use client";

export default function errorBoundary({error, reset}: {error: Error; reset: () => void}){
    return(
        <div>
            {error.message} <button onClick={reset}>Try Again</button>
        </div>
    )
}

// Note,
// You can also make this into a nested error handling, by simply just move this file into products directory, which is the root for everything connected with product.
