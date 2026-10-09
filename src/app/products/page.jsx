import React from 'react';
import ProductCard from '../components/ProductCard';

const getProducts = async() => {
const res = await fetch ('http://localhost:5000/products', {cache:'no-store'})
return res.json();
}

const Productspage = async () => {

    const products = await getProducts();

 return (
  <div>
    <h2>Product : {products.length}</h2>

    <div className="grid grid-cols-3 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);
};
export default Productspage;