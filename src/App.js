import { Fragment } from "react";
import Header from "./components/layouts/Header";
import muiTheme from "./components/muiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./components/layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <ThemeProvider theme={muiTheme}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </ThemeProvider>
      </Fragment>
    </Router>
  );
};

export default App;
