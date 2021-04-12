import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import greenWire from "../../assets/Vector-14.png";
import pinkWire from "../../assets/Vector-13.png";
import shield from "../../assets/shield.png";
import leaves from "../../assets/leaves.png";
import special from "../../assets/special.png";
import bubbles from "../../assets/bubbles.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "5em 7em",
    background:
      "linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(131.41deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.9) 15.33%, rgba(255, 210, 231, 0.9) 35.21%, rgba(254, 168, 208, 0.9) 51.11%, rgba(254, 166, 207, 0.9) 69.85%, rgba(255, 255, 255, 0.9) 98.24%, rgba(255, 255, 255, 0.9) 109.03%)",

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },
  textContentWrapper: {
    marginTop: ".5em",
    marginBottom: "1em",
  },
  primaryHeadingWrapper: {
    marginBottom: "2em",
  },
  primaryHeading: {
    color: theme.palette.common.blue,
  },
  secondaryHeading: {
    fontWeight: 600,
    color: theme.palette.common.blue,
  },
  description: {
    fontWeight: 600,
  },
  greenWire: {
    ...theme.typography.wire,
    transform: "rotate(-5deg)",
    top: "-1em",
    left: "-2em",

    [theme.breakpoints.down("xs")]: {
      maxWidth: "20em",
    },
  },
  pinkWire: {
    ...theme.typography.wire,

    [theme.breakpoints.down("xs")]: {
      maxWidth: "20em",
    },
  },
  planetShapeXL: {
    ...theme.typography.planetShape,
    width: 90,
    height: 90,
    bottom: 0,
    right: 0,
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
}));

const Features = () => {
  const classes = useStyles();
  const theme = useTheme();
  //   const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      direction="column"
      justify="center"
      className={classes.parentGrid}
    >
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
        <Typography variant="body1" paragraph align="center">
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
          <Grid item style={{ position: "relative" }}>
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
            {/* <div className={classes.planetShapeXL} /> */}
          </Grid>
          <Grid item>
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
                >
                  We are moved to create a premium, harmful chemical free,{" "}
                  <br /> sparkling clean liquid laundry soap.
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: "5em", marginBottom: "5em" }}>
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
                  <Typography variant="h5" className={classes.secondaryHeading}>
                    Eco-friendly
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body1"
                    paragraph
                    className={classes.description}
                  >
                    We are moved to create a premium, harmful chemical free,{" "}
                    <br /> sparkling clean liquid laundry soap.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "5em" }}>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "flex-start" : "space-between"}
          alignItems={matchesSM ? "center" : undefined}
        >
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <img src={bubbles} alt="A bubble icon" />
              </Grid>
              <Grid item className={classes.textContentWrapper}>
                <Typography variant="h5" className={classes.secondaryHeading}>
                  High Concentration
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.description}
                >
                  We are moved to create a premium, harmful chemical free,{" "}
                  <br /> sparkling clean liquid laundry soap .
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
                <Typography variant="h5" className={classes.secondaryHeading}>
                  Unique
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  className={classes.description}
                >
                  We are moved to create a premium, harmful chemical free,{" "}
                  <br /> sparkling clean liquid laundry soap .
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
