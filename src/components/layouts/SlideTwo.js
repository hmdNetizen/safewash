import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import safeWashBaby2 from "../../assets/safewash-baby-2.png";
import laundaryBasket from "../../assets/laundary_basket.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    overflow: "hidden",
    paddingBottom: "5em",
    background:
      "linear-gradient(212.16deg, rgba(254, 150, 198, 0.2) 10.33%, rgba(254, 150, 198, 0.3) 31.35%, rgba(255, 255, 255, 0.5) 83.91%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(213.01deg, #FFFFFF 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
  },
  leftGridWrapper: {
    position: "relative",
  },
  circle: {
    ...theme.typography.circle,
    top: 73,
    left: 90,
  },
  squareBg: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "18em",
    left: "11em",
  },
  squareSm: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "24.5em",
    right: "26.5em",
  },
  squareSmOne: {
    right: "45.5em",
    top: "25em",
  },
  squareSmTwo: {
    top: "44em",
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
  },
  planetShapeSmOne: {
    top: "3em",
    left: "43em",
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
  },
  planetShapeMdOne: {
    top: "17em",
    left: "30em",
    width: 55,
    height: 55,
    opacity: 0.5,

    "&::after": {
      width: 35,
      height: 35,
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
  },
  slideImg: {
    position: "absolute",
    left: "5em",
  },
  primaryHeading: {
    position: "absolute",
    right: "2em",
    top: "4.5em",
  },
  secondaryHeading: {
    fontSize: "3rem",
    lineHeight: 1.6,
    fontWeight: 700,
    position: "absolute",
    top: "8em",
    right: "4.75em",
    color: "#ffe4f1",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,
  },

  btn: {
    ...theme.typography.btn,
    position: "absolute",
    top: "32em",
    right: "22em",
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },
  },
  laundaryBasket: {
    position: "absolute",
    right: 0,
    width: "25em",
    bottom: 0,
  },
}));

const SlideTwo = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.parentGrid}>
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
            <div className={`${classes.squareSm} ${classes.squareSmOne}`} />
            <div className={classes.planetShapeXL} />
            <Typography variant="h1" className={classes.primaryHeading}>
              Mild and Gentle on your <br /> baby's soft skin
            </Typography>
            <div className={classes.squareSm} />
            <div className={`${classes.squareSm} ${classes.squareSmOne}`} />
          </Grid>
          <Grid item>
            <Typography variant="h2" className={classes.secondaryHeading}>
              Happy Fragrance
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" classes={{ root: classes.btn }}>
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
