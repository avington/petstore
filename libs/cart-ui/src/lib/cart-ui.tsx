import styles from './cart-ui.module.scss';

/* eslint-disable-next-line */
export interface CartUiProps {}

export function CartUi(props: CartUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to CartUi!</h1>
    </div>
  );
}

export default CartUi;
