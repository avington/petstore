import { useState, useCallback, useEffect } from 'react';
import { AnimalModel } from '../../models/animal.model';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseCartAnimals {
  cart: AnimalModel[];
}

export function useCartAnimals(): UseCartAnimals {
  const [cart, setCart] = useState<AnimalModel[]>([]);

  useEffect(() => {
    fetch('/assets/cart.json')
      .then((response) => response.json())
      .then((data) => {
        const items = data.cart as AnimalModel[];
        setCart(items);
      });
  }, []);

  return { cart };
}

export default useCartAnimals;
