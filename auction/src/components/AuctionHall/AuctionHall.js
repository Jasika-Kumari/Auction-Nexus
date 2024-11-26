import React from 'react'
//import Navbar from '../Navbar/Navbar'
import {useState, useEffect} from 'react'
//import Footer from '../Footer/Footer'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './AuctionHall.css'
import {Link} from 'react-router-dom'
//import Img from './bg1.jpg'
function AuctionHall() {

    
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
      {/* <Navbar/> */}
        
    <header style={{ padding: 0, height: '70vh', overflow: 'hidden' }}>
      <div
        className="bg-image"
        style={{
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          
          height: '100%',
          width: '100%',
          position: 'relative',
        }}
      >
        <div
          className="mask"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <div className="sketchfab-embed-wrapper" style={{ height: '100%', width: '100%' }}>
            <iframe
              title="Charbon/coal"
              frameBorder="0"
              allowFullScreen
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allow="autoplay; fullscreen; xr-spatial-tracking"
              src="https://sketchfab.com/models/28e7291721a342839cf293139415ef72/embed?autostart=1"
              style={{ width: '100%', height: '100%', border: 'none' }}
            ></iframe>
          </div>
        </div>
      </div>
    </header>
   
    <section className='auction'>
            <div className='card-container' style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <div className='auction1'>
                    <Card style={{width: '30rem', height: '38rem',margin: '0', padding: '0', borderRadius: '40px' }}>
                          {/* <Card.Img variant="top" src={Img} style={{borderTopLeftRadius:'20px', borderTopRightRadius: '20px'}}/>  */}
                        <Card.Body>
                        <div className='head-bg'>
                            <Card.Title style={{textAlign: 'center', fontWeight: 'bold'}}>Live Auction</Card.Title>
                            <p style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                            <span>Item Name : CLU-2_MCL_FCCL_23548615</span>
                            <span>Auction ID : ECA_2024_CIL_147</span>
                            <span>Organisation Chain : Coal India Limited</span>
                            </p>
                            <p style={{marginBottom: '2rem', fontWeight: '500'}}>Current Date: {formattedDate} &nbsp; Current Time: {formattedTime}</p>
                            </div>
                            
                            <Card.Text style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                               
                            {/* <div className='card-items'> */}
                            <div className='card-items'>
                                <div className='card-item1'>
                                    <i className="fa-solid fa-user-plus" style={{paddingTop: '0.8rem', fontSize: 'larger'}}></i>
                                    <div>
                                        <span style={{fontWeight: '500'}}>Highest Price</span>
                                        <div>
                                            <i className="fa-solid fa-indian-rupee-sign"></i>
                                            <span>---</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-item1'>
                                    <i className="fa-solid fa-user-minus" style={{paddingTop: '0.8rem', fontSize: 'larger'}}></i>
                                    <div>
                                        <span style={{fontWeight: '500'}}>Lowest Price</span>
                                        <div>
                                            <i className="fa-solid fa-indian-rupee-sign"></i>
                                            <span>---</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-item1'>
                                <i className="fa-solid fa-lock" style={{paddingTop: '0.8rem', fontSize: 'larger'}}></i>
                                    <div>
                                        <span style={{fontWeight: '500'}}> Allocated Quantity</span>
                                        <div>
                                            <span>0 Tonne</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-items'>
                                <div>
                                    <div>
                                        <span style={{fontWeight: '500'}}>Requested Price</span>
                                        <div>
                                            <i class="fa-solid fa-indian-rupee-sign"></i>
                                            <span>0</span>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div>
                                            <i class="fa-regular fa-clock"></i>
                                            <span style={{fontWeight: '500'}}>Time left</span>
                                        </div>
                                        {/* time left */}
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <span style={{fontWeight: '500'}}>Requested Quantity</span>
                                        <div>
                                            <span>0 Tonne</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* </div> */}
                            </Card.Text>
                            <Form>
                                <Row className="align-items-center">
                                    <Col sm={12} style={{display: 'flex', flexDirection: 'row', gap:'0.5rem'}}>
                                        <InputGroup>
                                            <InputGroup.Text><i class="fa-solid fa-indian-rupee-sign"></i></InputGroup.Text>
                                            <Form.Control
                                            id="inlineFormInputGroupUsername"
                                            placeholder="Enter Price"
                                            />
                                            <Form.Control
                                            id="inlineFormInputGroupUsername"
                                            placeholder="Enter Quantity"
                                            />
                                            <InputGroup.Text>Tonne</InputGroup.Text>
                                        </InputGroup>
                                        <Button style={{backgroundColor: '#0c44e1', borderRadius: '50%'}}><i class="fa-solid fa-hammer" style={{paddingTop: '0.4rem'}}></i></Button>
                                    </Col>
                                </Row>
                            </Form>
                            <Card.Text>
                                <div className='auction-details'>
                                    <div className='details'>
                                    <span>Total Quantity:</span>
                                    <span style={{fontWeight: '500'}}>25000 Tonne</span>
                                    </div>
                                    <div className='details'>
                                    <span>Base Price:</span>
                                    <span style={{fontWeight: '500'}}><i class="fa-solid fa-indian-rupee-sign"></i>190</span>
                                    </div>
                                    <div className='details'>
                                    <span>Auction Start Date and Time:</span>
                                    <span style={{fontWeight: '500'}}>20-Jul-2024 10:00 AM</span>
                                    </div>
                                    <div className='details'>
                                    <span>Auction End Date and Time:</span>
                                    <span style={{fontWeight: '500'}}>20-Jul-2024 02:00 PM</span>
                                    </div>
                                    <div className='details'>
                                    <span>Incremental Value:</span>
                                    <span style={{fontWeight: '500'}}><i class="fa-solid fa-indian-rupee-sign"></i>20</span>
                                    </div>
                                    <div className='details'>
                                    <span>Payment Mode:</span>
                                    <span style={{fontWeight: '500'}}>Bank Guarantee</span>
                                    </div>
                                </div>
                            </Card.Text>
                            <div className='buttongroup'>
                                <Button>Auction Details</Button>
                                <Link to="/bidproduct" className="nav-link"><Button>Account Balance</Button></Link>
                                <Button>Bid History</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                
            </div>
        </section> 
        
       {/* <Footer/> */}
    </>
  )
}

export default AuctionHall