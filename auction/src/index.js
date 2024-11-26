import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
 import ReactDOM from 'react-dom/client';
//  import { Route } from 'react-router-dom';
//  import Home from './components/Home/Home.js';
// import Login from './components/Loginpage/Login.js'
import App from './App.js';
import reportWebVitals from './reportWebVitals';
//  import Layout from './Layout.js'
//  import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
//  const router=createBrowserRouter(
//    createRoutesFromElements(
//      <Route path='/' element={<Layout/>}>
//        <Route path='' element={<Home/>}/>
//        <Route path='login' element={< Login/>}/>
//      </Route>
//    )
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
