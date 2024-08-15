import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductListingPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const products = [
    { id: 1, name: 'Plant 1', price: 10, imgSrc: 'path-to-img1.jpg', category: 'Category 1' },
    { id: 2, name: 'Plant 2', price: 15, imgSrc: 'path-to-img2.jpg', category: 'Category 1' },
    // Add more products here
  ];

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>Product Listing</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.imgSrc} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={cartItems.some((item) => item.id === product.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListingPage;
