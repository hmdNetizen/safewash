import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import safeWashBaby2 from "../../assets/safewash-baby-2.png";
import laundryBasket from "../../assets/laundary_basket.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "50em",
    width: "100%",
    background:
      "linear-gradient(212.16deg, rgba(254, 150, 198, 0.2) 10.33%, rgba(254, 150, 198, 0.3) 31.35%, rgba(255, 255, 255, 0.5) 83.91%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(213.01deg, #FFFFFF 4.13%, rgba(254, 150, 198, 0.5) 80.31%)",
    position: "relative",
    overflow: "hidden",
  },
  slideImgWrapperGrid: {
    position: "absolute",
    left: "10em",
    top: 0,

    [theme.breakpoints.down("md")]: {
      left: "2em",
    },

    [theme.breakpoints.down("sm")]: {
      top: "50%",
      transform: "translateY(-50%)",
      left: 0,
    },

    [theme.breakpoints.down("xs")]: {
      top: "-2em",
      left: "50%",
      transform: "translate(-40%, 0)",
    },
  },
  slideImg: {
    maxWidth: "45em",

    [theme.breakpoints.down("md")]: {
      maxWidth: "40em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "35em",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "30em",
    },
  },
  textContentGrid: {
    height: "100%",
    width: "100%",
    position: "relative",
  },
  primaryHeadingWrapper: {
    position: "absolute",
    right: "17em",
    top: "10em",

    [theme.breakpoints.down("md")]: {
      right: "9em",
    },

    [theme.breakpoints.down("sm")]: {
      right: "3em",
    },

    [theme.breakpoints.down("xs")]: {
      top: "25em",
      right: 0,
      left: "2em",
    },
  },
  primaryHeading: {
    fontSize: "2.5rem",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },
  },
  secondaryHeadingWrapper: {
    position: "absolute",
    top: "22em",
    right: "29.7em",

    [theme.breakpoints.down("md")]: {
      right: "21.7em",
    },

    [theme.breakpoints.down("sm")]: {
      right: "6.2em",
      top: "20em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "33em",
      right: 0,
      left: "2em",
    },
  },
  secondaryHeading: {
    lineHeight: 1.6,
    fontWeight: 700,
    color: "#ffe4f1",
    textShadow: `-1px -1px 0 ${theme.palette.primary.main}, 1px -1px 0 ${theme.palette.primary.main}, -1px  1px 0 ${theme.palette.primary.main}, 1px  1px 0 ${theme.palette.primary.main}`,

    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
      color: "#fff",
    },
  },
  btnWrapperGrid: {
    position: "absolute",
    top: "30em",
    right: "28.8em",

    [theme.breakpoints.down("md")]: {
      right: "20.8em",
    },

    [theme.breakpoints.down("sm")]: {
      right: "5.2em",
      top: "28em",
    },
    [theme.breakpoints.down("xs")]: {
      top: "40em",
      right: 0,
      left: "2em",
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
  },
  laundryBasketGrid: {
    position: "absolute",
    right: 0,
    bottom: "5em",

    [theme.breakpoints.down("sm")]: {
      bottom: "-5em",
    },

    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  laundryBasket: {
    maxWidth: "25em",
  },
}));

const SlideTwo = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid
      container
      className={classes.parentGrid}
      direction={matchesXS ? "column" : "row"}
    >
      <Grid
        item
        className={classes.slideImgWrapperGrid}
        style={{
          top: matchesXXXS ? 0 : undefined,
          transform: matchesXXS ? "translate(-50%, 0)" : undefined,
        }}
      >
        <img
          className={classes.slideImg}
          src={safeWashBaby2}
          alt="Cute baby places hand on the safewash liquid detergent gallon"
          style={{
            maxWidth: matchesXXXS ? "23em" : matchesXXS ? "27em" : undefined,
          }}
        />
      </Grid>
      <Grid item className={classes.textContentGrid}>
        <Grid container direction="column">
          <Grid
            item
            className={classes.primaryHeadingWrapper}
            style={{
              top: matchesXXS ? "23em" : undefined,
              right: matchesXXS ? "1em" : undefined,
              left: matchesXXS ? "1em" : undefined,
            }}
          >
            <Typography
              variant="h1"
              className={classes.primaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.45rem"
                  : matchesXXS
                  ? "1.65rem"
                  : undefined,
              }}
            >
              Mild and Gentle on your {!matchesXXXS && <br />} baby's soft skin
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.secondaryHeadingWrapper}
            style={{
              top: matchesXXS ? "31em" : undefined,
              left: matchesXXS ? "1em" : undefined,
            }}
          >
            <Typography
              variant="h2"
              className={classes.secondaryHeading}
              style={{
                fontSize: matchesXXXS
                  ? "1.45rem"
                  : matchesXXS
                  ? "1.65rem"
                  : undefined,
              }}
            >
              Happy Fragrance
            </Typography>
          </Grid>
          <Grid
            item
            className={classes.btnWrapperGrid}
            style={{
              top: matchesXXS ? "38em" : undefined,
              left: matchesXXS ? "1em" : undefined,
            }}
          >
            <Button
              variant="contained"
              component={Link}
              to="/signup"
              className={classes.btn}
            >
              Become A Distributor
            </Button>
          </Grid>
          <Grid item className={classes.laundryBasketGrid}>
            {!matchesXS && (
              <img
                src={laundryBasket}
                alt="Laundary basket with clothes ready to be washed"
                className={classes.laundryBasket}
              />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default SlideTwo;
