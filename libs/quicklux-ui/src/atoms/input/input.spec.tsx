import { render } from '@testing-library/react';

import { lightTheme } from '@quicklux/themes';
import { ThemeProvider } from 'styled-components';
import Input from './Input';

describe('Components', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeProvider theme={lightTheme}>
      <Input />
    </ThemeProvider>);
    expect(baseElement).toBeTruthy();
  });
});
