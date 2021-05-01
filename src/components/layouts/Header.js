import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Navigation from "./Navigation";
import HideOnScroll from "../utils/HideOnScroll";

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
  const { value, setValue } = props;
  const classes = useStyles();
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <Fragment>
      <HideOnScroll {...props}>
        <AppBar
          position="fixed"
          color="transparent"
          classes={{ root: classes.appBar }}
          elevation={10}
          style={{
            backgroundColor: isScrolled ? "#fff" : "transparent",
            boxShadow: isScrolled ? theme.shadows[5] : undefined,
          }}
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
            <Navigation value={value} setValue={setValue} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </Fragment>
  );
};

export default Header;
