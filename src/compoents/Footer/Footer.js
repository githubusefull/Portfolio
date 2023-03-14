import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';
import Logo from './Logo.png';

    function Footer() {
  return (
    <MDBFooter  className='footer text-center text-lg-start text-muted'>   
    <section >
         <MDBContainer className='text-center text-md-start mt-4 '>
           <MDBRow className='mt-3'>
           <img src={Logo}  className="footer-logo" alt='' />
    
             <MDBCol md='3' lg='4' xl='2' className='mx-auto mb-4'>
               <h6 className='text-uppercase fw-bold mb-4 title-footer'>
 
                 <MDBIcon color='secondary' className='me-0' />
                 SPACESEVICES
               </h6>
               <p>
               We provide Digital marketing and Web design and development services!
               </p>
             </MDBCol>
             
             <MDBCol md='3' lg='4' xl='2' className='mx-auto mb-4'>
               <h6 className='text-uppercase fw-bold mb-4 title-footer'>
 
                 <MDBIcon color='secondary' className='me-0' />
                 LINKS
               </h6>
               
                 <a href='/' className='text-reset'>
                   - Home
                 </a>
               
               
                 <a href='/services' className='text-reset'>
                   - Services
                 </a>
               
              
                 <a href='/project' className='text-reset'>
                  - Project
                 </a>
              
               
                 <a href='/blog' className='text-reset'>
                   - Blog
                 </a>
               
             </MDBCol>
            
             <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
               <h6 className='text-uppercase fw-bold mb-4 title-footer'>LINKS</h6>
              
                 <a href='/' className='text-reset'>
                   - Digital Marketing 
                 </a>
               
              
                 <a href='/' className='text-reset'>
                 - Social Media 

                 </a>
              
              
                 <a href='#!' className='text-reset'>
                 - Search Engine 

                 </a>
              
               
                 <a href='#!' className='text-reset'>
                 - Content Marketing 

                 </a>
               
              
             </MDBCol>
             <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
               <h6 className='text-uppercase fw-bold mb-4 title-footer'>Contact</h6>
               <p>
                 <MDBIcon icon='home' className='me-1 icon-home' />
                 4th Floor, Emirates Tower,  
                 F-7 Markaz Islamabad, 
                 Islamabad Capital Territory 44210, Pakistan
               </p>
              <p>
                 <MDBIcon  icon='envelope' className='me-1 icon-footer' />
                support@<p>myspaceservices.com.pk</p></p>
                 
               <p>
                 <MDBIcon  icon='phone' className='me-1 icon-footer' /> 
                 0304 940 0686
               </p>
              
             </MDBCol>
           </MDBRow>
         </MDBContainer>
       </section>
      
       <div className='text-center p-3' style={{ backgroundColor: "#102447"}}>
         <p style={{ color: "white", marginTop:"7px"}}>© 2023 Copyright : Space Services </p>
         <a className='text-reset fw-bold' href='.'>
         </a>
       </div>
        </MDBFooter>
    
  );
}

export default Footer;
