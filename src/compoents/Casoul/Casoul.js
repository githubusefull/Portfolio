import React from 'react'
import './Casoul.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import pic2 from './pic2.png';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic6 from './pic6.jpg';
import progr1 from './programming1.png';
import progr2 from './programming2.png';
const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 414, min: 0 },
      items: 1
    }
   
  };
function Casoul() {
  return (
    <div className='slide-title container'>
    <div >
</div>
<Carousel responsive={responsive} className="carousel">

<div class="containerrr text-start" href="/binary">
<img src={pic2} alt="Avatar" class="img-slide" />
<div className='title-card-coursel'>
David Hok<p className='title-card-coursel2'>
 Binary System</p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
 
 </p>
</div>

</div>
<div class="containerrr text-start">
<img src={pic3} alt="Avatar" class="img-slide"  />
<div className='title-card-coursel'>
Lex Daien <p className='title-card-coursel2'>
 Digital Marketing </p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
</p>
</div>

</div>
<div class="containerrr text-start">
<img src={pic4} alt="Avatar" class="img-slide"  />
<div className='title-card-coursel'>
Sara Lown<p className='title-card-coursel2'>
Social Media </p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
</p>
</div>
</div>
<div class="containerrr text-start">
<img src={pic6} alt="Avatar" class="img-slide"  />
<div className='title-card-coursel'>
David Hok<p className='title-card-coursel2'>
Search Engine </p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
 
 </p>
</div>
</div>
<div class="containerrr text-start">
<img src={progr1} alt="Avatar" class="img-slide" />
<div className='title-card-coursel'>
David Hok<p className='title-card-coursel2'>
Content marketing</p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
 
 </p>

</div>

</div>
<div class="containerrr text-start">
<img src={progr2} alt="Avatar" class="img-slide"  />
<div className='title-card-coursel'>
Naim Gav<p className='title-card-coursel2'>
 Developments</p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
 
 </p>
</div>

</div>
<div class="containerrr text-start">
<img src={progr1} alt="Avatar" class="img-slide"  />
<div className='title-card-coursel'>
Naim Gav<p className='title-card-coursel2'>
Graphic Design</p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
 
 </p>
</div>

</div>
<div class="containerrr text-start">
<img src={progr1} alt="Avatar" class="img-slide"  />
<div className='title-card-coursel'>
Naim Gav<p className='title-card-coursel2'>
 Data Analysis</p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
 
 </p>
</div>

</div>
<div class="containerrr text-start">
<img src={progr2} alt="Avatar" class="img-slide" />
<div className='title-card-coursel'>
Naim Gav<p className='title-card-coursel2'>
 Data Analysis</p><p><p className='title-card-coursel3'>CSV Dataset | 50 upvotes</p>
 
 </p>
</div>

</div>

</Carousel>
</div>
  )
}

export default Casoul