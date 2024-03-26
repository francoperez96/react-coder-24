import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from './components/home/HomeComponent';
import ProductsComponent from './components/products/ProductsComponent';
import ContactComponent from './components/contact/ContactComponent';
import NavBar from './components/navigation/NavBar';
import SingleProduct from './components/product/SingleProduct';
import CategoryComponent from './components/categories/CategoryComponent';
import SingleCategory from './components/category/SingleCategory';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomeComponent />} />
        <Route exact path="/products" element={<ProductsComponent />} />
        <Route exact path="/product/:prodId" element={<SingleProduct />} />
        <Route exact path="/categories" element={<CategoryComponent />} />
        <Route exact path="/categories/:catName" element={<SingleCategory />} />
        <Route exact path="/contact" element={<ContactComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
