import React from 'react';
import logo from './logof.png'; // Import the logo image

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#222', color: '#ccc', padding: '40px 0', fontFamily: 'Arial, sans-serif' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Auction Nexus</h3>
                        <p style={{ fontSize: '0.9rem' }}>Where passion meets bidding, and wonders unfold</p>
                    </div>
                    <div className="col-md-4 col-sm-6 mb-4">
                        <form className="newsletter" style={{ position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Email Address"
                                style={{
                                    width: '100%',
                                    backgroundColor: '#fff',
                                    color: '#333',
                                    border: '1px solid #ccc',
                                    padding: '12px 20px',
                                    borderRadius: '50px',
                                    fontSize: '0.9rem'
                                }}
                            />
                            <button
                                className="newsletter_submit_btn"
                                type="submit"
                                style={{
                                    position: 'absolute',
                                    right: '0',
                                    top: '0',
                                    background: '#fff',
                                    border: '0',
                                    fontSize: '0.9rem',
                                    color: '#333',
                                    cursor: 'pointer',
                                    borderRadius: '50px',
                                    padding: '10px 20px'
                                }}
                            >
                                <i className="fa fa-paper-plane"></i>
                            </button>
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-12 text-sm-right mb-4">
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Stay Connected</h3>
                        <div>
                            <a href="https://www.linkedin.com/in/bhanu-prakash-pandey-67727b318/" className="round-btn btn-linkedin" style={socialIconStyle}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/nishu-kumari-009632245/" className="round-btn btn-linkedin" style={socialIconStyle}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jasika-pradhan-61462027a" className="round-btn btn-linkedin" style={socialIconStyle}>
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-6 mb-4">
                        <div className="footer-logo text-center mb-3">
                            <img
                                src={logo}
                                alt="logo"
                                style={{ maxWidth: '50%', height: 'auto' }}
                            />
                        </div>
                        <p style={{ textAlign: 'center', fontSize: '0.9rem' }}>Your one-stop career platform connecting Passion with Possibilities: Explore, Bid, Win!</p>
                    </div>
                    <div className="col-md-2 col-sm-6 mb-4">
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Quick Links</h3>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: '0' }}>
                            <li><a href="/" style={linkStyle}>Home</a></li>
                            <li><a href="/" style={linkStyle}>About us</a></li>
                            <li><a href="/" style={linkStyle}>Auction Nexus</a></li>
                            <li><a href="/" style={linkStyle}>Contact Us</a></li>
                            <li><a href="/" style={linkStyle} target="_blank">Terms &amp; Conditions</a></li>
                            <li><a href="/" style={linkStyle} target="_blank">Privacy Policy</a></li>
                            <li><a href="/" style={linkStyle}>Sitemap</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>OUR SERVICES</h3>
                        <ul className="footer-category" style={{ listStyle: 'none', padding: '0' }}>
                            <li><a href="/" style={linkStyle}>Buy</a></li>
                            <li><a href="/" style={linkStyle}>Conduct Auction</a></li>
                            <li><a href="/" style={linkStyle}>Sell </a></li>
                            <li><a href="/" style={linkStyle}>Rules</a></li>
                            <li><a href="/" style={linkStyle}> Ambassadors</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-4">
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '10px' }}>Auction Nexus</h3>
                        <ul className="footer-links" style={{ listStyle: 'none', padding: '0' }}>
                            <li><a href="/" style={linkStyle}>Where passion meets bidding, and wonders unfold</a></li>
                            <li><a href="/" style={linkStyle}>Buy & Sell via Auction Nexus</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="copyright" style={{ borderTop: '1px solid #111', fontSize: '0.8rem', color: '#ccc', padding: '15px 0', textAlign: 'center', background: '#333' }}>
                    Copyright 2024 | All Rights Reserved by Auction Nexus
                </div>
            </div>
        </footer>
    );
}

const socialIconStyle = {
    display: 'inline-block',
    height: '40px',
    width: '40px',
    backgroundColor: '#fff',
    borderRadius: '50%',
    margin: '0 8px',
    boxShadow: '2px 2px 5px 0px #222',
    border: '1px solid',
    lineHeight: '40px',
    textAlign: 'center'
};

const linkStyle = {
    fontSize: '0.9rem',
    lineHeight: '1.8',
    color: '#ccc',
    textDecoration: 'none'
};

export default Footer;
