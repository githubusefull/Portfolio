import React from 'react'
import './NavCenter.css';
import logo from  './Logo.png';
import {BsGlobe2} from 'react-icons/bs';
function NavCenter() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg">
  <div class="container-fluid">
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarCenteredExample"
      aria-controls="navbarCenteredExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div
      className="collapse navbar-collapse justify-content-center"
      id="navbarCenteredExample"
    >
         <a class="navbar-brand mt-2 mt-lg-0" href="/">
        <img
          src={logo}
          height="200"
          alt="MDB Logo"
          loading="lazy"
          className='logo'
        />
      </a>
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item dropdown dropdown-mega position-static">
        <a className="nav-link dropdown-toggle" href="/services" role="button" data-bs-toggle="dropdown" aria-expanded="false"
        data-bs-auto-close="outside">
         Services
        </a>
     <div className="megadropdown dropdown-menu shadow">
    <div className="mega-content px-md-4">
  <div className="container-fluid">
   <div className="row  row-megadrop">
    <div className="col-lg-4 col-sm-2 py-2 px-xl-2 px-4">
  <h6>Digital Marketing Services</h6>
  <div className="list-group">
  <a className="nav-link-mega" href="#/gfrty">Accomodations</a>
    <a className="nav-link-mega" href="#/gfrdty">Accomodations</a>
    <a className="nav-link-mega" href="#/gf3rty">Accomodations</a>
    <a className="nav-link-mega" href="#/g2frty">Accomodations</a>


  </div>
    </div>
    <div class="col-lg-4 col-sm-2 py-2 px-xl-2 px-4">
  <h6>Social Media Services</h6>
  <div className="list-group">
  <a className="nav-link-mega" href="#/gfrty">Accomodations</a>
    <a className="nav-link-mega" href="#/gfrdty">Accomodations</a>
    <a className="nav-link-mega" href="#/gf3rty">Accomodations</a>
    <a className="nav-link-mega" href="#/g2frty">Accomodations</a>


  </div>
    </div>
    <div className="col-lg-4 col-sm-2 py-2 px-xl-2 px-4" >
  <h6>Search Engine Services</h6>
  <div className="list-group" >
    <a className="nav-link-mega" href="#/gfrty">Accomodations</a>
    <a className="nav-link-mega" href="#/gfrdty">Accomodations</a>
    <a className="nav-link-mega" href="#/gf3rty">Accomodations</a>
    <a className="nav-link-mega" href="#/g2frty">Accomodations</a>

  </div>
    </div>
    <div className="col-lg-4 col-sm-2 py-2 px-xl-2 px-4" >
  <h6>Content marketing</h6>
  <div className="list-group" >
    <a className="nav-link-mega" href="#/gfrty">Accomodations</a>
    <a className="nav-link-mega" href="#/gfrdty">Accomodations</a>
    <a className="nav-link-mega" href="#/gf3rty">Accomodations</a>
    <a className="nav-link-mega" href="#/g2frty">Accomodations</a>

  </div>
    </div>
    <div className="col-lg-4 col-sm-2 py-2 px-xl-2 px-4" >
  <h6>Developments Services</h6>
  <div className="list-group" >
    <a className="nav-link-mega" href="#/gfrty">Accomodations</a>
    <a className="nav-link-mega" href="#/gfrdty">Accomodations</a>
    <a className="nav-link-mega" href="#/gf3rty">Accomodations</a>
    <a className="nav-link-mega" href="#/g2frty">Accomodations</a>

  </div>
    </div>
    <div className="col-lg-4 col-sm-2 py-2 px-xl-2 px-4" >
  <h6>Graphic Design</h6>
  <div className="list-group" >
    <a className="nav-link-mega" href="#/gfrty">Accomodations</a>
    <a className="nav-link-mega" href="#/gfrdty">Accomodations</a>
    <a className="nav-link-mega" href="#/gf3rty">Accomodations</a>
    <a className="nav-link-mega" href="#/g2frty">Accomodations</a>

  </div>
    </div>
   </div>
  </div>
    </div>
     </div>
       </li>
       
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="/products"
            id="navbarDropdown"
            role="button"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            Products
          </a>
          <ul className="dropdown-menu my-2" aria-labelledby="navbarDropdown">
          <li className='my-2'>

          <a className="nav-link-product" href="#/gfrty">
            Accomodations
          </a>
          </li>
          <li className='my-2'>
          <a className="nav-link-product" href="#/gfrty">Accomodations</a>
          </li>
          <li className='my-2'>
          <a className="nav-link-product" href="#/gfrty">Accomodations</a>
          </li>
          <li className='my-2'>
          <a className="nav-link-product" href="#/gfrty">Accomodations</a>
          </li>
          <li className='my-2'>
          <a className="nav-link-product" href="#/gfrty">Accomodations</a>
          </li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/project">Project</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/blog">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/contact">Contact</a>
        </li>

        <select class="form-select" aria-label="select example">
  <option selected className='nav-link-user' >English</option>
  <option value="1" className='nav-link-user'>Türkçe</option>
  <option value="2" className='nav-link-user' >العربية</option>
  <option value="3" className='nav-link-user'>Español</option>
</select>
<BsGlobe2 className="global"/>
<li className="nav-item" href="/search">
  <i class="fas fa-search"   type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" ></i>
        </li>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div class="modal-dialog"> 
       <div class="modal-content">
       <form class="d-flex input-group w-auto my-2 me-2 m-2">
        <input
          type="search"
          class="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
        <button
          class="btn btn-outline-dark"
          type="button"
          data-mdb-ripple-color="light"
        >
          Search
        </button>
       <button type="button" className="btn-close  btn-modal-search" data-bs-dismiss="modal" aria-label="Close"></button>

      </form>
     
    </div>
   
  </div>
</div>
<div class="dropdown dropdown-user">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="/user"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://st2.depositphotos.com/1502311/12020/v/950/depositphotos_120206860-stock-illustration-profile-picture-vector.jpg"
            class="rounded-circle"
            height="38"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-start  user-menu"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li className='li-user'>
            <a class="nav-link-user" href="/login">Login</a>
          </li>
          <li className='li-user my-2'>
            <a class="nav-link-user" href="/register">Register
            </a>
          </li>
        
        </ul>
      </div>
      <a class="text-reset me-4" href="/shop">
        <span><i class="fas fa-shopping-cart"></i></span>
        <span class="badge rounded-pill badge-notification bg-danger">1</span>

      </a>
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavCenter