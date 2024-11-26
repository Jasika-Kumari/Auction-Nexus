import React from 'react'
// import PropTypes from 'prop-types'
import Carousel from 'react-bootstrap/Carousel';


export default function Notice() {
    let myStyle1={
        color: 'white',
        backgroundColor: '#0B2B26'
    }
    let myStyle2={
        color: 'white',
        backgroundColor: '#de3c1a'
    }
    let myStyle3={
        color: 'white',
        backgroundColor: '#3740cd'
    }
    let logoStyle={
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '4px solid white'
    }
    const controlStyle={
        width: '20px',
        height: '20px',
        backgroundSize: '20px 20px'
    }
    return (
    
      <div className="container mt-3">
      <div className="row">
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card" style={myStyle1}>
          <div className="card-body">
            <div className="card-title" style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
              <i class="fa-solid fa-hammer" style={logoStyle}></i>
              <h5 className='pt-2 font-weight-bold'>Upcoming Auctions</h5>
            </div>
            <Carousel indicators={false} 
             nextIcon={<span className="carousel-control-next-icon" style={controlStyle} />}
             prevIcon={<span className="carousel-control-prev-icon" style={controlStyle} />}
             >
                <Carousel.Item>
            <p className="card-text pl-5 pr-5">With supporting text below as a natural lead-in to additional content.</p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="card-text pl-5 pr-5">nohie wkerj brq3u eajqorh rhoiqhr jdnfoohreio kdsfeirhii ddjdiiei
                </p>
            </Carousel.Item>
            </Carousel>
            <a href="/" className="btn btn-primary mt-3" style={{backgroundColor: 'white', color:'black', border: 'none'}}>View Auctions</a>
          </div>
        </div>
      </div>
      
      
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card" style={myStyle2}>
          <div className="card-body">
            <div className="card-title" style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
              <i className="fa-solid fa-rocket" style={logoStyle}></i>
              <h5 className='pt-2 font-weight-bold'>Active Auctions</h5>
            </div>
            <Carousel indicators={false} 
             nextIcon={<span className="carousel-control-next-icon" style={controlStyle} />}
             prevIcon={<span className="carousel-control-prev-icon" style={controlStyle} />}
             >
                <Carousel.Item>
            <p className="card-text pl-5 pr-5">With supporting text below as a natural lead-in to additional content.</p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="card-text pl-5 pr-5">nohie wkerj brq3u eajqorh rhoiqhr jdnfoohreio kdsfeirhii ddjdiiei
                </p>
            </Carousel.Item>
            </Carousel>
            <a href="/" className="btn btn-primary mt-3" style={{backgroundColor: 'white', color:'black', border: 'none'}}>View Auctions</a>
          </div>
        </div>
      </div>
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card" style={myStyle3}>
          <div className="card-body">
            <div  className="card-title" style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
              <i className="fa-solid fa-ban" style={logoStyle}></i>
              <h5 className='pt-2 font-weight-bold'>Cancelled Auctions</h5>
            </div>
            <Carousel indicators={false} 
             nextIcon={<span className="carousel-control-next-icon" style={controlStyle} />}
             prevIcon={<span className="carousel-control-prev-icon" style={controlStyle} />}
             >
                <Carousel.Item>
            <p className="card-text pl-5 pr-5">With supporting text below as a natural lead-in to additional content.</p>
            </Carousel.Item>
            <Carousel.Item>
                <p className="card-text pl-5 pr-5">nohie wkerj brq3u eajqorh rhoiqhr jdnfoohreio kdsfeirhii ddjdiiei
                </p>
            </Carousel.Item>
            </Carousel>
            <a href="/" className="btn btn-primary mt-3" style={{backgroundColor: 'white', color:'black', border: 'none'}}>View Auctions</a>
          </div>
        </div>
      </div>
    </div>
    </div> 
  )
}
// import React from 'react'
// // import PropTypes from 'prop-types'
// import Carousel from 'react-bootstrap/Carousel';


