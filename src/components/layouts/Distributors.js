import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import distributor1 from "../../assets/Mask Group.png";
import distributor2 from "../../assets/Mask Group-1.png";
import distributor3 from "../../assets/Mask Group-2.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "5em 7em",
    position: "relative",
    // background:
    //   "radial-gradient(circle, rgba(254,150,198,0.3701855742296919) 0%, rgba(255,255,255,1) 26%)",
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

    "&::after": {
      display: "block",
      content: '""',
      width: "100%",
      height: "100%",
      position: "absolute",
      zIndex: -1,
      left: "-20em",
      transform: "translateY(-15em)",
      background:
        "radial-gradient(circle, rgba(254,150,198,0.3701855742296919) 0%, rgba(255,255,255,1) 26%)",

      [theme.breakpoints.only("sm")]: {
        display: "none",
      },

      [theme.breakpoints.down("xs")]: {
        left: 0,
        transform: "translateY(-45em)",
      },
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

  planetShapeOne: {
    ...theme.typography.planetShape,
    width: 35,
    height: 35,
    left: "-25em",
    top: "5em",

    "&::after": {
      content: '""',
      display: "block",
      width: 25,
      height: 25,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, 10%)",
      // transform: "translate(-40%, -40%")
    },
  },
  planetShapeTwo: {
    ...theme.typography.planetShape,
    width: 35,
    height: 35,
    left: "-24.5em",
    top: "6em",

    "&::after": {
      content: '""',
      display: "block",
      width: 25,
      height: 25,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      // The parent grid pseudo element positioning affects the planetshape pseudo-element. Hence the tweak around the y-axis of the transform property.
      transform: "translate(-50%, 10%)",
    },
  },

  planetShapeSm: {
    ...theme.typography.planetShape,
    width: 25,
    height: 25,
    left: "-28em",
    top: ".5em",

    "&::after": {
      content: '""',
      display: "block",
      width: 15,
      height: 15,
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,228,241,1) 100%)",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%, 10%)",
    },
  },

  squareSmOne: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "2em",
    right: "-2em",
  },
  squareSmTwo: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "-4.5em",
    right: "-3em",
  },

  squareBgOne: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "-8em",
    left: 0,
  },
  squareBgTwo: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "-7em",
    right: 0,
  },

  distributorDescriptionText: {
    textAlign: "center",
    color: theme.palette.common.darkBrown,
  },

  cardSectionGrid: {
    paddingTop: "5em",
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "7em",
      flexDirection: "column",
      position: "relative",
    },
  },

  card: {
    padding: "5em 2em 2em",
    borderRadius: 5,
    position: "relative",
    textAlign: "center",
    overflow: "visible",
    boxShadow: theme.shadows[5],

    [theme.breakpoints.down("sm")]: {
      padding: "8em 4em 2em",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "8em 3em 2em",
    },
  },
  greenOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.secondary.main}`,

    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
    },
  },
  blueOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.common.blue}`,

    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
    },
  },
  pinkOutlineCircle: {
    ...theme.typography.outlineCircle,
    border: `2px solid ${theme.palette.primary.main}`,

    [theme.breakpoints.down("sm")]: {
      width: 150,
      height: 150,
    },
  },
  cardImg: {
    width: 100,
    position: "absolute",
    top: "-3em",
    left: "50%",
    transform: "translateX(-50%)",

    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
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
    fontFamily: "Gilroy-Thin",
    fontWeight: "bold",
    color: "#fff",
    margin: "0 auto",
    fontSize: ".75rem",
    background: theme.palette.common.blue,
    "&:hover": {
      background: "#17b1d3",
    },

    "&:active": {
      background: "#059bbc",
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
}));

