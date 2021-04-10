import { createMuiTheme } from "@material-ui/core/styles";

// import Cocon from "../assets/fonts/Cocon-Regular.woff2";

// const cocon = {
//   fontFamily: "Cocon",
//   fontStyle: "normal",
//   fontDisplay: "swap",
//   fontWeight: "600",
//   src: `
//    local('Cocon'),
//    local('Cocon-Regular'),
//    url(${Cocon}) format('woff2')
//  `,
//   unicodeRange:
//     "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF UTF-8",
// };

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
      fontWeight: 700,
      margin: 0,
      color: pink,
      lineHeight: 1.5,
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
      zIndex: -2,
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
    planetShape: {
      borderRadius: "50%",
      background: "rgba(255, 255, 255, .8)",
      position: "relative",
    },
  },
  overrides: {
    // MuiCssBaseline: {
    //   "@global": {
    //     "@font-face": [cocon],
    //   },
    // },
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
