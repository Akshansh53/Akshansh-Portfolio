import "../components/Components.css"
export function InputBox({props}){
    return(
        <>
        <input className="input-box" type="text" placeholder={props.placeholder} />
        </>
    )
}