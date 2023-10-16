import { createTheme } from '@mui/material/styles';

export const colors = {
    blue: '#0096FF',
    orange: '#DB5E03',
    darkred: '#5A5A5A',
    lightgray: '#F2F2F2',
    pink: '#FF69B4',
    white: '#FFFFFF',
};
// Add more theme variables and styles here

export const theme = createTheme({
   
    palette: {
        primary: {
        main: colors.blue,
        light: colors.lightgray,
        dark: colors.darkred,
        contrastText: colors.white,
        },
        secondary: {
        main: colors.orange,
        },
    },
    typography: {
        fontFamily: 'Poppins',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
}
);
