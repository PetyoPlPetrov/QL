import { render } from '@testing-library/react';

import { lightTheme } from '@quicklux/themes';
import { ThemeProvider } from 'styled-components';
import Button from './Button';

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeProvider theme={lightTheme}>
      <Button variant='primary' text='click me' />
    </ThemeProvider>);
    expect(baseElement).toBeTruthy();
  });
});
