import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import greenWire from "../../assets/Vector-14.png";
import pinkWire from "../../assets/Vector-13.png";
import shield from "../../assets/shield.png";
import leaves from "../../assets/leaves.png";
import special from "../../assets/special.png";
import bubbles from "../../assets/bubbles.png";
import babyImg from "../../assets/safewash-baby-trimmed.png";
import babyImgBlurredOut from "../../assets/BQ-Safewash-baby-blurred-out.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "5em 7em",

    background: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(131.41deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 15.33%, rgba(255, 210, 231, 0.9) 35.21%, rgba(254, 168, 208, 0.9) 51.11%, rgba(254, 166, 207, 0.9) 69.85%, rgba(255, 255, 255, 0.9) 98.24%, rgba(255, 255, 255, 0.9) 109.03%), url(${babyImgBlurredOut})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",

    [theme.breakpoints.only("md")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
      backgroundPosition: "center top",
      backgroundSize: "cover",
    },
  },
  textContentWrapper: {
    marginTop: ".5em",
    marginBottom: "1em",
  },
  primaryHeadingWrapper: {
    marginBottom: "2em",

    [theme.breakpoints.down("sm")]: {
      marginTop: "8em",
    },

    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  primaryHeading: {
    color: theme.palette.common.blue,

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  secondaryHeading: {
    fontWeight: 600,
    color: theme.palette.common.blue,
  },
  description: {
    fontWeight: 600,
    color: theme.palette.common.magenta,
  },
  green: {
    color: theme.palette.secondary.main,
  },

  purple: {
    color: theme.palette.common.purple,
  },

  turquoise: {
    color: theme.palette.common.turquoise,
  },
  greenWire: {
    ...theme.typography.wire,
    transform: "rotate(-5deg)",
    top: "-1em",
    left: "-2em",
    zIndex: 9,

    [theme.breakpoints.down("md")]: {
      maxWidth: "20em",
      left: "2em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
      left: "50%",
      transform: "translateX(-55%) rotate(-5deg)",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "17em",
      transform: "translate(-55%, 10px) rotate(-5deg)",
    },
  },
  pinkWire: {
    ...theme.typography.wire,
    zIndex: 9,

    [theme.breakpoints.down("md")]: {
      maxWidth: "20em",
      left: "3em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
      left: "50%",
      transform: "translateX(-50%)",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "18em",
    },
  },
  babyImg: {
    ...theme.typography.trimmedBabyImg,
    maxWidth: "30em",

    [theme.breakpoints.down("md")]: {
      maxWidth: "18em",
      left: "3em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
      left: "50%",
      transform: "translateX(-50%)",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "18em",
      left: "50%",
      transform: "translateX(-50%)",
      top: "0.2em",
    },
  },

  PlanetShapeXL: {
    ...theme.typography.planetShape,
    width: 90,
    height: 90,
    top: "85%",
    left: "25em",
    "&::after": {
      content: '""',
      display: "block",
      width: 75,
      height: 75,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(253,189,213,1) 100%)",
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -60%)",
    },
    [theme.breakpoints.down("md")]: {
      top: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(253,189,213,0.5) 100%)",
      width: 60,
      height: 60,
      top: "75em",
      left: 0,

      "&::after": {
        width: 45,
        height: 45,
      },

      [theme.breakpoints.down("xs")]: {
        top: "68em",
        width: 40,
        height: 40,

        "&::after": {
          width: 30,
          height: 30,
        },
      },
    },
  },
  squareSm: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: 0,
  },
  circle: {
    ...theme.typography.circle,
    bottom: "5em",
    left: "53%",
    top: 0,
    filter: "blur(1.65px)",
  },
}));

