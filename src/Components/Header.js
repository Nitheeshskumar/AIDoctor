import React from 'react'
import {Link, useLocation,useHistory} from 'react-router-dom'
import { GlobalContext, GlobalDispatchContext } from '../ContextStore/ContextAPI'
import Doctor from '../Assets/Doctor.jpeg'
import { ManageLocalStorage } from '../Utils/ManageLocalStorage';
const Header =()=>{
const {loginState}= React.useContext(GlobalContext)
const dispatch= React.useContext(GlobalDispatchContext)
const [show,setShow]=React.useState(false)
const history =useHistory()
const location=useLocation()
const handleLogClick=()=>{
  if(loginState.isLoggedIn){
    dispatch({type:'logout'})
    ManageLocalStorage.clear()

  }
  history.push('./login')

}
React.useEffect(()=>{
  setShow(false)
},[location])
const toLogin=()=>history.push('./dashboard')
    return     <nav className="navbar navbar-expand-lg navbar-light" id="nav" style={{background: '#FDF5E5'}}>
    <div className="imagecontainer" onClick={toLogin}>
    <Link to="/" className="nav-link">
      <img alt="Vue logo" src={Doctor} width="50px" className="CartLogo"/>
    </Link>
    </div>
    <Link to="/" className="nav-link">
      <div className='fantasy' onClick={toLogin} style={{ color: '#521F1E'}}>Dr. Chitti, PhD AI</div>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarText"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={()=>setShow(state=>!state)}

    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse ${show?'show':''}`} id="navbarText" >
      <ul className="navbar-nav mr-auto">
        <li><Link
              to="/login"
              onClick={handleLogClick}
              className={`nav-link ${loginState.isLoggedIn?'text-danger':''}`}>{loginState.isLoggedIn? <><i className="fas fa-sign-out-alt"></i>Logout</>:'Login'}  </Link></li>
      </ul>
    </div>
  </nav>
}
export default Header