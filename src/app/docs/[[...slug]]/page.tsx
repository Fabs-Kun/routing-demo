export default async function Docs({params}: {params: Promise<{slug: string[]}>}){
    const slug = (await params).slug
    if ((await params).slug?.length === 2){
        return(
            <h1>Viewing Docs for {(await params).slug[0]} Feature and {(await params).slug[1]} Concept</h1>
        )
    } else if ((await params).slug?.length === 1){
        return(
            <h1>Viewing Docs for {(await params).slug[0]} Feature</h1>
        )
    } else if((await params).slug?.length === 3){
        return(
            <h1>Viewing Docs for {(await params).slug[0]} Feature , {(await params).slug[1]} Concept and {(await params).slug[2]} Example</h1>
        )
    } else {
        return(
            <h1>Docs Main Page</h1>
        )
    }
}