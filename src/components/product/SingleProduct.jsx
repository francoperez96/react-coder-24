import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getProductById, getProductByCategory, getProductByDescription, getProductByImage, getProductByPrice, getProductByTitle } from '../../asyncMock';
import './SingleProduct.css';

export default function SingleProduct() {
  const { prodId } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchedProduct = getProductById(parseInt(prodId));
    setProduct(fetchedProduct);
    updatePageTitle(fetchedProduct);
  }, [prodId]);

  const updatePageTitle = (product) => {
    document.title = `${product.category} ${product.description}`;
  };

  return (
    <>
      <div className='container'>
        <h1>{product.category} {product.description}</h1>
        <h3>Marca: {product.title}</h3>
        <img src={product.image} alt={product.title} className="product-single" />
        <p>Tipo: {product.description}</p>
        <p>Categoria: {product.category}</p>
        <p>Precio $ {product.price}</p>
      </div>
    </>
  );
}
