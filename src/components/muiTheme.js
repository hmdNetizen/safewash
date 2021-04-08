import { createMuiTheme } from "@material-ui/core/styles";

// The customization of my typography and colors is done in this file

const dark = "#483d3f";
const pink = "#FE96C6";
const green = "#6EB245";

const theme = createMuiTheme({
  palette: {
    common: {
      dark: dark,
      pink: pink,
    },
    primary: {
      main: pink,
    },
    secondary: {
      main: green,
    },
  },
  typography: {
    fontFamily: "Open Sans, sans-serif",
    fontSize: 10,
    htmlFontSize: 10,
    h1: {
      fontSize: "3rem",
      margin: 0,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  overrides: {
    MuiListItemText: {
      primary: {
        fontSize: "1.2rem",
      },
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: 0,
        paddingRight: 0,
      },
    },
  },
});

export default theme;
