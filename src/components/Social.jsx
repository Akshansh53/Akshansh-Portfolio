import "../components/Components.css"
export function Social({props}){
    return(
        <a className="links" target="_blank" href={props.link}>
        <div className="social-media" title={props.title}>
            <i className={props.class}></i>
            <label for={props.class}>{props.label}</label>
        </div>
        </a>
    )
}