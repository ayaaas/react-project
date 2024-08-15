import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../redux/actions/cartActions';

const ShoppingCartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const getTotalCost = () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <img src={item.imgSrc} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Delete</button>
          </div>
        ))}
      </div>
      <div>
        <p>Total Plants: {cartItems.length}</p>
        <p>Total Cost: ${getTotalCost().toFixed(2)}</p>
        <button>Checkout (Coming Soon)</button>
        <button onClick={() => window.location.href = '/products'}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default ShoppingCartPage;
