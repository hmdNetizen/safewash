import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { VscQuote } from "react-icons/vsc";
import { IoTriangle } from "react-icons/io5";
import distributor1 from "../../assets/Mask Group.png";
import distributor2 from "../../assets/Mask Group-1.png";
import distributor3 from "../../assets/Mask Group-2.png";
import safewashLady from "../../assets/safewash-lady-rectangle.png";
import safewashLadyMobile from "../../assets/safewash-lady-mobile.png";
import playRectangle from "../../assets/Rectangle-40.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "10em 10em 5em",
    marginBottom: "10em",
    position: "relative",
    overflow: "hidden",

    [theme.breakpoints.only("md")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
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

  cardGrid: {
    position: "relative",
    "&:not(last-child)": {
      [theme.breakpoints.down("xs")]: {
        marginBottom: "5em",
      },
    },
  },

  card: {
    padding: "2em",
    borderRadius: 10,
    position: "relative",
    overflow: "visible",
    boxShadow: theme.shadows[5],
    zIndex: 9,
    height: "20em",
    left: "50%",
    transform: "translateX(-50%)",

    [theme.breakpoints.down("sm")]: {
      padding: "3em 4em 2em",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "3em 3em 2em",
    },
  },

  purpleOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.common.purple}`,
    left: "10%",
    top: "-3em",

    [theme.breakpoints.down("sm")]: {
      left: "1.5em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "2.5em",
    },
  },
  blueOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.common.blue}`,
    left: "10%",
    top: "-3em",

    [theme.breakpoints.down("sm")]: {
      left: "1.5em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "2.5em",
    },
  },
  pinkOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.primary.main}`,
    left: "10%",
    top: "-3em",

    [theme.breakpoints.down("sm")]: {
      left: "1.5em",
    },

    [theme.breakpoints.down("xs")]: {
      left: "2.5em",
    },
  },
  blurryCircleTop: {
    ...theme.typography.circle,
    bottom: "5em",
    left: "50%",
    transform: "translateX(-50%)",
    top: "18.5em",
  },
  blurryCircleMiddle: {
    ...theme.typography.circle,
    left: "75%",
    top: "0.5em",
    [theme.breakpoints.down("xs")]: {
      left: "85%",
      top: "-2.25em",
    },
  },
  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    right: "-2em",
    top: "50%",
  },
  squareBgOne: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "15em",
    left: 0,

    [theme.breakpoints.down("xs")]: {
      left: "-3em",
    },
  },
  squareBgTwo: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    right: "5em",
    bottom: 0,

    [theme.breakpoints.down("xs")]: {
      bottom: "-3em",
    },
  },
  cardImg: {
    width: 100,
    position: "absolute",
    top: "-2.8em",
    left: "-2.25em",

    [theme.breakpoints.down("xs")]: {
      left: "-1em",
    },
  },
  cardTitle: {
    fontSize: ".75rem",
    fontWeight: 700,
    color: theme.palette.secondary.main,
    marginLeft: "2em",
  },
  cardDescription: {
    fontSize: ".7rem",
    fontWeight: 600,
    marginLeft: "2em",
    marginBottom: "2em",
  },
  cardText: {
    fontSize: ".75rem",
    fontWeight: 600,
  },

  quotationMark: {
    fontSize: "3rem",
    position: "absolute",
    top: "2.3em",
    left: ".4em",

    [theme.breakpoints.down("sm")]: {
      top: "2.55em",
      left: "1em",
    },

    [theme.breakpoints.down("xs")]: {
      left: ".65em",
    },
  },

  posterGrid: {
    position: "relative",
    width: 879,
    height: 396,
    top: "5em",
    marginBottom: "5em",

    [theme.breakpoints.down("sm")]: {
      width: 338,
      height: 282,
    },

    [theme.breakpoints.down("xs")]: {
      width: "80%",
    },
  },
  greenRectangle: {
    ...theme.typography.rectangle,
    borderColor: theme.palette.secondary.main,
    transform: "translate(-50%, -50%) rotate(-2deg)",
    width: "100%",
    height: "100%",
  },

  pinkRectangle: {
    ...theme.typography.rectangle,
    borderColor: theme.palette.primary.main,
    transform: "translate(-50%, -50%) rotate(2deg)",
    width: "100%",
    height: "100%",
  },
  safewashLady: {
    width: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  safewashLadyMobile: {
    width: "100%",
    height: "100%",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  opaqueRectangle: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",

    [theme.breakpoints.down("sm")]: {
      maxWidth: 80,
    },
  },
  triangle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) rotate(90deg)",
  },
}));

const Testimonies = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXXXXS = useMediaQuery("(max-width: 280px)");
  const matchesXXXS = useMediaQuery("(max-width: 340px)");
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.parentGrid}
      style={{
        paddingLeft: matchesXXXXS ? "1em" : undefined,
        paddingRight: matchesXXXXS ? "1em" : undefined,
      }}
    >
      <Grid item style={{ marginBottom: "1em" }}>
        <Typography
          variant="h2"
          className={classes.primaryHeading}
          align="center"
        >
          Read Our Testimonies
        </Typography>
      </Grid>
      <Grid item style={{ marginBottom: "5em" }}>
        <Typography
          variant="body1"
          paragraph
          align="center"
          style={{ color: theme.palette.common.darkBrown }}
        >
          We use our knowledge and expertise to providethe most effecient,
          effective and environmentally {!matchesSM && <br />}
          friendly cleaning possible
        </Typography>
      </Grid>
      <Grid
        item
        container
        direction={matchesSM ? "column" : "row"}
        justify="center"
        alignItems="center"
        spacing={matchesXS ? 0 : matchesSM ? 10 : matchesMD ? 7 : 10}
      >
        {matchesSM && <div className={classes.blurryCircleTop} />}
        <Grid item className={classes.cardGrid}>
          {matchesSM && <div className={classes.squareSmOne} />}
          <Card
            className={classes.card}
            style={{
              paddingLeft: matchesXXXS ? "2em" : undefined,
              paddingRight: matchesXXXS ? ".5em" : undefined,
            }}
          >
            <div
              className={classes.purpleOutlineCircle}
              style={{
                width: matchesXXXS ? 70 : undefined,
                height: matchesXXXS ? 70 : undefined,
                left: matchesXXXS ? "13%" : undefined,
              }}
            />
            <img
              src={distributor1}
              alt="A snapshot of one of safewash's distributors"
              className={classes.cardImg}
              style={{
                width: matchesXXXS ? 70 : undefined,
                left: matchesXXXS ? 0 : undefined,
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.cardTitle}
              >
                Abdul Wasiu Modu
              </Typography>
              <Typography variant="body1" className={classes.cardDescription}>
                Laundry Owner
              </Typography>
              <VscQuote
                color={theme.palette.primary.main}
                size={20}
                className={classes.quotationMark}
                style={{ left: matchesXXXS ? ".3em" : undefined }}
              />
              <Typography variant="body1" className={classes.cardText}>
                I have tried it oooo, the {!matchesXXXS && <br />} thickness and
                smell is {!matchesXXXS && <br />} everything.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item className={classes.cardGrid}>
          {matchesSM && <div className={classes.blurryCircleMiddle} />}
          {matchesSM && (
            <div
              className={classes.squareBgOne}
              style={{ left: matchesXXXS ? "-1.5em" : undefined }}
            />
          )}
          <Card
            className={classes.card}
            style={{
              paddingLeft: matchesXXXS ? "2em" : undefined,
              paddingRight: matchesXXXS ? ".5em" : undefined,
            }}
          >
            <div
              className={classes.pinkOutlineCircle}
              style={{
                width: matchesXXXS ? 70 : undefined,
                height: matchesXXXS ? 70 : undefined,
                left: matchesXXXS ? "13%" : undefined,
              }}
            />
            <img
              src={distributor3}
              alt="A snapshot of one of safewash's distributors"
              className={classes.cardImg}
              style={{
                width: matchesXXXS ? 70 : undefined,
                left: matchesXXXS ? 0 : undefined,
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.cardTitle}
              >
                Abdul Wasiu Modu
              </Typography>
              <Typography variant="body1" className={classes.cardDescription}>
                A Nursing Mother
              </Typography>
              <VscQuote
                color={theme.palette.primary.main}
                size={20}
                className={classes.quotationMark}
                style={{ left: matchesXXXS ? ".3em" : undefined }}
              />
              <Typography variant="body1" className={classes.cardText}>
                Yeah I have bought after I {!matchesXXXS && <br />} gave birth
                because I feel
                {!matchesXXXS && <br />} my baby’s clothes{" "}
                {!matchesXXXS && <br />} deserve bqsafewash I and
                {!matchesXXXS && <br />} to protect his skin from{" "}
                {!matchesXXXS && <br />} rashes and allergies
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          style={{ position: matchesSM ? "relative" : undefined, zIndex: 9 }}
        >
          <Card
            className={classes.card}
            style={{
              paddingLeft: matchesXXXS ? "2em" : undefined,
              paddingRight: matchesXXXS ? ".5em" : undefined,
            }}
          >
            <div
              className={classes.blueOutlineCircle}
              style={{
                width: matchesXXXS ? 70 : undefined,
                height: matchesXXXS ? 70 : undefined,
                left: matchesXXXS ? "13%" : undefined,
              }}
            />
            <img
              src={distributor2}
              alt="A snapshot of one of safewash's distributors"
              className={classes.cardImg}
              style={{
                width: matchesXXXS ? 70 : undefined,
                left: matchesXXXS ? 0 : undefined,
              }}
            />
            <CardContent>
              <Typography
                variant="h6"
                gutterBottom
                className={classes.cardTitle}
              >
                Abdul Wasiu Modu
              </Typography>
              <Typography variant="body1" className={classes.cardDescription}>
                Laundry Owner
              </Typography>
              <VscQuote
                color={theme.palette.primary.main}
                size={20}
                className={classes.quotationMark}
                style={{ left: matchesXXXS ? ".3em" : undefined }}
              />
              <Typography variant="body1" className={classes.cardText}>
                I tried bqsafewash {!matchesXXXS && <br />} yesterday! It was
                the {!matchesXXXS && <br />} Bomb! My customers are{" "}
                {!matchesXXXS && <br />} happy and coming back{" "}
                {!matchesXXXS && <br />} for more
              </Typography>
            </CardContent>
          </Card>
          {matchesSM && <div className={classes.squareBgTwo} />}
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.posterGrid}
        style={{
          width: matchesXXS ? "100%" : undefined,
        }}
      >
        {!matchesSM ? (
          <img
            src={safewashLady}
            alt="A poster of a safewash customer holding a laundry hand rail"
            className={classes.safewashLady}
          />
        ) : (
          <img
            src={safewashLadyMobile}
            alt="A poster of a safewash customer holding a laundry hand rail"
            className={classes.safewashLadyMobile}
            style={{
              width: matchesXXS ? "100%" : undefined,
            }}
          />
        )}
        <div className={classes.greenRectangle} />
        <div className={classes.pinkRectangle} />
        <img
          src={playRectangle}
          alt="An opaque rectangle wrapping around the triangle"
          className={classes.opaqueRectangle}
        />
        <IoTriangle
          color={theme.palette.primary.main}
          size={matchesSM ? 20 : 30}
          className={classes.triangle}
          title="play"
        />
      </Grid>
    </Grid>
  );
};

export default Testimonies;
