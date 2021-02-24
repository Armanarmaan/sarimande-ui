import '../style/NotFound.scss';
import $ from "jquery";

function NotFound() {
  setTimeout(function(){ 
    $('#modalNotFound').modal('show');
  }, 100);
  return (
    <div className="container-not-found"> 
      <div className="modal fade" id="modalNotFound" tabindex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="background-shadow centered"></div>
            <div className="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
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
