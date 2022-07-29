import { render } from '@testing-library/react';

import CartUi from './cart-ui';

describe('CartUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CartUi />);
    expect(baseElement).toBeTruthy();
  });
});
