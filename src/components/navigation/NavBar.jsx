import { Link } from 'react-router-dom';
import './NavBar.css'; 

export default function NavBar() {
  return (
    <>
      <div className="navbar"> 
        <button>
          <Link to={'/'}>Home</Link>
        </button>
        <button>
          <Link to={'/products'}>Products</Link>
        </button>
        <button>
          <Link to={'/contact'}>Contact</Link>
        </button>
      </div>
    </>
  );
}
