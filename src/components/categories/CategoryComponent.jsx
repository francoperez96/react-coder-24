import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import './CategoryComponent.css';
import './CategoryButtons.css';

export default function CategoryComponent() {
  const { catName } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProductsByCategory() {
      try {
        let data;
        if (catName) {
          data = await getProductsByCategory(catName);
        } else {
          data = await getProducts();
        }
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    }

    fetchProductsByCategory();
  }, [catName]);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
    <div>
      <div className="category-buttons">
        <Link to="/categories">Todas</Link>
        <Link to="/categories/Wisky">Wisky</Link>
        <Link to="/categories/Vodka">Vodka</Link>
        <Link to="/categories/Cerveza">Cerveza</Link>
      </div>
      <section className="container product-section">
        {products.map((product) => (
          <article
            key={product.id}
            className="product-item"
            onClick={() => handleClick(product.id)}
          >
            <h4>{product.title}</h4>
            <img src={product.image} alt={product.title} />
            <p>Precio $ {product.price}</p>
            <button>Ver detalles</button>
          </article>
        ))}
      </section>
    </div>
    </>
  );
}
