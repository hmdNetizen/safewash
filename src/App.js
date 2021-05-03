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
import ScrollToView from "./components/utils/ScrollToView";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import OrderAndPayment from "./components/pages/OrderAndPaymentPage";
import ReturnsPage from "./components/pages/ReturnsPage";
import Faq from "./components/pages/Faq";
import Careers from "./components/pages/Careers";
import Policy from "./components/pages/Policy";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import NotFound from "./components/pages/NotFound";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <Router>
      <Fragment>
        <CssBaseline />
        <ThemeProvider theme={muiTheme}>
          <ScrollToView>
            <Header value={value} setValue={setValue} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => <Home {...props} setValue={setValue} />}
              />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/order" component={OrderAndPayment} />
              <Route exact path="/returns" component={ReturnsPage} />
              <Route exact path="/faq" component={Faq} />
              <Route exact path="/careers" component={Careers} />
              <Route exact path="/policy" component={Policy} />
              <Route exact path="/terms" component={TermsAndConditions} />
              <Route exact path="/distributors" component={FindDistributors} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer value={value} setValue={setValue} />
          </ScrollToView>
        </ThemeProvider>
      </Fragment>
    </Router>
  );
};

export default App;
