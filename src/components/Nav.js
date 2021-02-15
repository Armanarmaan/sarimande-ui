import '../style/Nav.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Nav = () => {

  const img_logo = require('../assets/logosm.png').default;

  const [navLinkOpen, navLinkToggle] = useState(false);

    const handlenavLinksToogle = () =>{
      navLinkToggle(!navLinkOpen);
    };

    const renderClasses = () => {
      let classes = "links";

      if (navLinkOpen) {
        classes += " active"
      }
      return classes;
    }
  return (
    <nav className="navbar">
      <div>
      <p className="title">#Kitamakanenakhariini</p>
      </div>
      
      <ul className={renderClasses()}>
        <Link to="/shop">
          <li>Food Menu</li>
        </Link>
        <Link>
        <li>Order</li>
        </Link>
        <Link>
        <li>Gallery</li>
        </Link>
        <Link>
          <li>Login</li>
        </Link>
      </ul>
      <div onClick={handlenavLinksToogle} className="hamburger-btn" >
        <i className="fas fa-bars fa-lg"></i>
      </div>
    </nav>

  );
}

export default Nav;
