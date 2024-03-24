import { ThemeProps } from '../../../theme';
/* eslint-disable-next-line */


export const lightTheme: ThemeProps = {
  colors: {
    primary: '#A5C34A', // Earthy green
    secondary: '#F2F2F2', // Light gray
    accent: '#FFD700', // Golden yellow
    text: '#333333', // Dark gray
    success: '#4CAF50', // Green (success)
    warning: '#ffc107', // Yellow (warning)
    error: '#f44336', // Red (error)
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

export const darkTheme: ThemeProps = {
  colors: {
    primary: '#A5C34A',
    secondary: '#F2F2F2',
    accent: '#FFD700',
    text: '#333333',
    success: '#4CAF50',
    warning: '#ffc107',
    error: '#f44336',
  },
  fonts: {
    main: "'Open Sans', sans-serif",
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
    mobile: '768px',
    tablet: '1024px',
  },
};

export default { lightTheme, darkTheme };
