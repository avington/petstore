import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useCartAnimals from './use-cart-animals';

describe('useCartAnimals', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useCartAnimals());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
