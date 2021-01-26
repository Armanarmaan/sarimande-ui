import '../style/Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/">
      <p className="title">This is Navbar</p>
      </Link>
      <ul className="links">
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
      </ul>
    </nav>

  );
}

export default Nav;
