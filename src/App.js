import { Fragment, useState } from "react";
import Header from "./components/layouts/Header";
import muiTheme from "./components/muiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./components/layouts/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/layouts/Footer";
import FindDistributors from "./components/pages/FindDistributors";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <ThemeProvider theme={muiTheme}>
          <Header value={value} setValue={setValue} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/find_distributor"
              render={() => <FindDistributors setValue={setValue} />}
            />
          </Switch>
          <Footer value={value} setValue={setValue} />
        </ThemeProvider>
      </Fragment>
    </Router>
  );
};

export default App;
