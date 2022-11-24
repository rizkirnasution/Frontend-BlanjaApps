import React from 'react'
import './page.css'
import {  Link } from "react-router-dom";
function Page404() {
  return (
    <div>
       <h1>Tak De Page 🙂</h1>  
        <p className="zoom-area"><b>Belanja</b> Cuba Try Lain Waktu Je. Thank You.</p>  
        <section className="error-container">  
          <span><span>4</span></span>  
          <span>0</span>  
          <span><span>4</span></span>  
        </section>  
        <div className="link-container">
          <Link to="/home" className="more-link">
            Visit the home page
            </Link>   
        </div>
    </div>


  )
}

export default Page404