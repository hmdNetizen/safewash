import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import distributor1 from "../../assets/Mask Group.png";
import distributor2 from "../../assets/Mask Group-1.png";
import distributor3 from "../../assets/Mask Group-2.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "5em 7em",
    overflow: "hidden",

    [theme.breakpoints.only("md")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingTop: 0,
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },
  primaryHeading: {
    color: theme.palette.common.blue,
    marginBottom: "1em",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },

  distributorDescriptionText: {
    textAlign: "center",
  },

  cardGrid: {
    paddingTop: "10em",
  },

  card: {
    padding: "5em 2em 2em",
    borderRadius: 5,
    position: "relative",
    textAlign: "center",
    overflow: "visible",
    boxShadow: theme.shadows[5],
  },
  greenOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.secondary.main}`,
  },
  blueOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.common.blue}`,
  },
  pinkOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.primary.main}`,
  },
  cardImg: {
    width: 100,
    position: "absolute",
    top: "-3em",
    left: "50%",
    transform: "translateX(-50%)",
  },
  cardTitle: {
    fontSize: ".75rem",
    fontWeight: 700,
    marginBottom: "1em",
    color: theme.palette.secondary.main,
  },
  cardText: {
    fontSize: ".75rem",
    fontWeight: 600,
  },
  cardBtn: {
    borderRadius: 5,
    textTransform: "none",
    padding: ".25em 2em",
    fontFamily: "Open Sans",
    color: "#fff",
    margin: "0 auto",
    fontSize: ".75rem",
    background: theme.palette.common.blue,
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },
  },

  btn: {
    ...theme.typography.btn,
    marginTop: "1em",
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },
  },
}));

const Distributors = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.parentGrid}
    >
      <Grid item>
        <Typography
          variant="h2"
          className={classes.primaryHeading}
          align="center"
        >
          See Our Top Distributors
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          className={classes.distributorDescriptionText}
        >
          We use our knowledge and expertise to providethe most effecient,
          effective and environmentally {!matchesSM && <br />} friendly cleaning
          possible.
        </Typography>
      </Grid>
      <Grid item className={classes.cardGrid}>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "center" : "flex-start"}
          spacing={matchesSM ? 10 : 3}
        >
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <div className={classes.greenOutlineCircle} />
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
                  Kudirat Bakare
                </Typography>
                <Typography variant="body1" className={classes.cardText}>
                  Surulere, Lagos State.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.cardText}
                  style={{ marginBottom: "1em" }}
                >
                  09030267295
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.cardBtn}
                >
                  Contact
                </Button>
              </CardActions>
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
                  Ibikunle Ventures
                </Typography>
                <Typography variant="body1" className={classes.cardText}>
                  Surulere, Lagos State.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.cardText}
                  style={{ marginBottom: "1em" }}
                >
                  09030267295
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.cardBtn}
                >
                  Contact
                </Button>
              </CardActions>
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
                  Rosemerry's Shop
                </Typography>
                <Typography variant="body1" className={classes.cardText}>
                  Surulere, Lagos State.
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.cardText}
                  style={{ marginBottom: "1em" }}
                >
                  09030267295
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  className={classes.cardBtn}
                >
                  Contact
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "5em" }}>
        <Typography
          variant="body1"
          paragraph
          className={classes.distributorDescriptionText}
        >
          We use our knowledge and expertise to providethe most effecient,
          effective and environmentally {!matchesSM && <br />} friendly cleaning
          possible
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" className={classes.btn}>
          Become a Distributor
        </Button>
      </Grid>
    </Grid>
  );
};

export default Distributors;
