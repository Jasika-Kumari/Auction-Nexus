import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleRight } from "react-icons/fa";
import newsletterGif from './newsletter.gif'; // Import the animated GIF

const JoinUsSection = () => {
  const [containerStyle, setContainerStyle] = useState({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    backgroundColor: '#ff6347', // Tomato background color
    borderRadius: '15px',
    flexDirection: 'column', // Default to column layout for smaller screens
  });

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 768) {
        setContainerStyle({
         ...containerStyle,
          flexDirection: 'column',
        });
      } else {
        setContainerStyle({
         ...containerStyle,
          flexDirection: 'row',
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, );

  const textContainerStyle = {
    flex: 1,
    color: 'white',
    padding: '1rem',
    textAlign: 'center',
  };

  const imageContainerStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '5px',
    padding: '0.5rem',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)',
    maxWidth: '300px',
    margin: '0 auto',
  };

  const inputStyle = {
    width: 'calc(100% - 40px)',
    border: 'none',
    outline: 'none',
    marginLeft: '10px',
  };

  const [arrowIconStyle, setArrowIconStyle] = useState({
    fontSize: '24px',
    color: '#000',
    cursor: 'pointer',
    transform: 'translateX(0)',
    transition: 'transform 0.3s ease', // Transition for icon transform on hover
  });

  const imageStyle = {
    borderRadius: '15px',
    width: '100%',
    height: 'auto',
    maxWidth: '300px',
  };

  return (
    <div className="container my-5">
      <div
        style={{
         ...containerStyle,
          animation: 'fadeInAnimation 1s ease-in-out', // Example fade-in animation
        }}
      >
        <div style={textContainerStyle}>
          <h2>Want to Join Us?</h2>
          <p>
            Become a member and bid with confidence. Our transparent and secure auction process ensures a fair and exciting experience for all participants. Join now and start bidding!
          </p>
          <div style={inputContainerStyle}>
            <input
              type="text"
              placeholder="Enter your email"
              style={inputStyle}
            />
            <FaArrowAltCircleRight
              style={arrowIconStyle}
              onMouseEnter={() => {
                setArrowIconStyle({...arrowIconStyle, transform: 'translateX(5px)' });
              }}
              onMouseLeave={() => {
                setArrowIconStyle({...arrowIconStyle, transform: 'translateX(0)' });
              }}
            />
          </div>
        </div>
        <div style={imageContainerStyle}>
          <img
            src={newsletterGif} // Use the imported GIF
            alt="Join Us"
            style={imageStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;