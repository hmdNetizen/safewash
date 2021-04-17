import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import pinkWire from "../../assets/Vector-13.png";
import safeWashLady from "../../assets/safewash-lady-2.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    padding: "10em 7em",
    overflow: "hidden",

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
    color: theme.palette.common.brown,
    marginBottom: "1em",

    [theme.breakpoints.down("sm")]: {
      fontSize: "1.75rem",
    },

    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
    },
  },
  aboutTextContent: {
    color: theme.palette.common.darkBrown,
    [theme.breakpoints.only("md")]: {
      maxWidth: "42em",
    },
  },
  pinkWire: {
    ...theme.typography.wire,
    top: "5em",

    [theme.breakpoints.down("lg")]: {
      maxWidth: "25em",
    },

    [theme.breakpoints.down("md")]: {
      maxWidth: "20em",
      left: "7em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "25em",
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "20em",
      left: "50%",
      transform: "translateX(-50%)",
    },
  },
  ladyImg: {
    maxWidth: "35em",
    position: "relative",
    top: 0,
    left: "-3em",
    zIndex: 2,

    [theme.breakpoints.down("lg")]: {
      maxWidth: "30em",
    },

    [theme.breakpoints.down("md")]: {
      maxWidth: "25em",
      left: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
      left: 0,
    },

    [theme.breakpoints.down("xs")]: {
      maxWidth: "25em",
      left: 0,
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

const About = () => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMDX = useMediaQuery("(max-width: 1096px)");
  // const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Grid
      container
      className={classes.parentGrid}
      alignItems="center"
      justify={matchesSM ? "center" : "space-between"}
      direction={matchesSM ? "column" : undefined}
    >
      <Grid
        item
        style={{
          maxWidth: "45em",
          order: matchesSM ? 2 : undefined,
          marginTop: matchesSM ? "5em" : 0,
        }}
      >
        <Grid
          container
          direction="column"
          alignItems={matchesSM ? "center" : "flex-start"}
        >
          <Grid item>
            <Typography variant="h2" className={classes.primaryHeading}>
              About Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              paragraph
              align={matchesSM ? "center" : undefined}
              className={classes.aboutTextContent}
              style={{
                maxWidth: matchesSM ? null : matchesMDX ? "34em" : null,
                textAlign: matchesXS
                  ? "center"
                  : matchesSM
                  ? "left"
                  : matchesMDX
                  ? "justify"
                  : "left",
              }}
            >
              We use our knowledge and expertise to provide the most effecient,
              effective and environmentally friendly cleaning possible. Having
              in mind the daily increase in percentage of children cancer
              patients world wide, skin reactions caused by harmful chemicals,
              high priced soaps leading to parents using products not ideal for
              children.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.btn}>
              Become a Distributor
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ position: "relative" }}>
        <img
          src={pinkWire}
          alt="A pink wireframe wrapping around the lady"
          className={classes.pinkWire}
          style={{ maxWidth: matchesXXS ? "15em" : undefined }}
        />
        <img
          src={safeWashLady}
          alt="A lady representing the safewash brand"
          className={classes.ladyImg}
          style={{ maxWidth: matchesXXS ? "20em" : undefined }}
        />
      </Grid>
    </Grid>
  );
};

export default About;
