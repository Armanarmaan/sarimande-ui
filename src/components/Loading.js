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
  const imgLoad5 = require('../assets/img-load-home.png').default;

  const [imgLoading, setImgLoading] = useState(0);

  useEffect(() => {

    setImgLoading(imgLoad0);
    setTimeout(function(){ 
      setImgLoading(imgLoad1); 
      changeImage2();
    }, 700);
  }, []);

  const changeImage2 = () =>{
    setImgLoading(imgLoad2);
    setTimeout(function(){ 
      changeImage3();
    }, 700);
  };
  const changeImage3 = () =>{
    setImgLoading(imgLoad3);
    setTimeout(function(){ 
      changeImage4();
    }, 700);
  };
  const changeImage4 = () =>{
    setImgLoading(imgLoad4);
    setTimeout(function(){ 
      changeImage5();
    }, 700);
  };
  const changeImage5 = () =>{
    setImgLoading(imgLoad5);
    setTimeout(function(){ 
      changeBorderSize();
    }, 700);
  };
  const changeBorderSize = () =>{
    $('.img-border').addClass('go');
    $('.loading-images').addClass('goDown');
    setTimeout(function(){ 
      hideLoading();
    }, 2000);
  };
  const hideLoading = () =>{
    $('.loading-container').removeClass('d-flex');
    $('.loading-container').addClass('d-none');
  };

  return (
    <div className="loading-container d-flex justify-content-center">
      <div className="img-container">
        <img src={imgLoading} alt="sarimande-image-loading" className="loading-images"/>
        <img src={logo} className="logo" alt="sarimande-logo"/>
      </div>
      <div className="img-border"></div>
    </div>
  );
}

export default Loading;
