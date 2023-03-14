import React from 'react'
import './mySlid.css';
import pic1 from './team.jpg';
import pic3 from './picc1.jpg';
import {BsFillCaretLeftFill} from 'react-icons/bs';
import {BsFillCaretRightFill} from 'react-icons/bs';

function mySlid() {
  return (
      <div >
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active c-item">
    <div className='Article1'>
    <div className="Card" >
    <div className="upper-container">
      <div class="image-container">
        <img src={pic1} height="200px" width="200px" alt="..."/>
      </div>

      <h5 className='text'>Build your Next Project With us</h5>
      <h7>Appropriately foster efficient ideas after go forward alignments. Monotonectally.</h7>

    </div>
    
  </div>
  </div>    </div>
    <div class="carousel-item c-item">
    <div className='Article1'>
    <div className="Card" >
    <div className="upper-container">
      <div class="image-container">
        <img src={pic3} height="200px" width="200px" alt="..."/>
      </div>

      <h5 className='text'>Build your Next Project With us</h5>
      <h7>Appropriately foster efficient ideas after go forward alignments. Monotonectally.</h7>

    </div>
    
  </div>
  </div>    </div>
    <div class="carousel-item c-item">
    <div className='Article1'>
    <div className="Card" >
    <div className="upper-container">
      <div class="image-container">
        <img src={pic3} height="200px" width="200px" alt="..."/>
      </div>

      <h5 className='text'>Build your Next Project With us</h5>
      <h7>Appropriately foster efficient ideas after go forward alignments. Monotonectally.</h7>

    </div>
    
  </div>
  </div>    </div>
    <div class="carousel-item c-item">
    <div className='Article1'>
    <div className="Card" >
    <div className="upper-container">
      <div class="image-container">
        <img src={pic3} height="200px" width="200px" alt="..."/>
      </div>

      <h5 className='text'>Build your Next Project With us</h5>
      <h7>Appropriately foster efficient ideas after go forward alignments. Monotonectally.</h7>

    </div>
    
  </div>
  </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
  <BsFillCaretLeftFill className='icon-left'/>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
    <BsFillCaretRightFill className='icon-right'/>
  </button>
</div>





    </div>
  
  )
}

export default mySlid;