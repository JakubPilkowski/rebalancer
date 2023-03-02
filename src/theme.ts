import { createTheme } from '@mui/material';
import lightPalette from 'theme/lightPalette';

const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        style: {
          textTransform: 'none',
          display: 'block',
        },
      },
    },
    MuiButton: {
      defaultProps: {},
    },
  },
  palette: { ...lightPalette },
});

export default theme;
