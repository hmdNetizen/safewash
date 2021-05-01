import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import safeWashBaby2 from "../../assets/safewash-baby-2.png";
import laundryBasket from "../../assets/laundary_basket.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "50em",
    background:
      "linear-gradient(212.16deg, rgba(254, 150, 198, 0.2) 10.33%, rgba(254, 150, 198, 0.3) 31.35%, rgba(255, 255, 255, 0.5) 83.91%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(213.01deg, #FFFFFF 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",
    position: "relative",
    overflow: "hidden",
  },
  slideImgWrapperGrid: {
    position: "absolute",
    left: "10em",
    top: 0,
    zIndex: 9,

    [theme.breakpoints.down("md")]: {
      left: "2em",
    },

    [theme.breakpoints.down("sm")]: {
      top: "50%",
      transform: "translateY(-50%)",
      left: 0,
    },

    [theme.breakpoints.down("xs")]: {
      top: "-2em",
      left: "50%",
      transform: "translate(-40%, 0)",
    },
  },
  slideImg: {
    maxWidth: "45em",

    [theme.breakpoints.down("md")]: {
      maxWidth: "40em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "35em",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
    },
  },
  textContentGrid: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  primaryHeadingWrapper: {
    position: "absolute",
    right: "17em",
    top: "10em",
    zIndex: 10,

    [theme.breakpoints.down("md")]: {
      right: "9em",
    },

    [theme.breakpoints.down("sm")]: {
      right: "3em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "25em",
      right: 0,
      left: "2em",
    },
  },
  primaryHeading: {
    fontSize: "2.5rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },
  },
  secondaryHeadingWrapper: {
    position: "absolute",
    top: "22em",
    right: "29.7em",
    zIndex: 10,

    [theme.breakpoints.down("md")]: {
      right: "21.7em",
    },

    [theme.breakpoints.down("sm")]: {
      right: "6.2em",
      top: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "33em",
      right: 0,
      left: "2em",
    },
  },
  secondaryHeading: {
    lineHeight: 1.6,
    fontWeight: 700,
    color: "#ffe4f1",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,

    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      color: "#fff",
    },
  },
  btnWrapperGrid: {
    position: "absolute",
    top: "30em",
    right: "33em",
    zIndex: 10,

    [theme.breakpoints.down("md")]: {
      right: "24.8em",
    },

    [theme.breakpoints.down("sm")]: {
      right: "9.2em",
      top: "28em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "40em",
      right: 0,
      left: "2em",
    },
  },
  btn: {
    ...theme.typography.btn,
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },
  },
  laundryBasketGrid: {
    position: "absolute",
    right: 0,
    bottom: "5em",

    [theme.breakpoints.down("sm")]: {
      bottom: "-5em",
    },

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  laundryBasket: {
    maxWidth: "25em",
  },
  circleTop: {
    ...theme.typography.circle,
    left: "5em",
    top: "5em",

    [theme.breakpoints.down("sm")]: {
      left: "12em",
      top: "16em",
    },
    [theme.breakpoints.down("xs")]: {
      left: "50%",
      top: "5em",
      transform: "translateX(-50%)",
    },
  },
  circleBottom: {
    ...theme.typography.circle,
    right: "5em",
    bottom: "2em",

    [theme.breakpoints.down("sm")]: {
      bottom: 0,
      right: 0,
    },
  },
  squareBgTop: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    left: "59.5em",
    top: "1em",

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  squareBgMiddle: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "15em",
    left: "12em",

    [theme.breakpoints.down("md")]: {
      left: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      left: "70%",
      top: "20em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "20%",
      top: "30em",
    },
  },
  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    right: "33em",
    top: "18em",

    [theme.breakpoints.down("md")]: {
      left: "25em",
    },

    [theme.breakpoints.down("sm")]: {
      top: "18em",
      left: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "9em",
      left: "5em",
    },
  },
  squareSmTwo: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: "45em",
    top: "18em",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },
  squareSmThree: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    right: "5em",
    top: "35em",

    [theme.breakpoints.down("xs")]: {
      top: "31em",
      right: "7em",
    },
  },
  squareSmFour: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    bottom: "2em",
    right: "35em",
  },
  planetShapeSmOne: {
    ...theme.typography.planetShape,
    width: 20,
    height: 20,
    top: "7.25em",
    left: "25.3em",

    "&::after": {
      content: '""',
      display: "block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },

    [theme.breakpoints.down("md")]: {
      left: "17em",
    },

    [theme.breakpoints.down("sm")]: {
      left: "3em",
      top: "22em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "7em",
      top: "12em",
    },
  },
  // Hidden on screens less than 960px
  planetShapeSmTwo: {
    ...theme.typography.planetShape,
    width: 20,
    height: 20,
    left: "41em",
    top: "11em",

    "&::after": {
      content: '""',
      display: "block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    [theme.breakpoints.down("md")]: {
      left: "30em",
      top: "7em",
    },
  },
  planetShapeSmThree: {
    ...theme.typography.planetShape,
    width: 20,
    height: 20,
    left: "54em",
    top: "7em",

    "&::after": {
      content: '""',
      display: "block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },

    [theme.breakpoints.down("md")]: {
      left: "50em",
    },
  },
  planetShapeSmFour: {
    ...theme.typography.planetShape,
    width: 20,
    height: 20,
    left: "73.5em",
    top: "10.5em",

    "&::after": {
      content: '""',
      display: "block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },

    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  planetShapeSmFive: {
    ...theme.typography.planetShape,
    width: 20,
    height: 20,
    left: "78em",
    top: "9.5em",

    "&::after": {
      content: '""',
      display: "block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
  },
  planetShapeSmSix: {
    ...theme.typography.planetShape,
    width: 20,
    height: 20,
    left: "50%",
    bottom: "7em",
    transform: "translateX(-50%)",

    "&::after": {
      content: '""',
      display: "block",
      width: 12,
      height: 12,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)",
    },
    [theme.breakpoints.down("md")]: {
      left: "25em",
      transform: "translateX(0)",
    },
  },
  planetShapeMdOne: {
    ...theme.typography.planetShape,
    width: 40,
    height: 40,
    top: "21em",
    left: "28.5em",

    "&::after": {
      content: '""',
      display: "block",
      width: 25,
      height: 25,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-60%, -40%)",
    },

    [theme.breakpoints.down("md")]: {
      top: "19em",
      left: "18em",
    },

    [theme.breakpoints.down("sm")]: {
      top: "27em",
      left: "5em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "15em",
      left: "27%",
    },
  },
  planetShapeMdTwo: {
    ...theme.typography.planetShape,
    width: 30,
    height: 30,
    top: "15em",
    left: "35em",

    "&::after": {
      content: '""',
      display: "block",
      width: 20,
      height: 20,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-60%, -40%)",
    },

    [theme.breakpoints.down("md")]: {
      left: "23em",
      top: "12em",
    },

    [theme.breakpoints.down("sm")]: {
      left: "15em",
      top: "14.5em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "8em",
      top: "7em",
    },
  },
  planetShapeMdThree: {
    ...theme.typography.planetShape,
    width: 40,
    height: 40,
    top: "12em",
    left: "38em",

    [theme.breakpoints.down("md")]: {
      top: "9em",
      left: "26em",
    },

    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 30,
      top: "15em",
      left: "3em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "53%",
      transform: "translateX(-50%)",
      top: "3em",
    },

    "&::after": {
      content: '""',
      display: "block",
      width: 30,
      height: 30,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-60%, -40%)",

      [theme.breakpoints.down("sm")]: {
        width: 20,
        height: 20,
      },
    },
  },
  // Hidden on screens less than 960px
  planetShapeBg: {
    ...theme.typography.planetShape,
    width: 60,
    height: 60,
    top: "9em",
    left: "51em",

    "&::after": {
      content: '""',
      display: "block",
      width: 45,
      height: 45,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-45%, -55%)",
    },

    [theme.breakpoints.down("md")]: {
      left: "45em",
    },
  },
}));

