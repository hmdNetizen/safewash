import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import distributor1 from "../../assets/Mask Group.png";
import distributor2 from "../../assets/Mask Group-1.png";
import distributor3 from "../../assets/Mask Group-2.png";
import { VscQuote } from "react-icons/vsc";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "10em 7em 5em",

    [theme.breakpoints.only("md")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: "5em",
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

  card: {
    padding: "2em",
    borderRadius: 5,
    position: "relative",
    overflow: "visible",
    boxShadow: theme.shadows[5],
    height: "20em",

    [theme.breakpoints.down("sm")]: {
      padding: "8em 4em 2em",
      height: "25em",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "8em 3em 2em",
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
      top: "4em",
      left: "1em",
    },

    [theme.breakpoints.down("xs")]: {
      left: ".65em",
    },
  },
}));
const Testimonies = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.parentGrid}
    >
      <Grid item style={{ marginBottom: "1em" }}>
        <Typography variant="h2" className={classes.primaryHeading}>
          Read Our Testimonies
        </Typography>
      </Grid>
      <Grid item>
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
      <Grid item>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          spacing={matchesSM ? 10 : matchesMD ? 7 : 10}
          style={{ paddingTop: "5em" }}
        >
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.purpleOutlineCircle} />
                <img
                  src={distributor1}
                  alt="A snapshot of one of safewash's distributors"
                  className={classes.cardImg}
                />
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
                />
                <Typography
                  variant="body1"
                  className={classes.cardText}
                  style={{ marginBottom: "1em" }}
                >
                  I have tried it oooo, the <br /> thickness and smell is <br />{" "}
                  everything.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.pinkOutlineCircle} />
                <img
                  src={distributor3}
                  alt="A snapshot of one of safewash's distributors"
                  className={classes.cardImg}
                />
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
                />
                <Typography
                  variant="body1"
                  className={classes.cardText}
                  style={{ marginBottom: "1em" }}
                >
                  Yeah I have bought after I <br /> gave birth because I feel{" "}
                  <br /> my baby’s clothes <br /> deserve bqsafewash I and{" "}
                  <br /> to protect his skin from <br /> rashes and allergies
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.blueOutlineCircle} />
                <img
                  src={distributor2}
                  alt="A snapshot of one of safewash's distributors"
                  className={classes.cardImg}
                />
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
                />
                <Typography
                  variant="body1"
                  className={classes.cardText}
                  style={{ marginBottom: "1em" }}
                >
                  I tried bqsafewash <br /> yesterday! It was the <br /> Bomb!
                  My customers are <br /> happy and coming back <br /> for more
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
};

export default Testimonies;
