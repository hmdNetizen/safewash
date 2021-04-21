import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import { Link } from "react-router-dom";
import bqGlobalLogo from "../../assets/BQ Dark Big 2.png";
import instagram from "../../assets/Vector.png";
import twitter from "../../assets/Vector-1.png";
import facebook from "../../assets/Vector-2.png";
import linkedIn from "../../assets/Vector-3.png";
import FooterLink from "./FooterLink";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    paddingTop: "10em",
    background: "rgba(184, 219, 217, 0.2)",
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
  listLink: {
    color: theme.palette.common.dark,

    "&:hover": {
      color: theme.palette.common.blue,
    },
  },
  copyrightGrid: {
    marginTop: "5em",
    padding: "2em",
    background: theme.palette.common.blue,
  },

  copyrightText: {
    fontFamily: "Gilroy-Bold",
    fontSize: "0.95rem",
    color: "#fff",
  },
}));

const customerServiceList = [
  { id: 0, title: "Become a Distributor", path: "/distributor/signup" },
  { id: 1, title: "Ordering and Payment", path: "/order" },
  { id: 2, title: "Returns", path: "/returns" },
  { id: 3, title: "FAQs", path: "/faq" },
  { id: 4, title: "Go to Top", path: "/#home" },
];

const informationList = [
  { id: 0, title: "About Safewash", path: "/about" },
  { id: 1, title: "Work with Us", path: "/careers" },
  { id: 2, title: "Policy", path: "/policy" },
  { id: 3, title: "Terms and Condition", path: "/terms" },
];

const contactList = [
  { id: 0, title: "+23456778889996" },
  { id: 1, title: "safewash@gmail.com" },
];

const socialIcons = [
  { src: instagram, alt: "Instagram Icon" },
  { src: twitter, alt: "Twitter Icon" },
  { src: facebook, alt: "Facebook Icon" },
  { src: linkedIn, alt: "LinkedIn Icon" },
];

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container direction="column" className={classes.parentGrid}>
      <Grid item>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          justify={matchesSM ? "flex-start" : "space-around"}
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
                        <FooterLink list={list} className={classes.listLink} />
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
                    Information
                  </Typography>
                </Grid>
                <Grid item>
                  <ul className={classes.list}>
                    {informationList.map((list) => (
                      <li key={list.id} className={classes.listItem}>
                        <Link to={list.path} className={classes.listLink}>
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
                    {contactList.map((list) => (
                      <li className={classes.listItem}>{list.title}</li>
                    ))}
                  </ul>
                </Grid>
                <Grid item>
                  <Grid container justify="space-between">
                    {socialIcons.map((icon) => (
                      <Grid item>
                        <img src={icon.src} alt={icon.alt} />
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
              <Grid container justify="space-between">
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
                      <List disablePadding>
                        {customerServiceList.map((list) => (
                          <ListItem key={list.id}>
                            <ListItemText
                              component={"a"}
                              href="#"
                              primary={list.title}
                              classes={{ primary: classes.listItemText }}
                            />
                          </ListItem>
                        ))}
                      </List>
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
                      <List disablePadding>
                        {informationList.map((list) => (
                          <ListItem key={list.id}>
                            <ListItemText
                              primary={list.title}
                              classes={{ primary: classes.listItemText }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* CONTACT US */}
              <Grid container justify="space-between">
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
                      <List disablePadding>
                        {contactList.map((list) => (
                          <ListItem key={list.id}>
                            <ListItemText
                              primary={list.title}
                              classes={{ primary: classes.listItemText }}
                            />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                    <Grid item>
                      <Grid container justify="space-between">
                        {socialIcons.map((icon) => (
                          <Grid item>
                            <img src={icon.src} alt={icon.alt} />
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
  );
};

export default Footer;
