import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../asyncMock';
import '../category/SingleCategory.css';

const SingleCategory = () => {
  const { catName } = useParams();
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductsByCategory(catName);
        setProducts(data);
        setCategoryName(catName); // Setear el nombre de la categoría para usar como título
      } catch (error) {
        console.error('Error fetching products by category:', error);
      }
    };

    fetchProducts();
  }, [catName]);

  return (
    <div>
      {categoryName && <h1>{categoryName}</h1>}
      <div className='container product-section'>
        {products.map((product) => (
          <article key={product.id} className="product-item">
            <h4 className='single-category'>{product.title}</h4>
            <img src={product.image} alt={product.title} />
            <p>Precio: ${product.price}</p>
            <p>Descripción: {product.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export default SingleCategory;