// export default function Notice() {
//     let myStyle1={
//         color: 'white',
//         backgroundColor: '#de3c1a'
//     }
//     let myStyle2={
//         color: 'white',
//         backgroundColor: '#3740cd'
//     }
//     let myStyle3={
//         color: 'white',
//         backgroundColor: '#3740cd'
//     }
//     let logoStyle={
//         display: 'inline-flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '40px',
//         height: '40px',
//         borderRadius: '50%',
//         border: '4px solid white'
//     }
//     const controlStyle={
//         width: '20px',
//         height: '20px',
//         backgroundSize: '20px 20px'
//     }
//     return (
//        <div style={{backgroundColor:"#f8f9fa"}}>
//       <div className="container mt-3" style={{width:'80%'}}>
//       <div className="row" >
//       <div className="col-sm-6 mb-3 mb-sm-4">
//         <div className="card" style={myStyle1}>
//           <div className="card-body">
//             <div className="card-title" style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
//               <i class="fa-solid fa-hammer" style={logoStyle}></i>
//               <h5 className='pt-2 font-weight-bold'>Upcoming Auctions</h5>
//             </div>
//             <Carousel indicators={false} 
//              nextIcon={<span className="carousel-control-next-icon" style={controlStyle} />}
//              prevIcon={<span className="carousel-control-prev-icon" style={controlStyle} />}
//              >
//                 <Carousel.Item>
//             <p className="card-text pl-5 pr-5">With supporting text below as a natural lead-in to additional content.</p>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <p className="card-text pl-5 pr-5">nohie wkerj brq3u eajqorh rhoiqhr jdnfoohreio kdsfeirhii ddjdiiei
//                 </p>
//             </Carousel.Item>
//             </Carousel>
//             <a href="/" className="btn btn-primary mt-3" style={{backgroundColor: 'white', color:'black', border: 'none'}}>View</a>
//           </div>
//         </div>
//       </div>
      
//       <div className="col-sm-6 mb-3 mb-sm-0">
//         <div className="card" style={myStyle2}>
//           <div className="card-body">
//             <div className="card-title" style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
//               <i className="fa-solid fa-rocket" style={logoStyle}></i>
//               <h5 className='pt-2 font-weight-bold'>Active Auctions</h5>
//             </div>
//             <Carousel indicators={false} 
//              nextIcon={<span className="carousel-control-next-icon" style={controlStyle} />}
//              prevIcon={<span className="carousel-control-prev-icon" style={controlStyle} />}
//              >
//                 <Carousel.Item>
//             <p className="card-text pl-5 pr-5">With supporting text below as a natural lead-in to additional content.</p>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <p className="card-text pl-5 pr-5">nohie wkerj brq3u eajqorh rhoiqhr jdnfoohreio kdsfeirhii ddjdiiei
//                 </p>
//             </Carousel.Item>
//             </Carousel>
//             <a href="/" className="btn btn-primary mt-3" style={{backgroundColor: 'white', color:'black', border: 'none'}}>View</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-6 mb-3 mb-sm-0">
//         <div className="card" style={myStyle3}>
//           <div className="card-body">
//             <div  className="card-title" style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
//               <i className="fa-solid fa-ban" style={logoStyle}></i>
//               <h5 className='pt-2 font-weight-bold'>Cancelled Auctions</h5>
//             </div>
//             <Carousel indicators={false} 
//              nextIcon={<span className="carousel-control-next-icon" style={controlStyle} />}
//              prevIcon={<span className="carousel-control-prev-icon" style={controlStyle} />}
//              >
//                 <Carousel.Item>
//             <p className="card-text pl-5 pr-5">With supporting text below as a natural lead-in to additional content.</p>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <p className="card-text pl-5 pr-5">nohie wkerj brq3u eajqorh rhoiqhr jdnfoohreio kdsfeirhii ddjdiiei
//                 </p>
//             </Carousel.Item>
//             </Carousel>
//             <a href="/" className="btn btn-primary mt-3" style={{backgroundColor: 'white', color:'black', border: 'none'}}>View</a>
//           </div>
//         </div>
//       </div>
//       <div className="col-sm-6 mb-3 mb-sm-4">
//         <div className="card" style={myStyle1}>
//           <div className="card-body">
//             <div className="card-title" style={{display: 'flex', flexDirection: 'row', gap: '1rem'}}>
//               <i class="fa-solid fa-hammer" style={logoStyle}></i>
//               <h5 className='pt-2 font-weight-bold'>Corrigendum</h5>
//             </div>
//             <Carousel indicators={false} 
//              nextIcon={<span className="carousel-control-next-icon" style={controlStyle} />}
//              prevIcon={<span className="carousel-control-prev-icon" style={controlStyle} />}
//              >
//                 <Carousel.Item>
//             <p className="card-text pl-5 pr-5">With supporting text below as a natural lead-in to additional content.</p>
//             </Carousel.Item>
//             <Carousel.Item>
//                 <p className="card-text pl-5 pr-5">nohie wkerj brq3u eajqorh rhoiqhr jdnfoohreio kdsfeirhii ddjdiiei
//                 </p>
//             </Carousel.Item>
//             </Carousel>
//             <a href="/" className="btn btn-primary mt-3" style={{backgroundColor: 'white', color:'black', border: 'none'}}>View</a>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div> 
//   )
// }