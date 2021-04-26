import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import bqGlobalLogo from "../../assets/BQ-Dark-Big-2.png";
import instagram from "../../assets/Vector.png";
import twitter from "../../assets/Vector-1.png";
import facebook from "../../assets/Vector-2.png";
import linkedIn from "../../assets/Vector-3.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    paddingTop: "10em",
    width: "100%",
    background: "rgba(184, 219, 217, 0.2)",
  },
  wrapperContainer: {
    paddingLeft: "10em",
    paddingRight: "10em",
    paddingBottom: "5em",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },

    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
  },
  primaryHeading: {
    fontSize: ".85rem",
    fontWeight: 700,
  },
  list: {
    marginTop: ".5em",
  },

  listItem: {
    fontSize: ".85rem",
    fontWeight: 400,

    "&:not(last-child)": {
      marginBottom: "1em",
    },
  },
  customListItem: {
    cursor: "pointer",
    display: "inline",

    "&:hover": {
      color: theme.palette.common.blue,
    },
  },
  listLink: {
    color: theme.palette.common.dark,

    "&:hover": {
      color: theme.palette.common.blue,
    },
  },
  copyrightGrid: {
    padding: "2em",
    background: theme.palette.common.blue,
  },

  copyrightText: {
    fontFamily: "Gilroy-Bold",
    fontSize: "0.95rem",
    color: "#fff",
  },
}));

// The tabIndex property is meant to route the footer navigation with the header navigation. So I am assigning the id available in the header nav to the footer nav that has a corresponding tab name and route.

const customerServiceList = [
  { id: 0, title: "Become a Distributor", path: "/signup", tabIndex: 2 },
  { id: 1, title: "Ordering and Payment", path: "/order", tabIndex: false },
  { id: 2, title: "Returns", path: "/returns", tabIndex: false },
  { id: 3, title: "FAQs", path: "/faq", tabIndex: false },
];

const informationList = [
  { id: 0, title: "About Safewash", path: "/about", tabIndex: 1 },
  { id: 1, title: "Work with Us", path: "/careers", tabIndex: false },
  { id: 2, title: "Policy", path: "/policy", tabIndex: false },
  { id: 3, title: "Terms and Condition", path: "/terms", tabIndex: false },
];

const contacts = [
  { id: 0, title: "+23456778889996", link: "tel:+23456778889996" },
  { id: 1, title: "safewash@gmail.com", link: "mailto:safewash@gmail.com" },
];

const socialIcons = [
  {
    id: 0,
    src: instagram,
    alt: "Instagram Icon",
    link: "https://www.instagram.com",
  },
  {
    id: 1,
    src: twitter,
    alt: "Twitter Icon",
    link: "https://www.twitter.com",
  },
  {
    id: 2,
    src: facebook,
    alt: "Facebook Icon",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    src: linkedIn,
    alt: "LinkedIn Icon",
    link: "https://www.linkedin.com",
  },
];

