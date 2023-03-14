
import './Blog.css';
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {AiOutlineDoubleRight} from 'react-icons/ai';
 function Blog() {
  useEffect(() => {
    AOS.init({duration:2000});
  }, [])
   return (
    <div className='post2' data-aos="fade-up">
   <h3 className='title'>Space Services</h3>
   <p className="text-post1">We provide Digital marketing and Web design and development services!</p>
   <button className='button-post1'  href='/projects' >See More<AiOutlineDoubleRight className="icon-right"/></button>
   <button type='button' className='button-post1'  href='/register' >Get Started<AiOutlineDoubleRight className="icon-right"/></button>

</div>

   )
 }
 
export default Blog;