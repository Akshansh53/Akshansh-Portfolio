import "./Components.css";

export function EducationCard({props}) {
  return (
    <div className={`educationcard ${props.align}`}>
      <div className="card-content">
        <h4>{props.course} {props.start}-{props.end}</h4>
        <p>{props.institute}</p>
        <li>{props.description}</li>
      </div>
      <div className="bullet" />
      
    </div>
  );
}
