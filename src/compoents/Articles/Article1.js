import React from 'react';
import './Article1.css';
import img from './team3.jpg';
function Article1() {
  return (
    <div className='Article1'>
    <div className="Card" >
    <div className="upper-container">
      <div class="image-container">
        <img src={img} height="200px" width="200px" alt="..."/>
      </div>

      <h5 className='text'>Build your Next Project With us</h5>
      <h7>Appropriately foster efficient ideas aftergo<br></br> forward alignments. Monotonectally.</h7>

    </div>
    
  </div>
  </div>
  )
}

export default Article1