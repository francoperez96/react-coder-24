import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButtons = () => {
  return (
    <div>
      <h2>Elige una categoría:</h2>
      <ul>
        <li><Link to="/category/Wisky">Wisky</Link></li>
        <li><Link to="/category/Vodka">Vodka</Link></li>
        <li><Link to="/category/Cerveza">Cerveza</Link></li>
      </ul>
    </div>
  );
}

export default CategoryButtons;
