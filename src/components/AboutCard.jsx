export function AboutCard({props}){
    return (
        <>
        <div className="aboutcard">
            <h2 style={{"color":"#93a5b7","fontFamily":"sans-serif"}}>{props.quote}</h2>
            <i>{props.author}</i>
            <br />
            <br />
            <p style={{"color":"#e9ebef","fontFamily":"sans-serif"}}>{props.bio}</p>
        </div>
        </>
    )
}