const Distributors = ({ setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [openDialogOne, setOpenDialogOne] = useState(false);
  const [openDialogTwo, setOpenDialogTwo] = useState(false);
  const [openDialogThree, setOpenDialogThree] = useState(false);
  const matchesXXXXS = useMediaQuery("(max-width: 280px)");
  const matchesXXXS = useMediaQuery("(max-width: 350px)");
  // const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  // const handleDialogClose = () => {
  //   setOpenDialogOne(false);
  //   setOpenDialogTwo(false);
  //   setOpenDialogThree(false);
  // };

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
          We use our knowledge and expertise to provide the most effecient,
          effective and environmentally {!matchesSM && <br />} friendly cleaning
          possible.
        </Typography>
      </Grid>
      {!matchesSM && <div className={classes.planetShapeOne} />}
      {!matchesSM && <div className={classes.planetShapeTwo} />}
      {!matchesSM && <div className={classes.planetShapeSm} />}
      <Grid item>
        <Grid
          container
          className={classes.cardSectionGrid}
          spacing={matchesSM ? 0 : 3}
        >
          {matchesSM && <div className={classes.squareSmOne} />}
          <Grid item>
            <Card className={classes.card}>
              <CardContent>
                <div
                  className={classes.greenOutlineCircle}
                  style={{ top: matchesSM ? "-5em" : undefined }}
                />
                <img
                  src={distributor1}
                  alt="A snapshot of one of safewash's distributors"
                  className={classes.cardImg}
                  style={{ top: matchesSM ? "-5em" : undefined }}
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
                  onClick={() => setOpenDialogOne(true)}
                >
                  Contact
                </Button>
              </CardActions>
            </Card>
            <Dialog
              open={openDialogOne}
              onClose={() => setOpenDialogOne(false)}
              // fullScreen={matchesXS}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                Leave a message for Kudirat Abiola
              </DialogTitle>
              <DialogContent>
                <DialogContentText>Not Available</DialogContentText>
              </DialogContent>
            </Dialog>
          </Grid>
          <Grid
            item
            style={{
              margin: matchesSM ? "12em 0" : 0,
              position: matchesSM ? "relative" : undefined,
            }}
          >
            {matchesSM && <div className={classes.squareBgOne} />}
            <Card className={classes.card}>
              <CardContent>
                <div
                  className={classes.blueOutlineCircle}
                  style={{ top: matchesSM ? "-5em" : undefined }}
                />
                <img
                  src={distributor3}
                  alt="A snapshot of one of safewash's distributors"
                  className={classes.cardImg}
                  style={{ top: matchesSM ? "-5em" : undefined }}
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
                  onClick={() => setOpenDialogTwo(true)}
                >
                  Contact
                </Button>
              </CardActions>
            </Card>
            <Dialog
              open={openDialogTwo}
              onClose={() => setOpenDialogTwo(false)}
              // fullScreen={matchesXS}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                Leave a message for Ibikunle Ventures
              </DialogTitle>
              <DialogContent>
                <DialogContentText>Not Available</DialogContentText>
              </DialogContent>
            </Dialog>
          </Grid>
          <Grid item style={{ position: matchesSM ? "relative" : undefined }}>
            {matchesSM && <div className={classes.squareBgTwo} />}
            {matchesSM && <div className={classes.squareSmTwo} />}
            <Card className={classes.card}>
              <CardContent>
                <div
                  className={classes.pinkOutlineCircle}
                  style={{ top: matchesSM ? "-5em" : undefined }}
                />
                <img
                  src={distributor2}
                  alt="A snapshot of one of safewash's distributors"
                  className={classes.cardImg}
                  style={{ top: matchesSM ? "-5em" : undefined }}
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
                  onClick={() => setOpenDialogThree(true)}
                >
                  Contact
                </Button>
              </CardActions>
            </Card>
            <Dialog
              open={openDialogThree}
              onClose={() => setOpenDialogThree(false)}
              // fullScreen={matchesXS}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                Leave a message for Rosemerry's Shop
              </DialogTitle>
              <DialogContent>
                <DialogContentText>Not Available</DialogContentText>
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "5em" }}>
        <Typography
          variant="body1"
          paragraph
          className={classes.distributorDescriptionText}
        >
          We use our knowledge and expertise to provide the most effecient,
          effective and environmentally {!matchesSM && <br />} friendly cleaning
          possible
        </Typography>
      </Grid>
      <Grid item style={{ marginTop: "1em" }}>
        <Button
          variant="contained"
          component={Link}
          to="/distributors"
          onClick={() => setValue(2)}
          className={classes.btn}
          style={{ padding: matchesXXXS ? ".75em .25em" : undefined }}
        >
          Find Distributors Around You?
        </Button>
      </Grid>
    </Grid>
  );
};

Distributors.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Distributors;
