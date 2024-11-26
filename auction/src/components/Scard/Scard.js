import React from 'react'
import Coal from './coalbg.jpg'
import {Link} from 'react-router-dom'
function Scard() {
  return (
    <>
     <div class="container">
  <div class="row">
    <div class="col-sm ">
    <div className="card" style={{width: "17rem", marginTop:"50px", marginLeft:"50px"}}>
      <span class="badge badge-primary" style={{width:"70px", marginLeft:"17px", marginTop:"10px"}}>Primary</span>
  <img className="card-img-top" src={Coal} alt="Card image cap"style={{margin:"10px", width:"250px"}}/>
  <div className="card-body">
    <h6 className="card-title" style={{fontWeight:"500", marginBottom:"2px"}}>Steam Coal</h6>
    <p style={{color:"gray", fontSize:"13px", marginTop:"2px", marginBottom:"0px"}}>12/06/2004 &nbsp; 1500 hrs.</p>
    <p style={{fontSize:"14px", marginTop:"4px", fontWeight:"450"}}>Lignite</p>
    <button type="button" class="btn btn-outline-dark" style={{marginRight:"7px"}}><i class="bi bi-cart" style={{marginRight:"2px"}}></i>Dark</button>
    <Link to="/auctionhall" className="btn btn-primary"><i class="bi bi-bag" style={{marginRight:"5px"}}></i>Go somewhere</Link>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div className="card" style={{width: "17rem", marginTop:"50px" , marginLeft:"40px", marginBottom:"50px"}}>
      <span class="badge badge-primary" style={{width:"70px", marginLeft:"17px", marginTop:"10px"}}>Primary</span>
  <img className="card-img-top" src={Coal} alt="Card image cap"style={{margin:"10px", width:"250px"}}/>
  <div className="card-body">
    <h6 className="card-title" style={{fontWeight:"500", marginBottom:"2px"}}>Steam Coal</h6>
    <p style={{color:"gray", fontSize:"13px", marginTop:"2px", marginBottom:"0px"}}>12/06/2004 &nbsp; 1500 hrs.</p>
    <p style={{fontSize:"14px", marginTop:"4px", fontWeight:"450"}}>Lignite</p>
    <button type="button" class="btn btn-outline-dark" style={{marginRight:"7px"}}><i class="bi bi-cart" style={{marginRight:"2px"}}></i>Dark</button>
    <Link to="/auctionhall" className="btn btn-primary "><i class="bi bi-bag" style={{marginRight:"5px"}}></i>Go somewhere</Link>
  </div>
</div>
    </div>
    <div class="col-sm">
    <div className="card" style={{width: "17rem", marginTop:"50px", marginLeft:"40px"}}>
      <span class="badge badge-primary" style={{width:"70px", marginLeft:"17px", marginTop:"10px"}}>Primary</span>
  <img className="card-img-top" src={Coal} alt="Card image cap"style={{margin:"10px", width:"250px"}}/>
  <div className="card-body">
    <h6 className="card-title" style={{fontWeight:"500", marginBottom:"2px"}}>Steam Coal</h6>
    <p style={{color:"gray", fontSize:"13px", marginTop:"2px", marginBottom:"0px"}}>12/06/2004 &nbsp; 1500 hrs.</p>
    <p style={{fontSize:"14px", marginTop:"4px", fontWeight:"450"}}>Lignite</p>
    <button type="button" class="btn btn-outline-dark" style={{marginRight:"7px"}}><i class="bi bi-cart" style={{marginRight:"2px"}}></i>Dark</button>
    <Link to="/auctionhall" className="btn btn-primary"><i class="bi bi-bag" style={{marginRight:"5px"}}></i>Go somewhere</Link>
  </div>
</div>
    </div>
  </div>
</div> 
    </>
  )
}

export default Scard
