import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import safeWashLady from "../../assets/safewash-lady-1.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "50em",
    padding: "0 10em",
    position: "relative",
    overflow: "hidden",
    background:
      "linear-gradient(163deg, rgba(33,164,196,0.23012955182072825) 1%, rgba(255,255,255,0.3561799719887955) 29%, rgba(255,255,255,0.06766456582633051) 51%, rgba(254,150,198,0.25253851540616246) 69%, rgba(255,216,234,0.5326505602240896) 89%, rgba(255,255,255,0.44861694677871145) 100%)",
    [theme.breakpoints.down("md")]: {
      padding: "0 5em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0 3em",
    },
    [theme.breakpoints.down("xs")]: {
      background:
        "linear-gradient(163deg, rgba(33,164,196,0.23012955182072825) 1%, rgba(255,255,255,0.3561799719887955) 29%, rgba(255,255,255,0.65) 51%, rgba(255,255,255,0.65) 69%, rgba(255,255,255,0.65) 89%, rgba(255,255,255,0.65) 100%)",
      padding: "0 2em",
    },
  },
  primaryHeading: {
    position: "relative",
    zIndex: 9,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",

      [theme.breakpoints.down("xs")]: {
        position: "absolute",
        top: "8em",
      },
    },
  },
  secondaryHeadingWrapper: {
    marginTop: "2em",
    marginBottom: "7em",
  },
  secondaryHeading: {
    fontSize: "3rem",
    lineHeight: 1.6,
    fontWeight: 700,
    color: "#fff",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,
    position: "relative",
    zIndex: 9,

    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "12em",
      zIndex: 9,
    },
  },
  btn: {
    ...theme.typography.btn,
    position: "relative",
    zIndex: 9,
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },

    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "35em",
    },
  },
  slideImg: {
    maxWidth: "65em",
    position: "absolute",
    transform: "scale(1.4)",
    bottom: "5em",
    left: "15em",
    zIndex: 1,

    [theme.breakpoints.down("md")]: {
      bottom: "2em",
      maxWidth: "50em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40em",
      left: "8em",
      bottom: "6em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "6em",
      left: "40%",
      transform: "translateX(-50%)",
    },
  },
  planetShapeLG: {
    ...theme.typography.planetShape,
    width: 90,
    height: 90,
    top: "5em",
    left: "2em",
    "&::after": {
      content: '""',
      display: "block",
      width: 75,
      height: 75,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(222,239,243,.8) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-60%, -50%)",
    },

    [theme.breakpoints.down("sm")]: {
      left: "5em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "3em",
      left: "18%",
      width: 60,
      height: 60,
    },
  },
  circleSmLeft: {
    ...theme.typography.circle,
    width: 30,
    height: 30,
    left: "9em",
    top: "23.5em",
  },
  circleSmRight: {
    ...theme.typography.circle,
    width: 30,
    height: 30,
    right: "12.5em",
    top: "25em",

    [theme.breakpoints.down("md")]: {
      right: "3em",
      top: "32em",
    },
  },
  circleMdcenter: {
    ...theme.typography.circle,
    top: "70%",
    left: "50%",
    transform: "translateX(-50%)",

    [theme.breakpoints.down("md")]: {
      top: "75%",
      left: "40em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "5em",
      left: "50%",
    },
  },
  circleMdBottom: {
    ...theme.typography.circle,
    bottom: "2em",
    right: "1em",
  },
  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "45%",
    left: "50%",
    transform: "translateX(-50%) rotate(106deg)",

    [theme.breakpoints.down("md")]: {
      top: "40%",
    },
    [theme.breakpoints.down("xs")]: {
      left: "2em",
      top: "10em",
    },
  },
  squareSmTwo: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "15em",
    right: "10em",

    [theme.breakpoints.down("md")]: {
      right: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "72%",
      right: "5%",
    },
  },
  squareBg: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "10em",
    left: "57em",

    [theme.breakpoints.down("md")]: {
      left: "10em",
      top: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      left: "5em",
      top: "75%",
    },
  },
}));

const SlideFour = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container className={classes.parentGrid} alignItems="center">
      {/* The big planet-like circle shape on the top left */}
      <div className={classes.planetShapeLG} />
      {/* The small circle on the left close to letter P */}
      {!matchesXS && <div className={classes.circleSmLeft} />}
      {/* The small circle on the right */}
      {!matchesXS && <div className={classes.circleSmRight} />}
      {/* The medium circle at the center */}
      <div className={classes.circleMdcenter} />
      {/* The medium circle at the bottom right */}
      {!matchesXS && <div className={classes.circleMdBottom} />}
      {/* The big square beneath the lady's head  */}
      <div className={classes.squareBg} />
      {/* The small square shape in the center */}
      <div className={classes.squareSmOne} />
      {/* he small square shape on the right */}
      <div className={classes.squareSmTwo} />
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
              }}
            >
              Remove 99% Food and {!matchesXXXS && <br />} Tough Stains
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
              }}
            >
              Preserve Clothing {matchesXS && <br />} Colors
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              component={Link}
              to="/distributors"
              onClick={() => setValue(2)}
              classes={{ root: classes.btn }}
            >
              {matchesXS
                ? "Become A Distributor"
                : "Find Distributors Around You?"}
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <img
          src={safeWashLady}
          alt="Lady expressing excitement after washing clothes with safewash detergent"
          className={classes.slideImg}
          style={{ display: matchesXXXS ? "none" : undefined }}
        />
      </Grid>
    </Grid>
  );
};

SlideFour.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default SlideFour;
