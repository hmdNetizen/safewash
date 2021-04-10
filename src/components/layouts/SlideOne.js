import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles /*useTheme */ } from "@material-ui/core/styles";
import safeWashBaby1 from "../../assets/safewash-baby-1.png";
const useStyles = makeStyles((theme) => ({
  parentGrid: {
    overflow: "hidden",
    paddingBottom: "10em",
    paddingTop: "5em",
    background:
      "linear-gradient(163deg, rgba(33,164,196,0.23012955182072825) 0%, rgba(255,255,255,0.3561799719887955) 16%, rgba(255,255,255,0.21332282913165268) 59%, rgba(254,150,198,0.3225665266106442) 88%, rgba(255,255,255,1) 100%)",
    zIndex: -2,

    [theme.breakpoints.down("md")]: {
      paddingTop: "10em",
    },
  },
  textContentWrapper: {
    marginLeft: "10em",
    marginTop: "5em",

    // This style is applied to all screen sizes below 1280px
    [theme.breakpoints.down("md")]: {
      marginLeft: "5em",
    },

    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("sm")]: {
      marginLeft: "2em",
    },

    [theme.breakpoints.down("xs")]: {
      marginLeft: "1em",
    },
  },
  circle: {
    ...theme.typography.circle,
    top: "4em",
    left: "5em",

    [theme.breakpoints.down("md")]: {
      left: "20%",
      top: "3em",
      transform: "translateX(-20%)",
    },
    [theme.breakpoints.down("sm")]: {
      left: "40%",
    },

    [theme.breakpoints.down("xs")]: {
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  secondaryHeadingWrapper: {
    marginTop: "2em",
    marginBottom: "2em",

    [theme.breakpoints.down("md")]: {
      marginBottom: "4em",
    },
  },
  primaryHeading: {
    position: "relative",
    zIndex: 1,
    // This style is applied to all screen sizes below 1280px
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },
    // This style is applied to all screen sizes below 600px
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  secondaryHeading: {
    fontSize: "3rem",
    lineHeight: 1.6,
    fontWeight: 700,
    color: "#fff",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,

    // This style is applied to all screen sizes below 1280px
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },

    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("md")]: {
      fontSize: "1.75rem",
    },
    // This style is applied to all screen sizes below 600px
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
  },
  squareSm: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "19.5em",
    left: "41em",

    [theme.breakpoints.down("md")]: {
      left: "25em",
      top: "21.5em",
    },

    [theme.breakpoints.down("sm")]: {
      left: "20em",
      top: "20.8em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "20em",
      top: "30em",
    },
  },
  squareSmOne: {
    top: "36em",
    left: "34em",

    [theme.breakpoints.down("md")]: {
      top: "20%",
      left: "50%",
      transform: "translateX(-50%)",
    },

    [theme.breakpoints.down("sm")]: {
      left: "2em",
      top: "12em",
    },
  },
  squareTwo: {
    top: "37em",
    left: "45em",

    [theme.breakpoints.down("md")]: {
      left: "30em",
      top: "32em",
    },

    [theme.breakpoints.down("sm")]: {
      left: "35em",
      top: "30em",
    },
  },
  squareBg: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "23em",
    left: "5em",
    filter: "blur(2px)",

    [theme.breakpoints.down("md")]: {
      left: 0,
    },

    [theme.breakpoints.down("sm")]: {
      top: "29em",
      left: "2em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "30em",
      left: "2em",
    },
  },
  squareBgOne: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "1em",
    left: "60em",
    filter: "blur(2px)",

    [theme.breakpoints.down("md")]: {
      left: "80%",
    },

    [theme.breakpoints.down("xs")]: {
      display: "none",
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
      padding: ".5em",
      fontSize: ".9rem",
    },
  },
  slideImg: {
    maxWidth: "55em",
    position: "absolute",
    bottom: 0,
    transform: "scale(1.2)",
    filter: `drop-shadow(0px 4px 30px ${theme.palette.primary.main})`,

    // This style is applied to all screen sizes below 1280px
    [theme.breakpoints.down("md")]: {
      maxWidth: "35em",
      bottom: 0,
      right: 0,
      transform: "scale(1.3)",
    },
    // This style is applied to all screen sizes below 960px
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
      transform: "scale(1.4)",
      bottom: "4em",
      right: 0,
      // zIndex: -1,
    },

    // This style is applied to all screen sizes below 600px
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

const SlideOne = () => {
  const classes = useStyles();
  // const theme = useTheme();

  // MEDIA QUERIES FOR DIFFERENT BREAKPOINTS
  const matchesSMX = useMediaQuery("(max-width: 760px)");
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesXXS = useMediaQuery("(max-width: 450px)");

  return (
    <Grid
      container
      className={classes.parentGrid}
      alignItems={!matchesSMX ? "center" : "flex-start"}
      direction={matchesSMX ? "column" : "row"}
    >
      <Grid item className={classes.leftGridWrapper}>
        <Grid
          container
          direction="column"
          className={classes.textContentWrapper}
        >
          <div className={classes.circle} />
          <Grid item>
            <Typography variant="h1" className={classes.primaryHeading}>
              A liquid laundary {matchesXXS && <br />} detergent{" "}
              {!matchesXXS && <br />} specifically {matchesXXS && <br />}{" "}
              formulated for
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
              Find Distributors Around You?
            </Button>
          </Grid>
          <div className={`${classes.squareSm} ${classes.squareSmOne}`} />
          <div className={`${classes.squareSm} ${classes.squareTwo}`} />
        </Grid>
      </Grid>
      <Grid item>
        <div className={classes.squareBgOne} />
        {!matchesSMX && (
          <img
            src={safeWashBaby1}
            alt="A cute baby sitting down"
            className={classes.slideImg}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default SlideOne;
