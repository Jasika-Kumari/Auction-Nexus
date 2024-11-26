import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import './Navbar.css';
import Logo from './logo.png'
import {useState, useEffect} from 'react'
 import {Link} from 'react-router-dom'
// import { NavLink } from 'react-router-dom';


function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString();
  const formattedTime = currentDateTime.toLocaleTimeString();

  return (
    <>
    <div className="container-2xl 
                text-center p-2 
                border-bottom border-2  border-gray 
                fw-bolder " style={{background:"white"}}>
        <div className="row">
  <div className="col-sm-3" style={{fontSize:"13.5px"}}>
  
  Current Date: {formattedDate} &nbsp; Current Time: {formattedTime}
  </div>
  <div className="col-sm-6" > </div>
  <div className="col-sm-3"><FaSearch  style={{color:"black", width:"22px"}}/><FaUser style={{color:"black", width:"22px", paddingLeft:"3px"}} />
  <FaHeart style={{color:"black", width:"22px", paddingLeft:"3px"}}/>
  </div>
</div>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-2" style={{backgroundColor:"white"}}>
  <div className="container-fluid" style={{marginLeft:"20px"}}>
    <img src={Logo} alt="" style={{height:"50px" }}/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse flex" id="navbarSupportedContent" style={{marginLeft:"10px"}}>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 underline-hover" >
        <li className="nav-item">
          <Link className="nav-link active underline-hover1" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link underline-hover2" to="/products">Notice</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link underline-hover3" to="/">Authorization</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link underline-hover4" to="/">Live Auction</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link underline-hover5" to="/contact">Contact</Link>
        </li>

        
      </ul>
      <div style={{display: "flex" }}>  
     <Link className="nav-link" to="/logout"><button className="btn" type="submit" style={{backgroundColor:"#0c44e1", color:"white",fontSize:"12px", padding:"10px",  }}>LOGOUT</button></Link>  &nbsp;
     <Link className="nav-link" to="/login"><button className="btn" type="submit" style={{backgroundColor:"#0c44e1", color:"white",fontSize:"12px", padding:"10px", }}>LOGIN</button></Link>
     <Link className="nav-link" to="/registration"> <button className="btn" type="submit" style={{backgroundColor:"#0c44e1", color:"white",fontSize:"12px", padding:"10px", marginLeft:"5px"}}>REGISTER</button> </Link>
     </div>  
      
    </div>
    
  </div>
</nav>
      
    </>
  )
}

export default Navbar