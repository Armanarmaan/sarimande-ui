import '../style/Nav.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';



const Nav = () => {

  const img_logo = require('../assets/logosm.png').default;

  return (
    <nav class="navbar" className="navbar">
  <div className="container-fluid">
  <p className="title">#Kitamakanenakhariini</p>
  <img src={img_logo} className="img-logo"></img>
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalNavbar">
        <i className="fas fa-bars fa-lg"></i>
      </button>
      <div class="modal fade" id="ModalNavbar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

       <div className="modal-dialog">
          <div className="modal-content">
        <div className="modal-body ">
  
          
          <Link to="/shop">
            <li>Food Menu</li>
            </Link>
          <Link to="/about">
            <li>Order</li>
          </Link>
          <Link>
            <li>Gallery</li>
          </Link>
          <Link>
            <li>Login</li>
          </Link>
          
        </div>
        </div>
      </div>
    </div>
  </div>
</nav>

  );
}


export default Nav;
