export default function Docs({params}: {params: {slug: string[]}}){
    if (params.slug?.length === 2){
        return(
            <h1>Viewing Docs for {params.slug[0]} Feature and {params.slug[1]} Concept</h1>
        )
    } else if (params.slug?.length === 1){
        return(
            <h1>Viewing Docs for {params.slug[0]} Feature</h1>
        )
    } else if(params.slug?.length === 3){
        return(
            <h1>Viewing Docs for {params.slug[0]} Feature , {params.slug[1]} Concept and {params.slug[2]} Example</h1>
        )
    } else {
        return(
            <h1>Docs Main Page</h1>
        )
    }
}