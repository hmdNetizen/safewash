import { Link } from "react-router-dom";
import { BsTools } from "react-icons/bs";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import safewashGallon from "../../assets/bq-safewash-only-1.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "100vh",
    background: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(137.03deg, rgba(255, 255, 255, 0.95) 47.28%, rgba(254, 150, 198, 0.95) 152.37%), url(${safewashGallon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    padding: "0 10em",

    [theme.breakpoints.down("md")]: {
      padding: "0 5em",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "5em",
    },

    [theme.breakpoints.down("xs")]: {
      padding: "5em 2em",
    },
  },
  primaryHeading: {
    fontFamily: "Open Sans",

    [theme.breakpoints.down("xs")]: {
      fontSize: "2rem",
    },
  },
  secondaryHeading: {
    fontWeight: 600,
    color: theme.palette.common.brown,
  },
  divider: {
    width: 200,
    height: 1,
    background: theme.palette.common.brown,
  },
  btn: {
    ...theme.typography.btn,
    width: 150,
    borderRadius: 0,
    "&:hover": {
      background: theme.palette.secondary.light,
    },

    "&:active": {
      background: theme.palette.secondary.dark,
    },

    [theme.breakpoints.down("xs")]: {
      position: "relative",
      zIndex: 9,
    },
  },
}));

const NotFound = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      className={classes.parentGrid}
      direction={matchesSM ? "column" : "row"}
      justify={matchesSM ? "center" : "space-evenly"}
      alignItems="center"
    >
      <Grid item style={{ marginBottom: matchesSM ? "3em" : undefined }}>
        <BsTools size={matchesXS ? 100 : matchesSM ? 150 : 200} color="#ccc" />
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          alignItems={matchesSM ? "center" : "flex-start"}
        >
          <Grid item>
            <Typography variant="h1" className={classes.primaryHeading}>
              Oops!
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: ".5em", marginBottom: ".75em" }}>
            <Typography
              variant="h6"
              className={classes.secondaryHeading}
              align={matchesSM ? "center" : "left"}
            >
              It looks like the page you are looking for is broken or does not
              exist.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align={matchesSM ? "center" : "left"}
              style={{ color: theme.palette.common.brown }}
            >
              Do not panic. Just click on the button below to return to the
              homepage
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: ".75em", marginBottom: "1.5em" }}>
            <Divider className={classes.divider} />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              className={classes.btn}
              component={Link}
              to="/"
            >
              Home
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotFound;
