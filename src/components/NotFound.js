import '../style/NotFound.scss';
import $ from "jquery";
import { useHistory } from 'react-router-dom';

function NotFound() {
  setTimeout(function(){ 
    $('#modalNotFound').modal('show');
  }, 100);

  const history = useHistory();

  function goToHome() {
    console.log("jalan ngab");
    $('#modalNotFound').modal('hide');
    history.push('/');
  }

  return (
    <div className="container-not-found"> 
      <div className="modal fade" id="modalNotFound" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="background-shadow centered"></div>
            <div className="modal-header">
              <button type="button" className="close" onClick={goToHome}>
                <span aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.666 1.66666L1.66602 17.6667M17.666 17.6667L1.66602 1.66666L17.666 17.6667Z" stroke="white" strokeWidth="2" stroke-linecap="round"/>
                  </svg>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <p className="centered">Error Page Not Found</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default NotFound;
