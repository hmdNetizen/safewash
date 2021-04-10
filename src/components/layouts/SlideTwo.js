import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import safeWashBaby2 from "../../assets/safewash-baby-2.png";
import laundaryBasket from "../../assets/laundary_basket.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    overflow: "hidden",
    height: "45em",
    background:
      "linear-gradient(212.16deg, rgba(254, 150, 198, 0.2) 10.33%, rgba(254, 150, 198, 0.3) 31.35%, rgba(255, 255, 255, 0.5) 83.91%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(213.01deg, #FFFFFF 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",
    zIndex: 1,
  },
  leftGridWrapper: {
    position: "relative",
  },
  circle: {
    ...theme.typography.circle,
    top: 73,
    left: 90,

    [theme.breakpoints.down("xs")]: {
      left: "50%",
      transform: "translateX(-70%)",
      top: "7.5em",
      width: 70,
      height: 70,
    },
  },
  squareBg: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "18em",
    left: "11em",

    [theme.breakpoints.down("sm")]: {
      top: 0,
      left: "50em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "20%",
      top: "31em",
    },
  },
  squareSm: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "24.5em",
    right: "26.5em",

    [theme.breakpoints.down("md")]: {
      right: "17em",
      top: "22.5em",
    },
  },
  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    right: "45.5em",
    top: "25em",

    [theme.breakpoints.down("md")]: {
      right: "31em",
      top: "20em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "5%",
      top: "10em",
    },
  },
  squareSmTwo: {
    top: "44em",

    [theme.breakpoints.down("md")]: {
      top: "42em",
      right: "2em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "37em",
      right: "4em",
    },
  },
  planetShapeSm: {
    width: 30,
    height: 30,
    top: "11.5em",
    left: "24em",
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
      transform: "translate(-40%, -40%)",
    },

    [theme.breakpoints.down("md")]: {
      visibility: "hidden",
    },

    [theme.breakpoints.down("xs")]: {
      visibility: "visible",
      left: "7em",
      top: "8em",
    },
  },
  planetShapeSmOne: {
    top: "3em",
    left: "43em",

    [theme.breakpoints.down("xs")]: {
      left: "4em",
    },
  },
  planetShapeTwo: {
    top: "11em",
    left: "55em",
  },
  planetShapeMd: {
    ...theme.typography.planetShape,
    width: 45,
    height: 45,
    top: "19em",
    left: "35em",

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
      transform: "translate(-40%, -40%)",
    },

    [theme.breakpoints.down("md")]: {
      top: "5em",
      left: "18em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "14.5em",
      left: "9em",
    },
  },
  planetShapeMdOne: {
    top: "17em",
    left: "28em",
    width: 55,
    height: 55,
    opacity: 0.7,

    "&::after": {
      width: 35,
      height: 35,
    },

    [theme.breakpoints.down("md")]: {
      left: "20em",
      top: "8em",
    },
  },
  planetShapeLg: {
    ...theme.typography.planetShape,
    width: 70,
    height: 70,
    top: "10em",
    left: "38em",

    "&::after": {
      content: '""',
      display: "block",
      width: 55,
      height: 55,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-45%, -45%)",
    },

    [theme.breakpoints.down("md")]: {
      top: 0,
    },

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  planetShapeXL: {
    ...theme.typography.planetShape,
    width: 90,
    height: 90,
    top: "11em",
    left: "50em",
    "&::after": {
      content: '""',
      display: "block",
      width: 80,
      height: 80,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-45%, -50%)",
    },

    [theme.breakpoints.down("md")]: {
      left: 0,
      top: "15em",
      zIndex: 1,
    },

    [theme.breakpoints.down("sm")]: {
      left: "-7em",
    },
  },
  slideImg: {
    position: "absolute",
    left: "2em",
    zIndex: 2,

    [theme.breakpoints.down("md")]: {
      maxWidth: "40em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "27em",
      top: "8em",
      left: "-3em",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "35em",
      top: "-2em",
      left: "50%",
      transform: "translate(-50%)",
    },
  },
  primaryHeading: {
    position: "absolute",
    right: "2em",
    top: "4.5em",
    zIndex: 9,

    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      top: "7em",
    },

    [theme.breakpoints.down("sm")]: {
      right: "1em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "1em",
      top: "8em",
    },
  },
  secondaryHeading: {
    fontSize: "3rem",
    lineHeight: 1.6,
    fontWeight: 700,
    position: "absolute",
    top: "8em",
    right: "4.75em",
    zIndex: 9,
    color: "#ffe4f1",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,

    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      color: "#fff",
      top: "11em",
    },

    [theme.breakpoints.down("sm")]: {
      right: "3.75em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "1em",
      top: "12em",
      right: 0,
      color: "#ffe4f1",
    },
  },

  btn: {
    ...theme.typography.btn,
    position: "absolute",
    top: "32em",
    right: "22em",
    zIndex: 9,
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },

    [theme.breakpoints.down("md")]: {
      top: "28em",
      right: "9em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "2em",
      top: "30em",
      right: 0,
    },
  },
  laundaryBasket: {
    position: "absolute",
    right: 0,
    width: "25em",
    bottom: 0,

    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
}));

const SlideTwo = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXXXXS = useMediaQuery("(max-width: 290px)");
  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      className={classes.parentGrid}
      direction={matchesXS ? "column" : "row"}
    >
      <Grid item className={classes.leftGridWrapper}>
        <Grid container direction="column">
          <Grid item>
            <div className={classes.circle} />
            <div className={classes.planetShapeSm} />
            <div className={classes.planetShape} />
            <img
              className={classes.slideImg}
              src={safeWashBaby2}
              alt="Cute baby places hand on the safewash liquid detergent gallon"
            />
            <div className={classes.squareBg} />
            <div className={classes.planetShapeMd} />
            <div className={classes.planetShapeLg} />
            <div
              className={`${classes.planetShapeSm} ${classes.planetShapeSmOne}`}
            />
            <div
              className={`${classes.planetShapeMd} ${classes.planetShapeMdOne}`}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <div
              className={`${classes.planetShapeSm} ${classes.planetShapeTwo}`}
            />
            <div className={`${classes.squareSmOne}`} />
            <div className={classes.planetShapeXL} />
            <Typography
              variant="h1"
              className={classes.primaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.75rem"
                  : matchesXXS
                  ? "1.85rem"
                  : undefined,
                top: matchesXXXXS ? "6em" : undefined,
              }}
            >
              Mild and Gentle on {!matchesXXXS && matchesXXS && <br />} your{" "}
              {!matchesXXS && <br />} baby's soft skin
            </Typography>
            <div className={classes.squareSm} />
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              className={classes.secondaryHeading}
              style={{
                fontSize: matchesXXS ? "1.85rem" : undefined,
                marginBottom: matchesXXXXS ? "2em" : undefined,
              }}
            >
              Happy Fragrance
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              classes={{ root: classes.btn }}
              style={{
                padding: !matchesXXS ? ".75em 2em" : ".75em",
                left: matchesXXXS ? "50%" : undefined,
                transform: matchesXXXS ? "translateX(-50%)" : undefined,
              }}
            >
              Find Distributor Around You?
            </Button>
            <div className={`${classes.squareSm} ${classes.squareSmTwo}`} />
          </Grid>
          <Grid item>
            <img
              src={laundaryBasket}
              className={classes.laundaryBasket}
              alt="Laundary basket with clothes ready to be washed"
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SlideTwo;
