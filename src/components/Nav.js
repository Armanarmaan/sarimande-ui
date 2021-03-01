import '../style/Nav.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  Modal,ModalDialog
} from 'react-bootstrap'
import { MDBAnimation } from "mdbreact";



const Nav = () => {
  const [show, setShow] = useState(false);
  const [showLgn, setShowLgn] = useState(false);
  const [showSgnp, setShowSgnp] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseLgn = () => setShowLgn(false);
  const handleShowLgn = () => setShowLgn(true);

  const handleCloseSgnp = () => setShowSgnp(false);
  const handleShowSgnp = () => setShowSgnp(true);



  const img_logo = require('../assets/logosm.png').default;
  

  return (
    <nav className="navbar" className="navbar">
      <div className="container-fluid">
        <p className="title">#Kitamakanenakhariini</p>
        <img src={img_logo} className="img-logo"></img>
        <button onClick={handleShow} type="button" className="btn btn-primary">
          <i className="fas fa-bars fa-lg"></i>
        </button>

        {/* {hide ? null : 
        <div className="modal fade" id="ModalNavbar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body ">

                <Link to="/shop">
                  <li id="FMenu" onClick={() => setHide(!hide)}>Food Menu</li>
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
        } */}
          <Modal id="ModalNavbar"show={show} onHide={handleClose}>
          
          <Modal.Body >
              <Link to="/shop">
                  <li  id="FMenu" onClick={handleClose}>Food Menu</li>
              </Link>
              <Link>
                <li className="btn btn-primary" data-bs-toggle="modal" onClick={handleClose, handleShowLgn}>Login</li>
              </Link>
              <Link to="/about">
                <li id="about" onClick={handleClose} >Gallery</li>
              </Link>
          </Modal.Body>
        </Modal>

        {/*<div className="modal fade" id="LoginNavbar" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
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

                <li className="btn btn-primary" id="SignUpbtn" >Sign up</li>


              </div>

            </div>
          </div>
      </div>*/}
      
      <Modal id="LoginNavbar" show={showLgn} onHide={handleCloseLgn}>
        
        <Modal.Body >
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

                <li  className="signup" id="SignUpbtn" onClick={handleShowSgnp}>Sign up</li>
                <li  className="login" onClick={handleCloseLgn}>Login</li>
        </Modal.Body>
      </Modal>



      <Modal id="RegisterNavbar" show={showSgnp} onHide={handleCloseSgnp}>
        
        <Modal.Body>
        <h1 className="titleLogin">Sign Up to your Account</h1>
                <div className="mb-3 email">
                  <input type="email" className="form-control" id="UserNameinpt" placeholder="E-mail Address"></input>
                </div>

                <div className="mb-3">
                  <input type="password" className="form-control" id="Passwordinpt" placeholder="Password"></input>
                </div>

                <div className="mb-3">
                  <input type="password" className="form-control" id="Passwordinpt" placeholder="Password"></input>
                </div>

                <button type="button" className="btn btn-light" data-mdb-ripple-color="dark">Sign Up</button>

        </Modal.Body>
        
      </Modal>



      </div>
    </nav>


  );


}


export default Nav;
