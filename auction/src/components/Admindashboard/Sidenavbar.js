import React from 'react';
import './Sidebar.css';
import Logo from './logo1.png';
import{Link} from 'react-router-dom'

function Sidenavbar() {
  return (
    <div className='bg-white sidebar p-2'>
      <div className='m-2 d-flex align-items-center'>
        <img src={Logo} alt="Logo" style={{ height: "30px" }} />
        <span className='brand-name fs-4 ms-2'>Auction Nexus</span>
      </div>
      <hr className='text-dark' />
      <div className='list-group list-group-flush'>
        <Link className='list-group-item py-2 nav-link' href="/userdashboard">
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className="fs-5">Dashboard</span>
        </Link>
        <Link className='list-group-item py-2 nav-link' href="/userdashboard">
          <i className='bi bi-house fs-5 me-3'></i>
          <span className="fs-5">Home</span>
        </Link>
        <Link className='list-group-item py-2 nav-link' href="/userdashboard">
          <i className='bi bi-table fs-5 me-3'></i>
          <span className="fs-5">Products</span>
        </Link>
        <Link className='list-group-item py-2 nav-link' to="/report">
          <i className='bi bi-clipboard-data fs-5 me-3'></i>
          <span className="fs-5">Report</span>
        </Link>
        <Link className='list-group-item py-2 nav-link' href="/userdashboard">
          <i className='bi bi-people fs-5 me-3'></i>
          <span className="fs-5">Customers</span>
        </Link>
        <Link className='list-group-item py-2 nav-link' href="/userdashboard">
          <i className='bi bi-plus-circle fs-5 me-3'></i>
          <span className="fs-5">Add a Product</span>
        </Link>
        <Link className='list-group-item py-2 nav-link' href="/userdashboard">
          <i className='bi bi-calculator fs-5 me-3'></i>
          <span className="fs-5">Calculator</span>
        </Link>
        <Link className='list-group-item py-2 nav-link' to="/addproduct">
          <i className='bi bi-megaphone fs-5 me-3'></i>
          <span className="fs-5">Publish a Notice</span>
        </Link>
        <Link className='list-group-item py-2 nav-link' href="/userdashboard">
          <i className='bi bi-power fs-5 me-3'></i>
          <span className="fs-5">Logout</span>
        </Link>
      </div>
    </div>
  );
}

export default Sidenavbar;