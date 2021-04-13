import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import safeWashBaby3 from "../../assets/safewash-baby-3.png";
import ringWire from "../../assets/Vector 22.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "45em",
    width: "100%",
    overflow: "hidden",
    textTranform: "capitalize",
    background:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(146.99deg, rgba(255, 255, 255, 0.5) 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",

    [theme.breakpoints.down("xs")]: {
      background: "none",
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
  primaryHeading: {
    position: "relative",
    zIndex: 9,
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },

    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "5em",
    },
  },
  secondaryHeadingWrapper: {
    marginTop: "2em",
    marginBottom: "4em",

    [theme.breakpoints.down("xs")]: {
      marginTop: 0,
      marginBottom: 0,
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
      top: "9em",
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
      top: "25em",
    },
  },
  slideImg: {
    maxWidth: "25em",
    position: "absolute",
    top: "6em",
    right: "10em",
    transform: "scale(1.2)",
    filter: `drop-shadow(0px 4px 30px ${theme.palette.primary.main})`,

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
      top: "8em",
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
      top: "6em",
    },
  },
  squareSm: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "12em",
    right: "5em",

    [theme.breakpoints.down("sm")]: {
      right: "2em",
    },

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: "50%",
    transform: "translateX(-50%) rotate(106deg)",
    top: "20em",

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  squareBgOne: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "1em",
    right: "27em",
    filter: "blur(2px)",

    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },
  },
  circle: {
    ...theme.typography.circle,
    left: "50%",
    top: "27em",
    transform: "translateX(-50%)",

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  circleOne: {
    ...theme.typography.circle,
    right: "3em",
    top: "90%",
    transform: "translateY(-45%)",

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  planetShapeSm: {
    width: 30,
    height: 30,
    top: "17em",
    right: "-35em",
    ...theme.typography.planetShape,

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
      transform: "translate(-60%, -60%)",
    },

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  planetShapeSmOne: {
    ...theme.typography.planetShape,
    width: 30,
    height: 30,
    top: "15em",
    right: "-15em",

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
      transform: "translate(-60%, -60%)",
    },

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
}));
const SlideThree = () => {
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
            <Typography
              variant="h1"
              className={classes.primaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.5rem"
                  : matchesXXS
                  ? "1.85rem"
                  : undefined,
                top: matchesXXXS ? "5em" : undefined,
              }}
            >
              Keeps your baby {matchesXS && <br />} smiling{" "}
              {!matchesXS && <br />} all day
            </Typography>
            <div className={classes.squareSmOne} />
          </Grid>
          <Grid item className={classes.secondaryHeadingWrapper}>
            <Typography
              variant="h2"
              className={classes.secondaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.5rem"
                  : matchesXXS
                  ? "1.85rem"
                  : undefined,
                top: matchesXXXS ? "10em" : undefined,
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
                top: matchesXXXS ? "22em" : undefined,
              }}
            >
              Become A Distributor
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <div className={`${classes.squareBgOne}`} />
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
        <div className={classes.circle} />
        <div className={`${classes.squareSm}`} />
        <div className={`${classes.planetShapeSm}`} />
        <div className={`${classes.planetShapeSmOne}`} />
        <div className={classes.circleOne} />
      </Grid>
    </Grid>
  );
};

export default SlideThree;
