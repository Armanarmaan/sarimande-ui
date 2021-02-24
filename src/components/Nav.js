import '../style/Nav.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import $ from "jquery";



const Nav = () => {

  const img_logo = require('../assets/logosm.png').default;
  
  

  return (
    <nav class="navbar" className="navbar">
  <div className="container-fluid">
  <p className="title">#Kitamakanenakhariini</p>
  <img src={img_logo} className="img-logo"></img>
  <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ModalNavbar">
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
            <li className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginNavbar" >Login</li>
          </Link>
          
        </div>
        </div>
      </div>
    </div>

    <div className="modal fade" id="LoginNavbar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
     <div className="modal-dialog">
    <div className="modal-content">
      
      <div className="modal-body">
        <h1 className="titleLogin">Log In to your Account</h1>
      <div className="mb-3">
        <input type="email" className="form-control" id="UserNameinpt" placeholder="E-mail Address"></input>
      </div>

    <div className="mb-3">
      <input type="password" className="form-control" id="Passwordinpt" placeholder="Password"></input>
    </div>
        <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">Sign in</button>
        <button type="button" className="google btn btn-light" data-mdb-ripple-color="dark">Sign in with Google</button>
        <h1 className="titlemsg">Don’t have an account?</h1>

        <li className="btn btn-primary" data-bs-toogle="modal" data-bs-target="#SignupModal">Sign up</li>
        

      </div>

      </div>
    </div>
  </div>

  </div>
</nav>


  );


}


export default Nav;
