import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import safeWashLady from "../../assets/safewash-lady-1.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "100vh",
    textTranform: "capitalize",
    position: "relative",
    zIndex: -3,
    background:
      "linear-gradient(163deg, rgba(33,164,196,0.23012955182072825) 1%, rgba(255,255,255,0.3561799719887955) 29%, rgba(255,255,255,0.06766456582633051) 51%, rgba(254,150,198,0.25253851540616246) 69%, rgba(255,216,234,0.5326505602240896) 89%, rgba(255,255,255,0.44861694677871145) 100%)",
    overflow: "hidden",
  },
  textContentWrapper: {
    marginLeft: "10em",
  },
  planetShapeXL: {
    ...theme.typography.planetShape,
    width: 90,
    height: 90,
    top: "-5em",
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
  },
  circleSm: {
    ...theme.typography.circle,
    top: "26em",
    width: 30,
    height: 30,
    filter: "blur(1px)",
    zIndex: -1,
    left: "9em",
  },
  circleSmOne: {
    left: "79em",
    zIndex: -3,
  },
  circleMd: {
    ...theme.typography.circle,
    width: 45,
    height: 45,
    filter: "blur(1px)",
    left: "42em",
    top: "32em",
  },
  circleMdOne: {
    left: "90em",
    top: "40em",
    width: 60,
    height: 60,
  },
  squareBg: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "10em",
    left: "52em",
    zIndex: -3,
  },
  squareSm: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "10em",
    left: "85em",
    filter: "blur(1px)",
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
    maxWidth: "60em",
    position: "absolute",
    transform: "scale(1.5)",
    bottom: "5em",
    right: "23em",
    zIndex: -2,
  },
}));

const SlideFour = () => {
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
            <div className={classes.planetShapeXL} />
            <Typography variant="h1" className={classes.primaryHeading}>
              Remove 99% Food and <br /> Tough Stains
            </Typography>
          </Grid>
          <Grid item className={classes.secondaryHeadingWrapper}>
            <div className={classes.circleSm} />
            <Typography variant="h2" className={classes.secondaryHeading}>
              Preserve Clothing Colors
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" classes={{ root: classes.btn }}>
              Find Distributors Around You?
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <div className={classes.squareBg} />
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
