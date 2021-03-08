import '../style/Footer.scss';
import { Link } from 'react-router-dom';

const instagram = require('../assets/instagram.png').default;
const facebook = require('../assets/facebook.png').default;
const logosm = require('../assets/logosm.png').default;

function Footer() {
  return (
    <footer className="footer">
      <div className="items">
        <div>
          <div className="sitemap">
            <p>SiteMap</p>
          </div>
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
          <div className="location">
            <p>Location</p>
          </div>
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
              <a>Lebak Bulus</a>
            </li>
            <li>
              <a>Cibubur</a>
            </li>
          </ul>
        </div>

        <div>
          <div className="followus">
            <p>Follow US</p>
          </div>
          <ul className="medsos">
            <li>
              <img src={instagram} className="instagram"></img>
            </li>
            <li>
              <img src={facebook} className="facebook"></img>
            </li>
          </ul>
          <div className="beintheknow">
            <p>Be in the Know</p>
          </div>
          <p>Subscribe to Sarimande Metropolitan newsletter</p>
          <div className="box">
            <input type="email" placeholder="Email" />
            <button className="button">Sign Up Now</button>
          </div>
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
