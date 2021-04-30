import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import safeWashBaby3 from "../../assets/safewash-baby-3.png";
import ringWire from "../../assets/Vector 22.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "50em",
    padding: "0 10em",
    position: "relative",
    background:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(146.99deg, rgba(255, 255, 255, 0.5) 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",

    [theme.breakpoints.down("md")]: {
      padding: "0 5em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "0 3em",
    },
    [theme.breakpoints.down("xs")]: {
      background: "none",
      padding: "0 2em",
    },
  },

  secondaryHeadingWrapper: {
    marginTop: "2em",
    marginBottom: "7em",
  },

  primaryHeading: {
    position: "relative",
    zIndex: 9,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "7em",
    },
  },

  secondaryHeading: {
    fontSize: "2.5rem",
    lineHeight: 1.6,
    fontWeight: 700,
    position: "relative",
    zIndex: 9,
    color: "#fff",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,

    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "11em",
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

    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      zIndex: 5,
      top: "32em",
    },
  },
  slideImg: {
    maxWidth: "25em",
    position: "absolute",
    top: "4em",
    right: "10em",
    transform: "scale(1.25)",
    filter: `drop-shadow(0px 4px 20px ${theme.palette.primary.main})`,

    [theme.breakpoints.down("md")]: {
      right: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
      top: "10em",
      right: 0,
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "15em",
      top: "40%",
      transform: "translateY(-50%) scale(1.25)",
    },
  },
  ringCircleBackground: {
    position: "absolute",
    maxWidth: "35em",
    top: "7em",
    right: "3em",

    [theme.breakpoints.down("md")]: {
      right: 0,
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "28em",
      right: "-5em",
      top: "11em",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "25em",
      top: "40%",
      transform: "translateY(-50%)",
    },
  },
  squareBgTop: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "1.5em",
    left: "65em",
    filter: "blur(2px)",

    [theme.breakpoints.down("md")]: {
      left: "15em",
      top: "60%",
    },
  },
  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "40%",
    left: "40%",
    transform: "translateX(-50%)",
  },
  squareSmTwo: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    right: "10em",
    top: "20%",
  },
  squareSmThree: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: "30%",
    bottom: "5em",
  },
  circleCenter: {
    ...theme.typography.circle,
    top: "65%",
    left: "50%",
    transform: "translateX(-50%)",

    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  circleBottom: {
    ...theme.typography.circle,
    bottom: "2em",
    right: "2em",
  },
  circleSm: {
    ...theme.typography.circle,
    right: "13em",
    top: "22em",
    width: 30,
    height: 30,
  },
  planetShapeSmOne: {
    ...theme.typography.planetShape,
    width: 20,
    height: 20,
    top: "20em",
    left: "60%",

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
  planetShapeSmTwo: {
    ...theme.typography.planetShape,
    width: 20,
    height: 20,
    top: "20em",
    left: "70%",

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
}));
const SlideThree = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXXXXS = useMediaQuery("(max-width: 280px)");
  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container className={classes.parentGrid} alignItems="center">
      {/* The big square beside the navigation menu */}
      {!matchesXS && <div className={classes.squareBgTop} />}
      {/* The small square above the secondary heading */}
      {!matchesXS && <div className={classes.squareSmOne} />}
      {/* The small square at the right side of the slide */}
      {!matchesXS && <div className={classes.squareSmTwo} />}
      {/* The small square at the bottom of the slide */}
      {!matchesXS && <div className={classes.squareSmThree} />}
      {/* The small circle at the center-right of the slide */}
      {!matchesXS && <div className={classes.circleSm} />}
      {/* The circle at the center of the slide */}
      {!matchesXS && <div className={classes.circleCenter} />}
      {/* The circle at the bottom right of the slide */}
      {!matchesXS && <div className={classes.circleBottom} />}
      {/* The small planet-like circle shape on the left */}
      {!matchesXS && <div className={classes.planetShapeSmOne} />}
      {/* The small planet-like circle shape on the right */}
      {!matchesXS && <div className={classes.planetShapeSmTwo} />}
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <Typography
              variant="h1"
              className={classes.primaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.5rem"
                  : matchesXXS
                  ? "1.75rem"
                  : undefined,
                top: matchesXXS ? "7.5em" : undefined,
              }}
            >
              Keeps your baby {matchesXS && <br />} smiling
              {!matchesXS && <br />} all day
            </Typography>
          </Grid>
          <Grid item className={classes.secondaryHeadingWrapper}>
            <Typography
              variant="h2"
              className={classes.secondaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.5rem"
                  : matchesXXS
                  ? "1.75rem"
                  : undefined,
                top: matchesXXS ? "13em" : undefined,
              }}
            >
              Zero Skin Irritations
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              classes={{ root: classes.btn }}
              style={{
                padding: !matchesXXXS ? ".75em 2em" : ".75em",
                top: matchesXXXXS ? "35em" : undefined,
                left: matchesXXXXS ? "1em" : undefined,
                right: matchesXXXXS ? "1em" : undefined,
                fontSize: matchesXXXXS ? "0.75rem" : undefined,
              }}
            >
              {matchesXS
                ? "Find Distributors Around You"
                : "Become A Distributor"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img
          src={ringWire}
          alt="A blurry blue ring wire circling around the baby"
          className={classes.ringCircleBackground}
        />
        <img
          src={safeWashBaby3}
          alt="A cute baby sitting down"
          className={classes.slideImg}
        />
      </Grid>
    </Grid>
  );
};

export default SlideThree;