const Features = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXXXXS = useMediaQuery("(max-width: 290px)");
  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMDX = useMediaQuery("(max-width: 1096px)");
  const matchesMdOnly = useMediaQuery(theme.breakpoints.only("md"));

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.parentGrid}
      style={{
        paddingLeft: matchesXXXXS ? "1em" : undefined,
        paddingRight: matchesXXXXS ? "1em" : undefined,
      }}
    >
      <Hidden mdUp>
        <Grid item style={{ position: "relative", height: "22em" }}>
          <img
            src={greenWire}
            alt="A green wireframe around a baby"
            className={classes.greenWire}
            style={{
              maxWidth: matchesXXXS ? "15em" : undefined,
              transform: matchesXXXS
                ? "translateX(-55%) rotate(-5deg)"
                : undefined,
            }}
          />
          <img
            src={pinkWire}
            alt="A pink wireframe around a baby"
            className={classes.pinkWire}
            style={{ maxWidth: matchesXXXS ? "15em" : undefined }}
          />

          <img
            src={babyImg}
            alt="A beautiful baby girl sitting comfortably in a basket"
            className={classes.babyImg}
            style={{ maxWidth: matchesXXXS ? "15em" : undefined }}
          />

          <div
            className={classes.PlanetShapeXL}
            style={{
              top: matchesXXXXS
                ? "78em"
                : matchesXXXS
                ? "72em"
                : matchesXXS
                ? "71.5em"
                : undefined,
            }}
          />
        </Grid>
      </Hidden>
      <Grid item className={classes.primaryHeadingWrapper}>
        <Typography
          variant="h2"
          align="center"
          className={classes.primaryHeading}
        >
          Notable Features
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          paragraph
          align="center"
          style={{ color: theme.palette.common.brown }}
        >
          We are moved to create a premium, harmful chemical free, sparkling
          clean liquid laundry soap {!matchesSM && <br />} clinically safe for
          babies and children’s health.
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          style={{ marginTop: "5em" }}
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "center" : "space-between"}
        >
          <Hidden smDown>
            <Grid
              item
              style={{
                position: "relative",
                top: matchesMdOnly ? "7em" : undefined,
              }}
            >
              <img
                src={greenWire}
                alt="A green wireframe around a baby"
                className={classes.greenWire}
              />
              <img
                src={pinkWire}
                alt="A pink wireframe around a baby"
                className={classes.pinkWire}
              />
              <img
                src={babyImg}
                alt="A beautiful baby girl sitting comfortably in a basket"
                className={classes.babyImg}
              />
              <div className={classes.PlanetShapeXL} />
            </Grid>
          </Hidden>
          <Grid
            item
            style={{
              maxWidth: matchesSM ? null : matchesMDX ? "25em" : null,
            }}
          >
            <Grid
              container
              direction="column"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <img src={shield} alt="Protection shield icon" />
              </Grid>
              <Grid item className={classes.textContentWrapper}>
                <Typography variant="h5" className={classes.secondaryHeading}>
                  Protection
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.description}
                  align={matchesSM ? "center" : undefined}
                >
                  We are moved to create a premium, harmful chemical free,{" "}
                  {!matchesMDX && <br />} sparkling clean liquid laundry soap.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              style={{
                marginTop: "5em",
                marginBottom: "5em",
                maxWidth: matchesSM ? null : matchesMDX ? "25em" : null,
              }}
            >
              <Grid
                container
                direction="column"
                alignItems={matchesSM ? "center" : undefined}
              >
                <Grid item>
                  <img
                    src={leaves}
                    alt="A leave icon portraying the environmental friendliness of safewash liquid"
                  />
                </Grid>
                <Grid item className={classes.textContentWrapper}>
                  <Typography
                    variant="h5"
                    className={`${classes.secondaryHeading} ${classes.green}`}
                  >
                    Eco-friendly
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    paragraph
                    align={matchesSM ? "center" : undefined}
                    className={classes.description}
                  >
                    We are moved to create a premium, harmful chemical free,{" "}
                    {!matchesMDX && <br />} sparkling clean liquid laundry soap.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "flex-start" : "space-between"}
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid
            item
            style={{ order: 2, position: matchesSM ? "relative" : undefined }}
          >
            <Grid
              container
              direction="column"
              alignItems={matchesSM ? "center" : "flex-start"}
            >
              {matchesSM && <div className={classes.squareSm} />}
              {matchesSM && <div className={classes.circle} />}
              <Grid item>
                <img src={bubbles} alt="A bubble icon" />
              </Grid>
              <Grid item className={classes.textContentWrapper}>
                <Typography
                  variant="h5"
                  className={`${classes.secondaryHeading} ${classes.purple}`}
                >
                  High Concentration
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  maxWidth: matchesSM ? null : matchesMDX ? "25em" : null,
                }}
              >
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.description}
                  align={matchesSM ? "center" : undefined}
                >
                  We are moved to create a premium, harmful chemical free,{" "}
                  {!matchesMDX && <br />} sparkling clean liquid laundry soap .
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              alignItems={matchesSM ? "center" : undefined}
            >
              <Grid item>
                <img
                  src={special}
                  alt="A star badge icon expressing the uniqueness of safewash detergent"
                />
              </Grid>
              <Grid item className={classes.textContentWrapper}>
                <Typography
                  variant="h5"
                  className={`${classes.secondaryHeading} ${classes.turquoise}`}
                >
                  Unique
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  marginBottom: matchesSM ? "5em" : 0,
                  maxWidth: matchesSM ? null : matchesMDX ? "25em" : null,
                }}
              >
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.description}
                  align={matchesSM ? "center" : undefined}
                >
                  We are moved to create a premium, harmful chemical free,{" "}
                  {!matchesMDX && <br />} sparkling clean liquid laundry soap .
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Features;
