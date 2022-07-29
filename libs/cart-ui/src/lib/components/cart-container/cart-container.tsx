import styles from './cart-container.module.scss';

/* eslint-disable-next-line */
export interface CartContainerProps {}

export function CartContainer(props: CartContainerProps) {
  return (
    <div className={styles['container']}>
      <h2>Shopping Cart</h2>
      <div className={styles['cart-list']}>
        <div className={styles['cart-item']}>
          <div className={styles['name']}>Zebra</div>
          <div className={styles['amount']}>100</div>
          <div className={styles['total']}>1</div>
        </div>
        <div className={styles['cart-item']}>
          <div className={styles['name']}>Moose</div>
          <div className={styles['amount']}>50</div>
          <div className={styles['total']}>1</div>
        </div>
        <div className={styles['cart-item']}>
          <div className={styles['name']}>Doc</div>
          <div className={styles['amount']}>25</div>
          <div className={styles['total']}>5</div>
        </div>
      </div>
    </div>
  );
}

export default CartContainer;
