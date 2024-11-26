import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LogoCarousel = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  const containerStyle = {
    textAlign: 'center',
    padding: '20px 0',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: ''
  };

  const headerStyle = {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#333'
  };

  const slideStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 2px' // Space between logos
  };

  const imgStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Our Partners</h2>
      <Slider {...settings}>
        <div style={slideStyle}><img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Partner 1" style={imgStyle} /></div>
        <div style={slideStyle}><img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Partner 2" style={imgStyle} /></div>
        <div style={slideStyle}><img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Partner 3" style={imgStyle} /></div>
        <div style={slideStyle}><img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="Partner 4" style={imgStyle} /></div>
        <div style={slideStyle}><img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="Partner 5" style={imgStyle} /></div>
        <div style={slideStyle}><img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Partner 6" style={imgStyle} /></div>
        <div style={slideStyle}><img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Partner 7" style={imgStyle} /></div>
      </Slider>
    </div>
  );
};

export default LogoCarousel;