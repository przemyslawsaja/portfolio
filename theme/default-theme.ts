type colorPalette = {
    lightest: string,
    light: string,
    main: string,
    darker: string,
    darkest: string,
}

export type theme = {
    colors: {
        primary: colorPalette,
        secondary: colorPalette,
        tertiary: colorPalette,
        quaternary: colorPalette,
        gray: colorPalette,
        action: {
            error: string,
            warning: string,
            success: string,
        }
    },
    zIndex: {
        lowest: string,
        low: string,
        main: string,
        high: string,
        higher: string,
        highest: string
    },
    text: {
        size: {
            small100: string,
            small200: string,
            small300: string,
            medium100: string,
            medium200: string,
            medium300: string,
            medium400: string,
            large100: string,
            large200: string,
            large300: string,
            large400: string,
            large500: string,
            large600: string,
            large700: string,
        },
        lineHeight: {
            tight: string,
            snug: string,
            normal: string,
            relaxed: string,
            loose: string,
        }
        spacing: {
            normal: string,
            wide: string,
            wider: string,
            widest: string,
        }
    }
    blur: {
        glass: string,
    }
    border: {
        radius: {
            rounded: string,
            full: string,
        }
    }
    shadow: {
        BRAND_LIGHT: string;
        SMOOTH_DARK: string;
        SMOOTH_MIDNIGHT: string
    };
    transition: {
        SMOOTH: string;
        DYNAMIC: string;
    };
}

export const defaultTheme: theme = {
    colors: {
        primary: {
            lightest: '#C1F4D0',
            light: '#9AF4B3',
            main: '#7BE799',
            darker: '#60CF7F',
            darkest: '#4DB56A',
        },
        secondary: {
            lightest: '#404B66',
            light: '#232D47',
            main: '#121A2E',
            darker: '#0B1120',
            darkest: '#080D1A',
        },
        tertiary: {
            lightest: '#94d1f5',
            light: '#7BCAF6',
            main: '#61aad3',
            darker: '#518ac2',
            darkest: '#245983'
        },
        quaternary: {
            lightest: '#e090e7',
            light: '#d173d9',
            main: '#CC66D4',
            darker: '#b04eb7',
            darkest: '#a044a8',
        },
        gray: {
            lightest: '#CCC9C9',
            light: '#ABA9A9',
            main: '#898686',
            darker: '#747272',
            darkest: '#5F5D5D',
        },
        action: {
            error: '#ED6A5E',
            warning: '#F5BD4F',
            success: '#61C455',
        }
    },
    text: {
        size: {
            small100: '0.5em',
            small200: '0.75em',
            small300: '0.875em',
            medium100: '1em',
            medium200: '1.125em',
            medium300: '1.25em',
            medium400: '1.5em',
            large100: '1.875em',
            large200: '2.25em',
            large300: '3em',
            large400: '3.75em',
            large500: '4.5em',
            large600: '6em',
            large700: '8em',
        },
        lineHeight: {
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
        },
        spacing: {
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        }
    },
    zIndex: {
        lowest: '-20',
        low: '-10',
        main: '0',
        high: '10',
        higher: '20',
        highest: '30'
    },
    blur: {
        glass: "blur(10px)"
    },
    border: {
        radius: {
            rounded: '20px',
            full: '50%',
        }
    },
    shadow: {
        BRAND_LIGHT: '0px 0px 41px rgba(29, 160, 255, 0.5)',
        SMOOTH_DARK: '0px 10px 30px 0px rgba(0, 0, 0, 0.05)',
        SMOOTH_MIDNIGHT: '0px 10px 30px 0px rgba(0, 0, 0, 0.1)',
    },
    transition: {
        SMOOTH: '0.3s ease-in-out',
        DYNAMIC: '0.1s ease-in-out',
    },
}
