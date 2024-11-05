
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <h1 className="navbar-logo" onClick={() => navigate('/')}>
        HappyWags
      </h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/pets">Explore Pets</Link>
        </li>
        <li>
          <Link to="/auth">Sign Up / Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
