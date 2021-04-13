import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import safeWashLady from "../../assets/safewash-lady-1.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "45em",
    width: "100%",
    overflow: "hidden",
    textTranform: "capitalize",
    position: "relative",
    zIndex: -3,
    background:
      "linear-gradient(163deg, rgba(33,164,196,0.23012955182072825) 1%, rgba(255,255,255,0.3561799719887955) 29%, rgba(255,255,255,0.06766456582633051) 51%, rgba(254,150,198,0.25253851540616246) 69%, rgba(255,216,234,0.5326505602240896) 89%, rgba(255,255,255,0.44861694677871145) 100%)",

    [theme.breakpoints.down("xs")]: {
      background:
        "linear-gradient(163deg, rgba(33,164,196,0.23012955182072825) 1%, rgba(255,255,255,0.3561799719887955) 29%, rgba(255,255,255,0.65) 51%, rgba(255,255,255,0.65) 69%, rgba(255,255,255,0.65) 89%, rgba(255,255,255,0.65) 100%)",
    },
  },
  textContentWrapper: {
    marginLeft: "10em",

    [theme.breakpoints.down("md")]: {
      marginLeft: "5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2em",
    },
  },
  planetShapeXL: {
    ...theme.typography.planetShape,
    width: 90,
    height: 90,
    top: "-2em",
    left: "-7em",
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
      left: "3em",
      top: "-3em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "-10em",
      left: "1em",
      width: 60,
      height: 60,
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
    marginBottom: "5em",
    marginTop: "2em",
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
  circleSm: {
    ...theme.typography.circle,
    top: "25em",
    width: 30,
    height: 30,
    zIndex: -1,
    left: "9em",

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  circleSmOne: {
    left: "89%",
    zIndex: -3,

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  circleMd: {
    ...theme.typography.circle,
    width: 45,
    height: 45,
    left: "54%",
    top: "32em",

    [theme.breakpoints.down("xs")]: {
      top: "8em",
      left: "50%",
      transform: "translateX(-50%)",
      width: 60,
      height: 60,
    },
  },
  circleMdOne: {
    left: "95%",
    top: "40em",
    width: 60,
    height: 60,

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  squareBg: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "10em",
    left: "62%",
    zIndex: 1,

    [theme.breakpoints.down("xs")]: {
      top: "75%",
      left: "10%",
    },
  },
  squareSm: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "10em",
    right: "10%",

    [theme.breakpoints.down("xs")]: {
      left: "1em",
      top: "13em",
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
      top: "32em",
    },
  },
  slideImg: {
    maxWidth: "60em",
    position: "absolute",
    transform: "scale(1.4)",
    bottom: "5em",
    right: "15%",
    zIndex: 1,

    [theme.breakpoints.down("md")]: {
      maxWidth: "50em",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "40em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "8em",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
}));

const SlideFour = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container className={classes.parentGrid} alignItems="center">
      <Grid item>
        <Grid
          container
          direction="column"
          className={classes.textContentWrapper}
        >
          <Grid item>
            <div className={classes.planetShapeXL} />
            <Typography
              variant="h1"
              className={classes.primaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.5rem"
                  : matchesXXS
                  ? "1.85rem"
                  : undefined,
                top: matchesXXXS ? "10em" : undefined,
              }}
            >
              Remove 99% Food {matchesXXS && <br />} and {!matchesXXS && <br />}{" "}
              Tough Stains
            </Typography>
          </Grid>
          <Grid item className={classes.secondaryHeadingWrapper}>
            <div className={classes.circleSm} />
            <Typography
              variant="h2"
              className={classes.secondaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.5rem"
                  : matchesXXS
                  ? "1.85rem"
                  : undefined,
                top: matchesXXXS ? "14em" : undefined,
              }}
            >
              Preserve Clothing {matchesXS && <br />} Colors
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              classes={{ root: classes.btn }}
              style={{
                padding: !matchesXXS ? ".75em 2em" : ".75em",
                top: matchesXXXS ? "28em" : undefined,
                left: matchesXXXS ? "50%" : undefined,
                transform: matchesXXXS ? "translateX(-50%)" : undefined,
              }}
            >
              Find Distributors Around You?
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <div
          className={classes.squareBg}
          style={{ top: matchesXXXS ? "65%" : undefined }}
        />
        <div className={classes.squareSm} />
        <img
          src={safeWashLady}
          alt="Lady expressing excitement after washing clothes with safewash detergent"
          className={classes.slideImg}
        />
        <div className={classes.circleMd} />
        <div className={`${classes.circleMd} ${classes.circleMdOne}`} />
        <div className={`${classes.circleSm} ${classes.circleSmOne}`} />
      </Grid>
    </Grid>
  );
};

export default SlideFour;
