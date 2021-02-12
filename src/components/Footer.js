import '../style/Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      <div>
        <p>Logo</p>
      </div>
      <div>
        <p>SiteMap</p>
        <a>FoodMenu</a>
        <a>Order</a>
        <a>Gallery</a>
      </div>
    </div>

  );
}

export default Footer;
