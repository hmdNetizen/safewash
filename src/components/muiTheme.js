import { createMuiTheme } from "@material-ui/core/styles";

const dark = "#483d3f";
const pink = "#FE96C6";
const green = "#6EB245";
const blue = "#21A4C4";
const brown = "#795A69";

const theme = createMuiTheme({
  palette: {
    common: {
      dark,
      pink,
      blue,
      brown,
    },
    primary: {
      main: pink,
    },
    secondary: {
      main: green,
    },
  },
  typography: {
    fontFamily: ['"Open Sans"', "Roboto", "sans-serif", "Cocon"].join(", "),
    fontSize: 10,
    htmlFontSize: 10,

    h1: {
      fontSize: "3rem",
      fontFamily: '"Cocon", Open Sans',
      fontWeight: 700,
      margin: 0,
      color: pink,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h5: {
      fontSize: "1.2rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
    },
    square: {
      borderRadius: 5,
      border: `1px solid ${blue}`,
      transform: "rotate(106deg)",
      position: "absolute",
      filter: "blur(2px)",
      zIndex: 1,
    },
    squareSm: {
      width: 21,
      height: 21,
    },
    squareBg: {
      width: 51,
      height: 51,
    },
    btn: {
      background: green,
      borderRadius: 10,
      borderBottomLeftRadius: 0,
      color: "#fff",
      textTransform: "none",
      fontFamily: "Gilroy-Bold",
      fontWeight: 500,
      padding: ".75em 2em",
    },
    circle: {
      width: 50,
      height: 50,
      borderRadius: "50%",
      border: `1px solid ${pink}`,
      filter: "blur(2px)",
      position: "absolute",
    },
    outlineCircle: {
      width: 100,
      height: 100,
      borderRadius: "50%",
      position: "absolute",
      top: "-3em",
      left: "50%",
      transform: "translateX(-60%)",
    },
    planetShape: {
      borderRadius: "50%",
      background: "rgba(255, 255, 255, .8)",
      position: "relative",
    },
    wire: {
      maxWidth: "30em",
      position: "absolute",
    },

    trimmedBabyImg: {
      position: "absolute",
      top: "1em",
      zIndex: 1,
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
