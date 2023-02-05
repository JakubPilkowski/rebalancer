import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        style: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;
