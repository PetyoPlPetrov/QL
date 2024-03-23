export interface ThemeProps {
    colors: {
        primary: string;
        secondary: string;
        accent: string;
        text: string;
        success: string;
        warning: string;
        error: string;
    };
    fonts: {
        main: string;
    };
    fontSizes: {
        small: string;
        medium: string;
        large: string;
    };
    spacings: {
        small: string;
        medium: string;
        large: string;
    };
    breakpoints: {
        mobile: string;
        tablet: string;
    };

}

