import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from 'reselect';
import { actionAddItemTocart, actionCalculateShipping } from '../../actions/cart';

const getCartTotal = createSelector(
  (state) => state.cart.items,
  (items) => items.reduce((subtotal, item) => subtotal + item.price, 0)
)

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const total = useSelector(getCartTotal);
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(actionAddItemTocart());
  }

  const calculateShipping = () => {
    dispatch(actionCalculateShipping());
  }

  return (
    <>
      <h1>Carrinho</h1>
      <p>Items: <strong>{cart.items.length}</strong></p>
      <p>Frete: <strong>{cart.shippingValue}</strong></p>
      <p>Total: <strong>{total}</strong></p>


      <button type="button" onClick={addProduct}>Adicionar produto</button>
      <button type="button" onClick={calculateShipping}>Calcular Frete</button>
    </>
  )
}

export default Cart;