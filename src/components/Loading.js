import '../style/Loading.scss';
import { useState, useEffect } from 'react';
import $ from "jquery";

function Loading() {
  const logo = require('../assets/logo-loading.png').default;
  const imgLoad0 = require('../assets/img-load-0.png').default;
  const imgLoad1 = require('../assets/img-load-1.png').default;
  const imgLoad2 = require('../assets/img-load-2.png').default;
  const imgLoad3 = require('../assets/img-load-3.png').default;
  const imgLoad4 = require('../assets/img-load-4.png').default;
  // const imgLoad5 = require('../assets/img-load-home-colored.png').default;
  const imgLoad5 = require('../assets/fullscreen-example.jpg').default;

  const [imgLoading, setImgLoading] = useState(0);

  useEffect(() => {

    setImgLoading(imgLoad0);
    setTimeout(function(){ 
      setImgLoading(imgLoad1); 
      changeImage2();
    }, 500);
  }, []);

  const changeImage2 = () =>{
    setImgLoading(imgLoad2);
    setTimeout(function(){ 
      changeImage3();
    }, 500);
  };
  const changeImage3 = () =>{
    setImgLoading(imgLoad3);
    setTimeout(function(){ 
      changeImage4();
    }, 500);
  };
  const changeImage4 = () =>{
    setImgLoading(imgLoad4);
    setTimeout(function(){ 
      changeImage5();
    }, 500);
  };
  const changeImage5 = () =>{
    setImgLoading(imgLoad5);
    setTimeout(function(){ 
      changeBorderSize();
    }, 500);
  };
  const changeBorderSize = () =>{
    $('.img-border').addClass('go');
    $('.loading-images').addClass('goDown');
    $('.logo').addClass('goUp');
    setTimeout(function(){ 
      hideLoading();
    }, 2700);
  };
  const hideLoading = () =>{
    $('.loading-container').removeClass('d-flex');
    $('.loading-container').addClass('d-none');
    $('body').removeClass('modal-open');
  };

  $('body').addClass('modal-open');
  window.scrollTo(0, 0);
  
  return (
    <div className="loading-container d-flex justify-content-center">
      <div className="img-container">
        <img src={imgLoading} alt="sarimande-loading" className="loading-images"/>
        <img src={logo} alt="sarimande-logo"className="logo"/>
      </div>
      <div className="img-border"></div>
    </div>
  );
}

export default Loading;
