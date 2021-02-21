import '../style/Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer container">
      <div>
        <p>Logo</p>
      </div>
      <div className="items">
        <div>
          <p>SiteMap</p>
          <ul className="itemlist">
            <li>
              <a>FoodMenu</a>
            </li>
            <li>
              <a>Order</a>
            </li>
            <li>
              <a>Gallery</a>
            </li>
          </ul>

        </div>
        <div>
          <p>Location</p>
          <ul className="itemlist">
            <li>
              <a>Menteng</a>
            </li>
            <li>
              <a>Sabang</a>
            </li>
            <li>
              <a>Pancoran</a>
            </li>
            <li>
              <a>lebak Bulus</a>
            </li>
            <li>
              <a>Cibubur</a>
            </li>
          </ul>
        </div>

        <div>
          <p>Follow US</p>
          <ul className="medsos">
            <li>
              <a>ig</a>
            </li>
            <li>
              <a>fb</a>
            </li>
          </ul>
          <p>Be in the Know</p>
          <p>Subscribe to Sarimande Metropolitan newsletter</p>
          <input type="email" placeholder="Email" />
          <button type="button">Sign Up Now</button>
        </div>
      </div>
      <div className="bot">
        <div className="terms">
          <a>Term of Use</a>
          <a>Privacy Statement</a>
        </div>

        <div className="copyright">
          <a>@2021.Clay Web Development.</a>
        </div>

      </div>
    </footer>

  );
}

export default Footer;
