import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const getCartCount = () => cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">
          Cart ({getCartCount()})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
