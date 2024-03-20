import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import './styles.css';

export default function ProductsComponent() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);

  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div>
        <h1>Products Component</h1>
        <section className="product-section"> 
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
