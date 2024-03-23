import { render } from '@testing-library/react';

import Components from './Input';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components />);
    expect(baseElement).toBeTruthy();
  });
});
