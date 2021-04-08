import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import safeWashBaby1 from "../../assets/safewash-baby-1.png";
const useStyles = makeStyles((theme) => ({
  parentGrid: {
    overflow: "hidden",
    background: "rgba(254,150,198, .3)",
    paddingBottom: "5em",
    background:
      "linear-gradient(163deg, rgba(33,164,196,0.23012955182072825) 0%, rgba(255,255,255,0.3561799719887955) 16%, rgba(255,255,255,0.21332282913165268) 59%, rgba(254,150,198,0.3225665266106442) 88%, rgba(255,255,255,1) 100%)",
    [theme.breakpoints.up("lg")]: {
      height: "100vh",
    },
  },
  leftGridWrapper: {
    position: "relative",
  },
  contentWrapper: {
    marginLeft: "10em",
    marginTop: "12em",
  },
  circle: {
    width: 53,
    height: 53,
    borderRadius: "50%",
    border: `1px solid ${theme.palette.common.pink}`,
    filter: "blur(2px)",
    position: "absolute",
    top: 73,
    left: 90,
  },
  primaryHeadingWrapper: {
    marginBottom: "2em",
  },
  secondaryHeadingWrapper: {
    marginBottom: "2em",
  },
  primaryHeading: {
    color: theme.palette.primary.main,
    lineHeight: 1.5,
  },
  secondaryHeading: {
    fontSize: "2.5rem",
    lineHeight: 1.6,
    fontWeight: 700,
    color: "#fff",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,
  },
  squareSm: {
    ...theme.typography.square,
    width: 21,
    height: 21,
    top: "19.8em",
    left: "41em",
  },
  squareSmOne: {
    top: "36em",
    left: "34em",
  },
  squareTwo: {
    top: "37em",
    left: "45em",
  },
  squareBg: {
    ...theme.typography.square,
    width: 51,
    height: 51,
    top: "22.5em",
    left: "5em",
  },
  squareBgOne: {
    top: "1em",
  },
  btn: {
    background: theme.palette.secondary.main,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    color: "#fff",
    textTransform: "none",
    fontFamily: "Gilroy-Thin",
    fontWeight: 700,
    padding: ".75em 2em",

    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },
  },
  backgroundImg: {
    maxWidth: "40em",
    position: "absolute",
    bottom: "-3em",
    transform: "scale(1.2)",
    filter: "drop-shadow(0px 4px 30px #FE96C6)",
  },
}));

const SlideOne = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.parentGrid}>
      <Grid item className={classes.leftGridWrapper}>
        <Grid container direction="column" className={classes.contentWrapper}>
          <div className={classes.circle} />
          <Grid item className={classes.primaryHeadingWrapper}>
            <Typography variant="h1" className={classes.primaryHeading}>
              A liquid laundary detergent <br /> specifically formulated for
            </Typography>
          </Grid>
          <div className={classes.squareSm} />
          <Grid item className={classes.secondaryHeadingWrapper}>
            <Typography variant="h2" className={classes.secondaryHeading}>
              Babies and Children <br /> Clothing
            </Typography>
            <div className={classes.squareBg} />
          </Grid>
          <Grid item>
            <Button variant="contained" classes={{ root: classes.btn }}>
              Find Distributors around you?
            </Button>
          </Grid>
          <div className={`${classes.squareSm} ${classes.squareSmOne}`} />
          <div className={`${classes.squareSm} ${classes.squareTwo}`} />
        </Grid>
      </Grid>
      <Grid item style={{ position: "relative" }}>
        <div className={`${classes.squareBg} ${classes.squareBgOne}`} />
        <img
          src={safeWashBaby1}
          alt="A cute baby sitting down"
          className={classes.backgroundImg}
        />
      </Grid>
    </Grid>
  );
};

export default SlideOne;
