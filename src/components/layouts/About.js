import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import pinkWire from "../../assets/Vector-13.png";
import safeWashLady from "../../assets/safewash-lady-2.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "10em 0 10em 7em",
    position: "relative",
    overflow: "hidden",

    [theme.breakpoints.only("md")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },

  textContentParentGrid: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "35em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "27em",
    },
  },
  primaryHeading: {
    color: theme.palette.common.brown,
    marginBottom: "1em",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  aboutTextContentGrid: {
    [theme.breakpoints.down("md")]: {
      maxWidth: "35em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "none",
    },
  },
  textContent: {
    color: theme.palette.common.darkBrown,
  },
  btn: {
    ...theme.typography.btn,
    marginTop: "1em",
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },
  },
  imagesGrid: {
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",

    [theme.breakpoints.down("md")]: {
      right: "4em",
    },

    [theme.breakpoints.down("sm")]: {
      top: "10em",
      left: "50%",
      transform: "translate(-50%, 0)",
    },
  },
  pinkWire: {
    ...theme.typography.wire,
    right: "2em",
    top: "50%",
    transform: "translateY(-35%)",
    zIndex: 2,
    maxWidth: "27em",

    [theme.breakpoints.down("md")]: {
      maxWidth: "20em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
      left: "50%",
      transform: "translateX(-50%)",
      top: "5em",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "20em",
    },
  },
  ladyImg: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "-2em",
    maxWidth: "35em",
    zIndex: 3,

    [theme.breakpoints.down("md")]: {
      maxWidth: "25em",
      right: "-1em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
      left: "50%",
      right: 0,
      top: 0,
      transform: "translate(-50%, 0)",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "25em",
    },
  },
  squareSmTop: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "8em",
    right: "20%",

    [theme.breakpoints.down("xs")]: {
      right: "5%",
    },
  },
  squareSmMiddleTop: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: "-2.5em",
    top: "14em",
  },
  squareSmMiddleBottom: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    right: "25%",
    top: "-3em",

    [theme.breakpoints.down("xs")]: {
      right: "-1em",
      top: "-2.5em",
    },
  },
  squareSmBottom: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    // left: "10%",
    // top: "20em",
    bottom: "5em",
    left: "10%",
  },
  squareBgTop: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    left: "20%",
    top: "5em",
  },
  circleBottom: {
    ...theme.typography.circle,
    bottom: "1em",
    left: "50%",
    transform: "translateX(-50%)",
  },
}));

const About = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXXXXS = useMediaQuery("(max-width: 280px)");
  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Grid
      container
      className={classes.parentGrid}
      alignItems="center"
      direction={matchesSM ? "column" : "row"}
      style={{
        paddingLeft: matchesXXXXS ? "1em" : undefined,
        paddingRight: matchesXXXXS ? "1em" : undefined,
      }}
    >
      <Grid
        item
        className={classes.textContentParentGrid}
        style={{ marginTop: matchesXXXS ? "22em" : undefined }}
      >
        {matchesSM && <div className={classes.squareBgTop} />}
        {matchesSM && <div className={classes.squareBgTop} />}
        {matchesSM && <div className={classes.squareSmTop} />}
        <Grid
          container
          direction="column"
          alignItems={matchesSM ? "center" : "flex-start"}
        >
          <Grid item>
            <Typography variant="h2" className={classes.primaryHeading}>
              About Us
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.aboutTextContentGrid}
            style={{ position: "relative" }}
          >
            {matchesSM && <div className={classes.squareSmMiddleBottom} />}
            <Typography
              variant="body1"
              paragraph
              className={classes.textContent}
              align={matchesSM ? "center" : undefined}
            >
              We use our knowledge and expertise to provide the most effecient,
              effective and {!matchesMD && <br />} environmentally friendly
              cleaning possible. Having in mind the daily increase in percentage
              of {!matchesMD && <br />} children cancer patients world wide,
              skin reactions caused by harmful chemicals, high priced{" "}
              {!matchesMD && <br />} soaps leading to parents using products not
              ideal for children.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              component={Link}
              to="/distributors"
              onClick={() => setValue(2)}
              className={classes.btn}
              style={{ padding: matchesXXXXS ? ".75em 1em" : undefined }}
            >
              Become a Distributor
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item className={classes.imagesGrid}>
        {matchesSM && <div className={classes.squareSmMiddleTop} />}
        <img
          src={pinkWire}
          alt="A pink wireframe wrapping around the safewash lady"
          className={classes.pinkWire}
          style={{
            maxWidth: matchesXXXS ? "13em" : matchesXXS ? "17em" : undefined,
          }}
        />
        <img
          src={safeWashLady}
          alt="A lady representing the safewash brand"
          className={classes.ladyImg}
          style={{
            maxWidth: matchesXXXS ? "18em" : matchesXXS ? "22em" : undefined,
          }}
        />
      </Grid>
      {matchesSM && <div className={classes.squareSmBottom} />}
      {matchesSM && <div className={classes.circleBottom} />}
    </Grid>
  );
};

About.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default About;
