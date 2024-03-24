/* eslint-disable-next-line */
import { ThemeProps } from '../../../theme';

export const lightTheme: ThemeProps = {
  colors: {
    primary: '#9d7841', // Warm beige (evokes comfort, homemade feel)
    secondary: '#F2F2F2', // Light gray (remains for backgrounds)
    accent: '#ba873b', // Terracotta (warm accent, evokes natural ingredients)
    text: '#333333', // Dark gray (main text)
    success: '#7CB342', // Green (success, with a more muted tone)
    warning: '#ffc107', // Yellow (warning, remains for consistency)
    error: '#f44336', // Red (error, remains for consistency)
  },
  fonts: {
    main: "'Open Sans', sans-serif", // Clean and modern font
  },
  fontSizes: {
    small: '14px',
    medium: '16px',
    large: '18px',
  },
  spacings: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  breakpoints: {
    mobile: '768px', // Adjust for your mobile screen size
    tablet: '1024px', // Adjust for your tablet screen size
  },
};
