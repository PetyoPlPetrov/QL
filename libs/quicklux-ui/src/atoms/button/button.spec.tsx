import { render } from '@testing-library/react';

import Components from './Button';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Components variant='primary' text='click me'/>);
    expect(baseElement).toBeTruthy();
  });
});