const Footer = ({ value, setValue }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXXS = useMediaQuery("(max-width: 450px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <footer>
      <Grid container direction="column" className={classes.parentGrid}>
        <Grid item>
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            justify={matchesSM ? "flex-start" : "space-between"}
            className={classes.wrapperContainer}
          >
            {/* ONLY DISPLAYS ON MEDIUM TO LARGE SCREEN SIZES */}
            <Hidden smDown>
              <Grid item>
                <img
                  src={bqGlobalLogo}
                  alt="The logo of BQ Global solution limited"
                />
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  {/* CUSTOMER MENU */}
                  <Grid item>
                    <Typography
                      variant="h6"
                      className={classes.primaryHeading}
                      gutterBottom
                    >
                      Customer Service
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ul className={classes.list}>
                      {customerServiceList.map((list) => (
                        <li key={list.id} className={classes.listItem}>
                          <Link
                            to={list.path}
                            onClick={() => setValue(list.tabIndex)}
                            className={classes.listLink}
                          >
                            {list.title}
                          </Link>
                        </li>
                      ))}
                      <li
                        className={`${classes.listItem} ${classes.customListItem}`}
                        style={{
                          fontSize: matchesXXS ? ".7rem" : undefined,
                        }}
                        onClick={handleScrollToTop}
                      >
                        Go to Top
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Typography
                      variant="h6"
                      className={classes.primaryHeading}
                      gutterBottom
                    >
                      Information
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ul className={classes.list}>
                      {informationList.map((list) => (
                        <li key={list.id} className={classes.listItem}>
                          <Link
                            to={list.path}
                            onClick={() => setValue(list.tabIndex)}
                            className={classes.listLink}
                          >
                            {list.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Typography
                      variant="h6"
                      className={classes.primaryHeading}
                      gutterBottom
                    >
                      Contact Us
                    </Typography>
                  </Grid>
                  <Grid item>
                    <ul className={classes.list}>
                      {contacts.map((contact) => (
                        <li className={classes.listItem} key={contact.id}>
                          <a href={contact.link} className={classes.listLink}>
                            {contact.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                  <Grid item>
                    <Grid container justify="space-between">
                      {socialIcons.map((icon) => (
                        <Grid item key={icon.id}>
                          <a href={icon.link}>
                            <img src={icon.src} alt={icon.alt} />
                          </a>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
            {/* ONLY DISPLAYS ON SMALL TO EXTRA SMALL SCREEN SIZES */}
            <Hidden mdUp>
              <Grid item>
                <Grid
                  container
                  justify={matchesXS ? "space-between" : "space-around"}
                  style={{ marginBottom: "3em" }}
                >
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          className={classes.primaryHeading}
                          gutterBottom
                        >
                          Customer Service
                        </Typography>
                      </Grid>
                      <Grid item>
                        <ul className={classes.list}>
                          {customerServiceList.map((list) => (
                            <li
                              key={list.id}
                              className={classes.listItem}
                              style={{
                                fontSize: matchesXXS ? ".7rem" : undefined,
                              }}
                            >
                              <Link
                                to={list.path}
                                onClick={() => setValue(list.tabIndex)}
                                className={classes.listLink}
                              >
                                {list.title}
                              </Link>
                            </li>
                          ))}
                          <li
                            className={`${classes.listItem} ${classes.customListItem}`}
                            style={{
                              fontSize: matchesXXS ? ".7rem" : undefined,
                            }}
                            onClick={handleScrollToTop}
                          >
                            Go to Top
                          </li>
                        </ul>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* INFORMATION MENU */}
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          className={classes.primaryHeading}
                          gutterBottom
                        >
                          Information
                        </Typography>
                      </Grid>
                      <Grid item>
                        <ul className={classes.list}>
                          {informationList.map((list) => (
                            <li
                              key={list.id}
                              className={classes.listItem}
                              style={{
                                fontSize: matchesXXS ? ".7rem" : undefined,
                              }}
                            >
                              <Link
                                to={list.path}
                                onClick={() => setValue(list.tabIndex)}
                                className={classes.listLink}
                              >
                                {list.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                {/* CONTACT US */}
                <Grid
                  container
                  justify={matchesXS ? "space-between" : "space-around"}
                  alignItems={matchesXS ? "center" : "flex-start"}
                >
                  <Grid item>
                    <Grid container direction="column">
                      <Grid item>
                        <Typography
                          variant="h6"
                          className={classes.primaryHeading}
                          gutterBottom
                        >
                          Contact Us
                        </Typography>
                      </Grid>
                      <Grid item>
                        <ul className={classes.list}>
                          {contacts.map((contact) => (
                            <li
                              className={classes.listItem}
                              key={contact.id}
                              style={{
                                fontSize: matchesXXS ? ".7rem" : undefined,
                              }}
                            >
                              <a
                                href={contact.link}
                                className={classes.listLink}
                              >
                                {contact.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </Grid>
                      <Grid item>
                        <Grid container justify="space-between">
                          {socialIcons.map((icon) => (
                            <Grid item key={icon.id}>
                              <a href={icon.link}>
                                <img
                                  src={icon.src}
                                  alt={icon.alt}
                                  style={{
                                    maxWidth: matchesXXS ? 18 : undefined,
                                  }}
                                />
                              </a>
                            </Grid>
                          ))}
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  {/* BQ LOGO GRID */}
                  <Grid item>
                    <img
                      src={bqGlobalLogo}
                      alt="The logo of BQ Global solution limited"
                      style={{ width: matchesXXS ? 100 : undefined }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
          </Grid>
        </Grid>
        <Grid item>
          {/* COPYRIGHT SECTION */}
          <Grid item className={classes.copyrightGrid}>
            <Typography
              variant="body1"
              align="center"
              className={classes.copyrightText}
            >
              &copy; Hamed Jimoh 2021
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Footer;
