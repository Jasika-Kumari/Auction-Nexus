import React from 'react';
import Sidebar from './Sidebar';
// import Navbar from '../Navbar/Navbar'
// import Footer from '../Footer/Footer'
function Dashboard() {
  
  return (
    <>
    
      <div className='container-fluid min-vh-100' style={{ backgroundColor: "#63666A" }}>
        <div className='row'>
          {/* Sidebar */}
          <div className='col-12 col-lg-2 bg-white vh-100'>
            <Sidebar />
          </div>
           
          {/* Main Content Area */}
          <div className='col-12 col-lg-10'>
            {/* Uncommented content */}
            <div className='container-fluid'>
              <div className='row g-3 my-2'>
                <div className='col-md-3 p-1'>
                  <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded' style={{ width: "295px" }}>
                    <div>
                      <h3 className='fs-2'>230</h3>
                      <p className='fs-5'>Products</p>
                    </div>
                    <i className='bi bi-cart-plus p-3 fs-1'></i>
                  </div>
                </div>
                <div className='col-md-3 p-1'>
                  <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded' style={{ width: "295px" }}>
                    <div>
                      <h3 className='fs-2'>2450</h3>
                      <p className='fs-5'>Sales</p>
                    </div>
                    <i className='bi bi-currency-dollar p-3 fs-1'></i>
                  </div>
                </div>
                <div className='col-md-3 p-1'>
                  <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded' style={{ width: "295px" }}>
                    <div>
                      <h3 className='fs-2'>2250</h3>
                      <p className='fs-5'>Delivery</p>
                    </div>
                    <i className='bi bi-truck p-3 fs-1'></i>
                  </div>
                </div>
                <div className='col-md-3 p-1'>
                  <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded' style={{ width: "295px" }}>
                    <div>
                      <h3 className='fs-2'>20%</h3>
                      <p className='fs-5'>Increase</p>
                    </div>
                    <i className='bi bi-graph-up-arrow p-3 fs-1'></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Table with rounded borders */}
            <div>
              <caption className='text-white fs-4' style={{ display: "inline" }}>Recent Orders</caption>
              <table className="table rounded bg-white mt-2">
                <thead className="bg-primary text-white">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Dashboard;