import { Fragment } from "react";
import Header from "./components/layouts/Header";
import muiTheme from "./components/muiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./components/layouts/Home";
// import "./scss/index.css";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <ThemeProvider theme={muiTheme}>
        <Header />
        <Home />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
