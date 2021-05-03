import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { makeStyles, useTheme } from "@material-ui/core/styles";

import safewashGallon from "../../assets/bq-safewash-only-1.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "100vh",
    background: `linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(137.03deg, rgba(255, 255, 255, 0.95) 47.28%, rgba(254, 150, 198, 0.95) 152.37%), url(${safewashGallon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  },
  primaryHeading: {
    fontFamily: "Open Sans",
  },
  secondaryHeading: {
    fontWeight: 700,
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
  return (
    <Grid
      container
      direction="column"
      className={classes.parentGrid}
      justify="center"
      alignItems="center"
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
          align="center"
        >
          It looks like the page you are looking for is broken or does not
          exist.
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          variant="body1"
          align="center"
          style={{ color: theme.palette.common.brown }}
        >
          Do not panic. Just click on the button below to return to the homepage
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
  );
};

export default NotFound;
