import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Loginpage/Login';
import Registration from './components/Registration/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admindashboard from './components/Admindashboard/Admindashboard';
import Userdashboard from './components/Userdashboard/dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Logout from './components/Logout/Logout';
import AddProduct from './components/Publishnotice/AddProduct'
import Products from './components/Noticeboard/Products'
import Scard from './components/Scard/Scard'
import AuctionHall from './components/AuctionHall/AuctionHall';
import BidProduct from './components/BidProduct/AddProduct';
import Report from './components/Report/Products'
import Contact from './components/Contact/Contact'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/userdashboard" element={<Userdashboard />} />
          <Route path="/admindashboard" element={<Admindashboard />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/scard" element={<Scard/>} />
          <Route path="/auctionhall" element={<AuctionHall/>} />
          <Route path="/bidproduct" element={<BidProduct/>} />
          <Route path="/report" element={<Report/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
