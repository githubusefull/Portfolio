import React from 'react';
import './NavBar.css';
import {TiThMenu} from 'react-icons/ti';
import logo from './portfolio-white.png';
import Modal from '../Modal/Modal';


function NavBar() {
  

  return (
   
   <header className='header' >


    <div className="container-fluid">
        <div className="navb-log"   id="navbarModel">
            <img src={logo} className="nav-logo"  alt="logo"/>
        </div>

        <div className="navb-items" >
            <div className="item">
              <a className='home' href="/">Home</a>
            </div>
            <div className="item">
              <a className='services' href="/about">About</a>
            </div>
            <div className="item">
              <a className='cases' href="/projects">Projects</a>
            </div>
            
            <div className="item-button">
              <a href='/contact' 
              type="button">Contact
             
              </a>
            </div>
           
        </div>
        <div className="mobile-toggler d-lg-none">
        
        <button href="/dddd"   

        className="mobile-toggler" 
        type="button" 
        data-bs-toggle="modal"
        aria-controls="navbModel"
        data-bs-target="#navbModel"
        aria-expanded="false"
        aria-label="Toggle navigation"

        >
           <TiThMenu className='icon-menu' />
        </button>
        </div>
        


<div className="modal fade" id="navbModel" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <Modal />
  </div>

</div>
</header>

  )
}

export default NavBar;