import { createTheme } from '@mui/material';

import colorPalette from './colorPalette';

//This is customized theme for Cocowah website
const cocowahTheme = createTheme({

  typography: {

    h1: {
      fontFamily: 'Kadwa, sans-serif',
      fontSize: 'clamp(3rem, 5vw, 5rem)',
      fontWeight: '600',
      color: colorPalette.black,
      textAlign: 'left',
      // Add other styles as needed
    },
    h2: {
      fontFamily: 'Kadwa, sans-serif',
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: '600',
      color: colorPalette.black,
      textAlign: 'left',
      // Add other styles as needed
    },
    h3: {
      fontFamily: 'Kadwa, sans-serif',
      fontSize: 'clamp(1rem, 5vw, 1.5rem)',
      fontWeight: '400 !important',
      color: colorPalette.black,
      textAlign: 'left',
      // Add other styles as needed
    },
    h4: {
      fontFamily: 'Kadwa, sans-serif',
      fontSize: 'clamp(0.92rem, 5vw, 1.2rem)',
      fontWeight: '400 !important',
      color: colorPalette.black,
      textAlign: 'left',
      // Add other styles as needed
    },
    h5: {
      fontFamily: 'Hanken Grotesk',
      fontSize: '0.9rem',
      fontWeight: '800 !important',
      color: colorPalette.black,
      textAlign: 'left',
      // Add other styles as needed
    },
    h6: {
      fontFamily: 'Hanken Grotesk',
      fontSize: '0.84rem',
      fontWeight: '600 !important',
       textTransform: 'uppercase',
      color: colorPalette.gray_500,
      textAlign: 'left',
      // Add other styles as needed
    },
    body1: {
      color: "#000",
      fontSize: "1.2rem",
      fontFamily: 'Hanken Grotesk',
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "1.8rem",
      textAlign: "left",
    },
    body2: {
      color: "#000",
      fontSize: "1.2rem",
      fontFamily: 'Hanken Grotesk',
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "1.8rem",
      textAlign: "left",
    }
  },
  components: {
    MuiLinearProgress: {
      styleOverrides: {
        barColorPrimary: () => ({
          backgroundColor: colorPalette.Blue_500,
        }),
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: '1px solid',
          borderRadius:'40px'
        },
      },
    },
    MuiTextField: {
      // styleOverrides: {
      //   root: {
      //     height: '40px'
      //   }
      // },
      variants: [
        {
          props: { variant: 'outlined' },
          style: {
            width: "18rem",
            borderRadius: "0.25rem",
            border: colorPalette.gray_900,
            background: colorPalette.white
          },
        },
      ]
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     root: {
    //       height: '40px'
    //     }
    //   }
    // },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '24rem',
          width: 'auto',
          height: '56px',
          textTransform: 'none',
        },
        contained: {
          backgroundColor: colorPalette.blue_gray_900,
          color: colorPalette.white,
          padding: '0.5rem 2rem',
          alignSelf: 'center',

          '&:hover': {
            backgroundColor: colorPalette.blue_gray_700,
            
             // Define your other Amber variant color
            // Add any additional hover styles here
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          '&.transactions-table': {
            boxShadow: 'unset',
          },
        },
      }
    },
  },
});

export default cocowahTheme;
