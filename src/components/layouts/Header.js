import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import HideOnScroll from "../utils/HideOnScroll";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

// The useStyles hook handles the css-in-js functionality
const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "transparent",
    boxShadow: "none",
    padding: "0 0 0 8em",

    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  logoButton: {
    marginRight: "2em",
    "&:hover": {
      background: "transparent",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  // const theme = useTheme();
  const trigger = useScrollTrigger();

  return (
    <Fragment>
      <HideOnScroll {...props} trigger={trigger}>
        <AppBar
          position="fixed"
          color="transparent"
          classes={{ root: classes.appBar }}
        >
          <Toolbar classes={{ root: classes.toolbar }}>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoButton}
            >
              <img src={logo} alt="Safewash brand logo" />
            </Button>
            <Navigation />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
};

export default Header;
