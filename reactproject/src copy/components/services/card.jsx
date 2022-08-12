import { Link } from "react-router-dom";
const Card=({
card:{_id,bizName,bizAddress,bizPhone,bizImage,bizDescription}
})=>{
    return(
        <div className="card" style={{width: "18rem"}}>
        <img src={bizImage} className="card-img-top" alt={bizName}></img>
        <div className="card-body">
          <h5 className="card-title">Bizname: {bizName}</h5>
          <p className="card-text">BIZDESCRIPTION: {bizDescription}</p>
          
          <ul className="list-group list-group-flush">
            <div className="list-group-item">bizAddresS: {bizAddress}</div>
            <div className="list-group-item">PHONE: {bizPhone}</div>
          </ul>

         <Link to={`/my-cards/edit/${_id}`} className="card-link">Edit</Link>
         <Link to={`/my-cards/delete/${_id}`} className="card-link">Delete</Link>

        </div>
      </div>
    )
}
export default Card;