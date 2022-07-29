import { useEffect, useState } from 'react';
import useCartAnimals from '../../hooks/use-cart-animals/use-cart-animals';
import { AnimalModel } from '../../models/animal.model';
import CartItem from '../cart-item/cart-item';

import styles from './cart-container.module.scss';

/* eslint-disable-next-line */
export interface CartContainerProps {}

export function CartContainer(props: CartContainerProps) {
  const { cart } = useCartAnimals();

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
