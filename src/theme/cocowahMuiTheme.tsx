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
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colorPalette.gray_050,
          padding: '40px 24px',
          '&.drawer280': {
            width: '17.5rem !important', // Equivalent to 280px when base font size is 16px
          },
          '&.drawer40': {
            width: '26.25rem !important', // Equivalent to 420px when base font size is 16px
          },
        },
        root: {
          '&.drawer280': {
            width: '17.5rem', // Equivalent to 280px when base font size is 16px
          },
          '&.drawer40': {
            width: '26.25rem', // Equivalent to 420px when base font size is 16px
          },
        },
      },
    },
    
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontFamily: 'Kadwa, sans-serif',
          fontSize: '1.5rem',
          color: colorPalette.black,
          display: '-webkit-box !important',
        },
        primary: {
          fontFamily: 'Kadwa, sans-serif',
          fontSize: '1.5rem',
          color: colorPalette.black,
          display: '-webkit-box !important',
        },

        secondary: {
          fontFamily: 'Kadwa, sans-serif',
          fontSize: '1rem',
          color: colorPalette.black,
          display: '-webkit-box !important',
        },
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
    MuiAccordionSummary: { styleOverrides: { root: { alignItems: 'center', boxShadow: 'none' }, }, },
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
    MuiChip: {
      styleOverrides: {
        root: {
          height: '1.5rem',
          padding: '0',
          borderRadius: '0.2rem',
          border: '0',
          backgroundColor: 'transparent',
          '&.merchant-section': {
            borderColor: colorPalette.Amber_500,
          },
          '&.merchant-shelf': {
            borderColor: colorPalette.Amber_500,
          },
          '&.merchant-box': {
            borderColor: colorPalette.Amber_500,
          },
          '&.income-section': {
            borderColor: colorPalette.Blue_500,
          },
          '&.income-shelf': {
            borderColor: colorPalette.Blue_500,
          },
          '&.income-box': {
            borderColor: colorPalette.Blue_500,
          },
          '&.expense-section': {
            borderColor: colorPalette.Orange_500,
          },
          '&.expense-shelf': {
            borderColor: colorPalette.Orange_500,
          },
          '&.expense-box': {
            borderColor: colorPalette.Orange_500,
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          '&.active.column-tree-list': {
            background: '#ededed',
            width: '16em !important',
          },
          '&.column-tree-list': {
            width: '16em !important',
          },
          '&.nav-item': {
            opacity: 0.4,
            transition: 'opacity 0.3s',
            '&:hover': {
              opacity: 0.8,
            },
          },
          '&.nav-item.active': {
            opacity: 1,
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
