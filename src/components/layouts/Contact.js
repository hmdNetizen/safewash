import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import pinkWire from "../../assets/Vector 16.png";
import greenWire from "../../assets/Vector-14.png";
import safewashLady from "../../assets/safewash-lady-3.png";
import safewashGallon from "../../assets/bq-safewash-only-1.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "10em 7em 5em",
    position: "relative",
    overflow: "hidden",
    background: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(137.03deg, rgba(255, 255, 255, 0.95) 47.28%, rgba(254, 150, 198, 0.95) 152.37%), url(${safewashGallon})`,
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",

    [theme.breakpoints.only("md")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
      paddingTop: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },

  primaryHeading: {
    color: theme.palette.common.brown,

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  descriptionTextWrapper: {
    marginTop: "1em",
    marginBottom: "2em",
  },
  descriptionText: {
    color: theme.palette.common.brown,
  },

  btn: {
    ...theme.typography.btn,
    fontFamily: "Gilroy-Thin",
    fontWeight: "bold",
    fontSize: ".9rem",
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },
  },
  imagesWrapper: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "5em",
      marginBottom: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      position: "relative",
      marginTop: "5em",
      marginBottom: "22em",
    },
  },
  greenWire: {
    maxWidth: "30.5em",
    position: "absolute",
    left: "0.5em",
    top: "-1em",
    transform: "rotate(-20deg)",

    [theme.breakpoints.down("md")]: {
      maxWidth: "20.5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "25.5em",
      left: "50%",
      transform: "translateX(-50%) rotate(-20deg)",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "20.5em",
    },
  },
  pinkWire: {
    maxWidth: "30.5em",
    position: "absolute",
    left: 0,

    [theme.breakpoints.down("md")]: {
      maxWidth: "20.5em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "25.5em",
      left: "50%",
      transform: "translateX(-50%)",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "20.5em",
    },
  },
  safewashLady: {
    maxWidth: "30em",
    position: "relative",
    top: "0.5em",
    left: "1em",

    [theme.breakpoints.down("md")]: {
      maxWidth: "20em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
      left: "50%",
      transform: "translateX(-50%)",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "20em",
      position: "absolute",
    },
  },
}));

const Contact = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMDX = useMediaQuery("(max-width: 1096px)");

  return (
    <Grid
      container
      direction={matchesSM ? "column" : "row"}
      className={classes.parentGrid}
      alignItems="center"
      justify={matchesSM ? "center" : "space-around"}
    >
      <Grid
        item
        className={classes.imagesWrapper}
        style={{
          marginBottom: matchesXXXS ? "18em" : undefined,
          position: !matchesXS ? "relative" : undefined,
        }}
      >
        <img
          src={safewashLady}
          alt="A safewash representative holding the safewash detergent gallon"
          className={classes.safewashLady}
          style={{ maxWidth: matchesXXXS ? "15.5em" : undefined }}
        />
        <img
          src={pinkWire}
          alt="A pink wireframe around the safewash lady"
          className={classes.pinkWire}
          style={{ maxWidth: matchesXXXS ? "15.5em" : undefined }}
        />
        <img
          src={greenWire}
          alt="A green wireframe around the safewash lady"
          className={classes.greenWire}
          style={{ maxWidth: matchesXXXS ? "15.5em" : undefined }}
        />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems={matchesSM ? "center" : "flex-start"}
        >
          <Grid item>
            <Typography
              variant="h2"
              align={matchesSM ? "center" : undefined}
              className={classes.primaryHeading}
            >
              Reach Out To Us
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.descriptionTextWrapper}
            style={{
              maxWidth: matchesSM ? "none" : matchesMDX ? "32em" : "none",
            }}
          >
            <Typography
              variant="body1"
              align={matchesSM ? "center" : undefined}
              className={classes.descriptionText}
            >
              We use our knowledge and expertise to provide the most effecient,
              effective and {!matchesMDX && <br />}
              environmentally friendly cleaning possible. Having in mind the
              daily increase {!matchesMDX && <br />} in percentage of children
              cancer patients world wide, skin reactions caused by harmful{" "}
              {!matchesMDX && <br />} chemicals, high priced soaps leading to
              parents using products not ideal for children.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              component={Link}
              to="/contact"
              className={classes.btn}
              onClick={() => setValue(3)}
            >
              Contact Us Now!
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
Contact.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Contact;
