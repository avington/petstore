import { useState } from 'react';
import CartItem from '../cart-item/cart-item';

import styles from './cart-container.module.scss';

/* eslint-disable-next-line */
export interface CartContainerProps {}

export function CartContainer(props: CartContainerProps) {
  const [cart, setCart] = useState([
    { id: '1', name: 'Zebra', amount: 100, total: 1 },
    { id: '2', name: 'Moose', amount: 50, total: 1 },
    { id: '3', name: 'Dog', amount: 25, total: 5 },
  ]);

  return (
    <div className={styles['container']}>
      <h2>Shopping Cart</h2>
      <div className={styles['cart-list']}>
        {cart.map((item) => (
          <CartItem key={item.id} animal={item}></CartItem>
        ))}
      </div>
    </div>
  );
}

export default CartContainer;
