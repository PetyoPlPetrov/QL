import { render } from '@testing-library/react';

import { lightTheme } from '@quicklux/themes';
import { ThemeProvider } from 'styled-components';
import Header from './Header';

describe('Header', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<ThemeProvider theme={lightTheme}>
            <Header />
        </ThemeProvider>);
        expect(baseElement).toBeTruthy();
    });
});