const SlideTwo = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXXXXS = useMediaQuery("(max-width: 290px)");
  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      className={classes.parentGrid}
      direction={matchesXS ? "column" : "row"}
    >
      {/* The Circle at the top left corner */}
      <div
        className={classes.circleTop}
        style={{ transform: matchesXXS ? "translateX(-65%)" : undefined }}
      />{" "}
      {/* The big square at the top right */}
      {!matchesSM && <div className={classes.squareBgTop} />}{" "}
      {/* The big square at the left of side of the baby's image */}
      <div className={classes.squareBgMiddle} />{" "}
      {/* The medium planet-like circle shape on the baby's head */}
      <div className={classes.planetShapeSmOne} />{" "}
      {/* The medium planet-like circle shape on the baby's armpit */}
      <div
        className={classes.planetShapeMdOne}
        style={{
          left: matchesXXXXS ? "1em" : matchesXXS ? "12%" : undefined,
          top: matchesXXS ? "13em" : undefined,
        }}
      />{" "}
      <Grid
        item
        className={classes.slideImgWrapperGrid}
        style={{
          top: matchesXXXS ? 0 : undefined,
          transform: matchesXXS ? "translate(-50%, 0)" : undefined,
        }}
      >
        <img
          className={classes.slideImg}
          src={safeWashBaby2}
          alt="Cute baby places hand on the safewash liquid detergent gallon"
          style={{
            maxWidth: matchesXXXS ? "23em" : matchesXXS ? "27em" : undefined,
          }}
        />
      </Grid>
      <Grid item className={classes.textContentGrid}>
        {/* The small square in between soft and skin on large screen */}
        <div
          className={classes.squareSmOne}
          style={{
            left: matchesXXS ? 0 : undefined,
            top: matchesXXS ? "10em" : undefined,
          }}
        />{" "}
        {/* The small square close to the baby's hand */}
        <div className={classes.squareSmTwo} />{" "}
        {/* The medium planet-like circle shape on the baby's arm */}
        <div
          className={classes.planetShapeMdTwo}
          style={{
            left: matchesXXS ? "1em" : undefined,
            top: matchesXXS ? "6em" : undefined,
          }}
        />{" "}
        {/* The medium planet-like circle shape on the baby's arm */}
        <div className={classes.planetShapeMdThree} />{" "}
        {/* The small planet-like circle shape on the baby's arm */}
        {!matchesSM && <div className={classes.planetShapeSmTwo} />}{" "}
        {/* The large planet-like circle shape behind the primary heading */}
        {!matchesSM && <div className={classes.planetShapeBg} />}
        {/* The large planet-like circle shape behind the primary heading */}
        {!matchesSM && <div className={classes.planetShapeSmThree} />}{" "}
        {/* The large planet-like circle shape behind the primary heading "Y" letter */}
        <div className={classes.planetShapeSmFour} />{" "}
        {/* The large planet-like circle shape behind the primary heading on the "r" letter */}
        <div className={classes.planetShapeSmFive} />{" "}
        <Grid container direction="column">
          <Grid
            item
            className={classes.primaryHeadingWrapper}
            style={{
              top: matchesXXS ? "23em" : undefined,
              right: matchesXXS ? "1em" : undefined,
              left: matchesXXS ? "1em" : undefined,
            }}
          >
            <Typography
              variant="h1"
              className={classes.primaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.45rem"
                  : matchesXXS
                  ? "1.65rem"
                  : undefined,
              }}
            >
              Mild and Gentle on {matchesXS && <br />} your{" "}
              {!matchesXS && <br />} baby's soft skin
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.secondaryHeadingWrapper}
            style={{
              top: matchesXXS ? "31em" : undefined,
              left: matchesXXS ? "1em" : undefined,
            }}
          >
            <Typography
              variant="h2"
              className={classes.secondaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.45rem"
                  : matchesXXS
                  ? "1.65rem"
                  : undefined,
              }}
            >
              Happy Fragrance
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.btnWrapperGrid}
            style={{
              top: matchesXXS ? "38em" : undefined,
              left: matchesXXS ? "1em" : undefined,
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/distributors"
              onClick={() => setValue(2)}
              className={classes.btn}
            >
              Become A Distributor
            </Button>
          </Grid>
          <Grid item className={classes.laundryBasketGrid}>
            {!matchesXS && (
              <img
                src={laundryBasket}
                alt="Laundary basket with clothes ready to be washed"
                className={classes.laundryBasket}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
      {/* The small square sitting on top of the laundry basket */}
      <div
        className={classes.squareSmThree}
        style={{
          right: matchesXXS ? "3em" : undefined,
          top: matchesXXS ? "29em" : undefined,
        }}
      />{" "}
      {/* The small square sitting at the bottom of the right grid */}
      {!matchesSM && <div className={classes.squareSmFour} />}{" "}
      {/* The Circle at the bottom right corner */}
      {!matchesXS && <div className={classes.circleBottom} />}{" "}
      {/* The small square at the bottom center */}
      {!matchesSM && <div className={classes.planetShapeSmSix} />}{" "}
    </Grid>
  );
};

SlideTwo.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default SlideTwo;
