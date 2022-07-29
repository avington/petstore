import { AnimalModel } from '../../models/animal.model';
import styles from './cart-item.module.scss';

/* eslint-disable-next-line */
export interface CartItemProps {
  animal: AnimalModel;
}

export function CartItem({ animal }: CartItemProps) {
  return (
    <div className={styles['cart-item']}>
      <div className={styles['name']}>{animal.name}</div>
      <div className={styles['amount']}>{animal.amount}</div>
      <div className={styles['total']}>{animal.total}</div>
    </div>
  );
}

export default CartItem;
