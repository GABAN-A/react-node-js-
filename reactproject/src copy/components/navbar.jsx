import { NavLink,Link } from "react-router-dom";
import { useAuth } from "./context/authcontext";
const Navbar=()=>{
  const{user}=useAuth();
    return(
      <>
    
        <p>
<nav  className="navbar navbar-expand-sm navbar-light " aria-label="Third navbar example">
    <div className="container">
     <Link className="navbar-brand" to="/">Cards Link <i class="bi bi-postcard"></i></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExample03">
        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
          <li className="nav-item">
          <NavLink
            to="about"
            className="nav-link">
         About
          </NavLink>
          </li>
          {user?.biz &&(
          <li className="nav-item">
          <NavLink
            to="my-cards/creat-card"
            className="nav-link">
         creat-card
          </NavLink>
          </li>
             )}
          {user?.biz &&(
             <li className="nav-item">
          <NavLink
            to="my-cards"
            className="nav-link">
        My cards
          </NavLink>
          </li>
          
          )}
        </ul>

        <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
       {user?(
        <li className="nav-item">
        <NavLink
             to="signout"
             className="nav-link">
         Sign Out
           </NavLink>
        </li>
        ):(
          <>
       <li className="nav-item">
       <NavLink
            to="SignUp"
            className="nav-link">
        Sign Up
          </NavLink>
       </li>
       <li className="nav-item">
       <NavLink
            to="signupbiz"
            className="nav-link">
        Sign Up Business
          </NavLink>
       </li>
       <li className="nav-item">
       <NavLink
            to="signin"
            className="nav-link">
        SignIn
          </NavLink>       </li>
          </>
        )}
     </ul>
     
      </div>
    </div>
  </nav>
        </p>
        
        </>
    )
}
export default Navbar;