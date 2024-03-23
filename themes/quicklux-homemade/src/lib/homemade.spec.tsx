import { render } from '@testing-library/react';

import Homemade from './homemade';

describe('Homemade', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Homemade />);
    expect(baseElement).toBeTruthy();
  });
});
