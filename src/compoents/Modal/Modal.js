import React from 'react'
import './Modal.css';
import { HiHome } from 'react-icons/hi';
import {TiMessage} from 'react-icons/ti';
import {BsFillFileEarmarkTextFill} from 'react-icons/bs';
import {BsFillInfoSquareFill} from 'react-icons/bs';
import {FaFacebookSquare} from 'react-icons/fa';
import {BsGithub} from 'react-icons/bs';
import {ImLinkedin} from 'react-icons/im';
import {FaFreeCodeCamp} from 'react-icons/fa';
import {AiFillCloseSquare} from 'react-icons/ai';
import logo from './portfolio-white.png';


function Modal() {
  return (
    <div>
         <div className="modal-dialog">
    <div className="modal-content" >
      <div className="modal-header">
      <img src={logo} className="nav-logo-modal" alt="logo"/>
        <a href="/fde" data-bs-dismiss="modal" aria-label="Close">
          <AiFillCloseSquare className='icon-close' />
        </a>
      </div>
      <div className="modal-body">
        <div className="modal-line">
          <HiHome className='homee'/>
          <a href="/">Home</a>
        </div>
         <div className="modal-line">
        <BsFillInfoSquareFill className='aboutt'/>
          <a href="/about">About</a>
        </div>
        <div className="modal-line">
          <BsFillFileEarmarkTextFill className='case'/>
          <a href="/projects">Projects</a>
        </div>
       
        <a  href="/contact" type="button" className="navb-button">
        <TiMessage className='message'/>

          Contact</a>

      </div>
      <div className="mobile-modal-footer">
       <a target="blank" href="/fdfdf">
        <FaFacebookSquare  />
       </a>
       <a target="blank" href="/fdgith">
        <BsGithub />
       </a>
       <a target="blank" href="linkdin">
        <ImLinkedin />
       </a>
       <a target="blank" href="/freecode">

        <FaFreeCodeCamp />
       </a>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Modal