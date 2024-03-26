import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './NavBar.css';

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true); 
  };

  const handleMouseLeave = () => {
    setShowDropdown(false); 
  };

  return (
    <div className="navbar">
      <button>
        <Link to="/">Inicio</Link>
      </button>
      <button>
        <Link to="/products">Productos</Link>
      </button>
      <Dropdown
        show={showDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Dropdown.Toggle variant="secondary" id="dropdown-categories">
          Categorías
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="/categories">Todas</Dropdown.Item>
          <Dropdown.Item href="/categories/Wisky">Wisky</Dropdown.Item>
          <Dropdown.Item href="/categories/Vodka">Vodka</Dropdown.Item>
          <Dropdown.Item href="/categories/Cerveza">Cerveza</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <button>
        <Link to="/contact">Contacto</Link>
      </button>
    </div>
  );
}

