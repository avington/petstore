import { render } from '@testing-library/react';

import CartContainer from './cart-container';

describe('CartContainer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartContainer />);
    expect(baseElement).toBeTruthy();
  });
});
