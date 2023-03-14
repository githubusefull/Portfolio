import './App.css';
import Footer from './compoents/Footer/Footer';
import NavCenter from './compoents/NavBar/NavCenter';
import Contact from './compoents/Contact/Contact';
import MySlid from './compoents/Slider/mySlid';
import Casoul from './compoents/Casoul/Casoul';
import { BrowserRouter,  Route,  Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Blog from './compoents/Blog/Blog';
//import Article1 from './compoents/Articles/Article1';

function App() {
  
  return (
    
      <div className='App'> 
  <div className='main-section'>
 <NavCenter/>
 <Contact/>

   <BrowserRouter>
     <Container>
       <Routes>
        
      <Route path='/blog' element={<Blog />} />
      </Routes>
      </Container>
</BrowserRouter>
    
   
      </div>
         <MySlid />
        <Casoul />
      <Footer />
      </div>
    
  );
}

export default App;
