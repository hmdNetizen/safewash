import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import safeWashBaby1 from "../../assets/safewash-baby-1.png";
const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "50em",
    background:
      "linear-gradient(163deg, rgba(33,164,196,0.23012955182072825) 0%, rgba(255,255,255,0.3561799719887955) 16%, rgba(255,255,255,0.21332282913165268) 59%, rgba(254,150,198,0.3225665266106442) 88%, rgba(255,255,255,1) 100%)",
    position: "relative",
    overflow: "hidden",
  },
  textContentWrapper: {
    marginLeft: "10em",
    marginTop: "12em",

    // This style is applied to all screen sizes below 1280px
    [theme.breakpoints.down("md")]: {
      marginLeft: "5em",
      marginTop: "5em",
    },

    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2em",
      marginTop: "5em",
    },

    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
      marginTop: "10em",
    },
  },
  circleTopLeft: {
    ...theme.typography.circle,
    top: "4em",
    left: "4em",

    [theme.breakpoints.down("md")]: {
      left: "7em",
      top: "5em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "50%",
      top: "3em",
      transform: "translateX(-50%)",
    },
  },
  primaryHeading: {
    position: "relative",
    zIndex: 1,
    // This style is applied to all screen sizes below 1280px
    [theme.breakpoints.down("md")]: {
      fontSize: "2.25rem",
    },
    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  secondaryHeadingWrapper: {
    marginTop: "2em",
    marginBottom: "2em",
    position: "relative",

    [theme.breakpoints.down("md")]: {
      marginBottom: "4em",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: "4em",
      marginBottom: "7em",
    },
  },
  secondaryHeading: {
    fontSize: "3rem",
    lineHeight: 1.6,
    fontWeight: 700,
    color: "#fff",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,

    // This style is applied to all screen sizes below 1280px
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },

    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
    // This style is applied to all screen sizes below 600px
    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },

  squareBgLeft: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "1.5em",
    left: "-5em",

    [theme.breakpoints.down("xs")]: {
      top: "11em",
      left: "2em",
    },
  },
  squareBgRight: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "1em",
    left: "61em",
  },
  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "10em",
    left: "31em",

    [theme.breakpoints.down("md")]: {
      top: "7em",
      left: "20em",
    },
    [theme.breakpoints.down("sm")]: {
      top: "7em",
      left: "20em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "-2em",
      left: 0,
    },
  },
  squareSmTwo: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: "25em",
    top: "3em",

    [theme.breakpoints.down("xs")]: {
      top: "-2em",
    },
  },

  squareSmThree: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: "40em",
  },
  btn: {
    ...theme.typography.btn,
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },

    [theme.breakpoints.down("xs")]: {
      position: "relative",
      zIndex: 9,
    },
  },
  slideImg: {
    maxWidth: "45em",
    position: "absolute",
    bottom: "5em",
    right: "-5em",
    transform: "scale(1.4)",
    filter: `drop-shadow(0px 4px 30px ${theme.palette.primary.main})`,

    // This style is applied to all screen sizes below 1280px
    [theme.breakpoints.down("md")]: {
      maxWidth: "35em",
      // bottom: "5em",
      right: 0,
      transform: "scale(1.5)",
    },
    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
      transform: "scale(1.4)",
      bottom: "4em",
      right: 0,
      // zIndex: -1,
    },

    // This style is applied to all screen sizes below 600px
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const SlideOne = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  // MEDIA QUERIES FOR DIFFERENT BREAKPOINTS
  const matchesXXXXS = useMediaQuery(
    "(max-width: 280px)"
  ); /* THIS APPLIES TO SCREEN SIZES EQUALS OR BELOW 280PX */
  const matchesXXXS = useMediaQuery(
    "(max-width: 340px)"
  ); /* THIS APPLIES TO SCREEN SIZES EQUALS OR BELOW 340PX */
  const matchesXXS = useMediaQuery(
    "(max-width: 450px)"
  ); /* THIS APPLIES TO SCREEN SIZES EQUALS OR BELOW 450PX */
  const matchesXS = useMediaQuery(
    theme.breakpoints.down("xs")
  ); /* THIS APPLIES TO SCREEN SIZES EQUALS OR BELOW 600PX */
  const matchesSMX = useMediaQuery(
    "(max-width: 760px)"
  ); /* THIS APPLIES TO SCREEN SIZES EQUALS OR BELOW 760PX */
  // const matchesSM = useMediaQuery(
  //   theme.breakpoints.down("sm")
  // ); /* THIS APPLIES TO SCREEN SIZES EQUALS OR BELOW 960PX */
  const matchesMD = useMediaQuery(
    theme.breakpoints.down("md")
  ); /* THIS APPLIES TO SCREEN SIZES EQUALS OR BELOW 1280PX */

  return (
    <Grid
      container
      className={classes.parentGrid}
      alignItems={!matchesSMX ? "center" : "flex-start"}
      direction={matchesSMX ? "column" : "row"}
    >
      <div
        className={classes.circleTopLeft}
        style={{
          left: matchesSMX ? "50%" : undefined,
          transform: matchesSMX ? "-50%" : undefined,
        }}
      />
      <div className={classes.squareBgRight} />
      <Grid
        item
        className={classes.textContentWrapper}
        style={{
          marginLeft: matchesXXS
            ? "1em"
            : matchesXS
            ? "3em"
            : matchesSMX
            ? "5em"
            : undefined,
          marginTop: matchesXS ? undefined : matchesSMX ? "10em" : undefined,
        }}
      >
        <Grid container direction="column">
          <Grid item style={{ position: "relative" }}>
            <Typography
              variant="h1"
              className={classes.primaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.5rem"
                  : matchesXXS
                  ? "1.75rem"
                  : matchesXS
                  ? undefined
                  : matchesSMX
                  ? "2.5rem"
                  : undefined,
              }}
            >
              A liquid laundry {matchesXS && <br />} detergent{" "}
              {!matchesXS && <br />} specifically {matchesXS && <br />}{" "}
              formulated for
            </Typography>
            <div
              className={classes.squareSmOne}
              style={{
                top: matchesXS ? undefined : matchesSMX ? "8em" : undefined,
                left: matchesXS ? undefined : matchesSMX ? "26em" : undefined,
              }}
            />
          </Grid>
          <Grid item className={classes.secondaryHeadingWrapper}>
            <div
              className={classes.squareBgLeft}
              style={{ top: matchesXXXS ? "10em" : undefined }}
            />
            <Typography
              variant="h2"
              className={classes.secondaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.5rem"
                  : matchesXXS
                  ? "1.75rem"
                  : matchesXS
                  ? undefined
                  : matchesSMX
                  ? "2.5rem"
                  : undefined,
              }}
            >
              Babies and Children <br /> Clothing
            </Typography>
          </Grid>
          <Grid item style={{ position: "relative" }}>
            <Button
              variant="contained"
              component={Link}
              to="/distributors"
              onClick={() => setValue(2)}
              classes={{ root: classes.btn }}
              style={{
                padding: !matchesXXS ? ".75em 2em" : ".75em",
                fontSize: matchesXXXXS ? "0.75rem" : undefined,
                left: matchesXXXXS ? "0.5em" : undefined,
                right: matchesXXXXS ? "0.5em" : undefined,
              }}
            >
              Find Distributors Around You?
            </Button>
            <div
              className={classes.squareSmTwo}
              style={{
                left: matchesXXXXS
                  ? "90%"
                  : matchesXXXS
                  ? "98%"
                  : matchesXXS
                  ? "90%"
                  : undefined,
              }}
            />
            {!matchesXS && <div className={classes.squareSmThree} />}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {!matchesSMX && (
          <img
            src={safeWashBaby1}
            alt="A cute baby sitting down"
            className={classes.slideImg}
            style={{ right: matchesMD ? "-5em" : undefined }}
          />
        )}
      </Grid>
    </Grid>
  );
};

SlideOne.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default SlideOne;
