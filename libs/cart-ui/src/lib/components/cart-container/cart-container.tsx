import { useState } from 'react';

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
          <div className={styles['cart-item']}>
            <div className={styles['name']}>{item.name}</div>
            <div className={styles['amount']}>{item.amount}</div>
            <div className={styles['total']}>{item.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartContainer;
