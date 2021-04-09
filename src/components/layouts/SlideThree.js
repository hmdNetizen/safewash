import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import safeWashBaby3 from "../../assets/safewash-baby-3.png";
import ringWire from "../../assets/Vector 22.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "100vh",
    textTranform: "capitalize",
    background:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(146.99deg, rgba(255, 255, 255, 0.5) 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",
    overflow: "hidden",
  },
  textContentWrapper: {
    marginLeft: "10em",
  },
  secondaryHeading: {
    fontSize: "2.5rem",
    lineHeight: 1.6,
    fontWeight: 700,
    color: "#fff",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,
  },
  secondaryHeadingWrapper: {
    marginTop: "2em",
    marginBottom: "4em",
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
  slideImg: {
    maxWidth: "22em",
    position: "absolute",
    top: "-14em",
    left: "6em",
    transform: "scale(1.2)",
    filter: `drop-shadow(0px 4px 30px ${theme.palette.primary.main})`,
  },
  ringCircleBackground: {
    position: "absolute",
    maxWidth: "32em",
    top: "-12em",
    left: "2em",
  },
  squareSm: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "15em",
    left: "-15em",
  },
  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: "40em",
    top: "20em",
  },
  squareBgOne: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "-20.5em",
    left: "10em",
  },
  circle: {
    ...theme.typography.circle,
    left: "-10em",
    top: "7em",
  },
  circleOne: {
    ...theme.typography.circle,
    left: "40em",
    top: "18em",
  },
  planetShapeSm: {
    width: 30,
    height: 30,
    top: "15em",
    left: "10em",
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
  },
  planetShapeSmOne: {
    ...theme.typography.planetShape,
    width: 30,
    height: 30,
    top: "12em",
    left: 0,

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
  },
}));
const SlideThree = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.parentGrid} alignItems="center">
      <Grid item>
        <Grid
          container
          direction="column"
          className={classes.textContentWrapper}
        >
          <Grid item>
            <Typography variant="h1">
              Keeps your baby smiling <br /> all day
            </Typography>
            <div className={classes.squareSmOne} />
          </Grid>
          <Grid item className={classes.secondaryHeadingWrapper}>
            <Typography variant="h2" className={classes.secondaryHeading}>
              Zero Skin Irritations
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" classes={{ root: classes.btn }}>
              Become A Distributor
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        style={{
          position: "relative",
        }}
      >
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
