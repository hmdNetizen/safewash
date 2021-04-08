import { createMuiTheme } from "@material-ui/core/styles";

// The customization of my typography and colors is done in this file

const dark = "#483d3f";
const pink = "#FE96C6";
const green = "#6EB245";
const blue = "#21A4C4";

const theme = createMuiTheme({
  palette: {
    common: {
      dark,
      pink,
      blue,
    },
    primary: {
      main: pink,
    },
    secondary: {
      main: green,
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', "sans-serif", "Cocon"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,

    h1: {
      fontSize: "3rem",
      fontFamily: '"Cocon", Open Sans',
      margin: 0,
    },
    body1: {
      fontSize: "1rem",
    },
    square: {
      borderRadius: 5,
      border: `1px solid ${blue}`,
      transform: "rotate(106deg)",
      position: "absolute",
      filter: "blur(2px)",
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
    MuiButton: {
      root: {
        borderRadius: "none",
      },
    },
  },
});

export default theme;
