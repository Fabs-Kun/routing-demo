"use client";

export default function errorBoundary({error, reset}: {error: Error; reset: () => void}){
    return(
        <div>
            {error.message} <button onClick={reset}>Try Again</button>
        </div>
    )
}

// Note,
// You can also make this into a nested error handling, by simply just move this file into products directory, which is the root for everything connected with product. Also, this error message won't show if you're using async or await and promise in client mode, since its not supported yet. However if you ain't putting "use client"; but still uses promise with async and await, It'll show the page but wouldn't want to refresh it if you press the button. So for better experience, try not use promise with async and await in page.tsx. I use promise because of some reason that i have to fullfiled in order for me to be able to run build.
