import { useState, Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import { CgMenuRight, CgClose } from "react-icons/cg";

const useStyles = makeStyles((theme) => ({
  tab: {
    fontSize: "0.9rem",
    minWidth: 10,
    marginLeft: "3em",
    textTransform: "none",
    opacity: 1,
  },
  selectedTab: {
    fontWeight: 700,
  },
  tabIndicator: {
    background: "transparent",
  },
  drawer: {
    background:
      "linear-gradient(180deg, rgba(254, 150, 198, 0.3) 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF",

    [theme.breakpoints.down("md")]: {
      width: "30em",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  closeIcon: {
    fontSize: "1.75rem",
    marginLeft: "auto",
  },
  list: {
    display: "flex",
    minHeight: "80%",
    flexDirection: "column",
    justifyContent: "center",
  },
  listItem: {
    textAlign: "center",
    "&:not(:last-child)": {
      marginBottom: "3em",
    },
  },
}));

const tabOptions = [
  { id: 0, title: "Home", link: "/" },
  { id: 1, title: "About Us", link: "/about" },
  { id: 2, title: "Become a Distributor", link: "/signup" },
  { id: 3, title: "Contact Us", link: "/contact" },
];

const Navigation = ({ value, setValue }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();
  const theme = useTheme();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (value) => setValue(value);

  /* iOS is hosted on high-end devices. The backdrop transition can be enabled without dropping frames. The performance will be good enough.
   iOS has a "swipe to go back" feature that interferes with the discovery feature, so discovery has to be disabled in the component prop. */
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

  // This displays when the screen size is higher than 1280px
  const tabs = (
    <Fragment>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{ indicator: classes.tabIndicator }}
      >
        {tabOptions.map((tab) => (
          <Tab
            label={tab.title}
            key={tab.id}
            className={classes.tab}
            component={Link}
            to={tab.link}
            disableRipple
            onClick={() => setValue(tab.id)}
            classes={{
              selected: classes.selectedTab,
            }}
          />
        ))}
      </Tabs>
    </Fragment>
  );

  useEffect(() => {
    [...tabOptions].forEach((tab) => {
      switch (window.location.pathname) {
        case tab.link:
          if (value !== tab.id) {
            setValue(tab.id);
          }
          break;
        case "/order":
        case "/returns":
        case "/faq":
        case "/careers":
        case "/policy":
        case "/terms":
          if (value !== false) {
            setValue(false);
          }
          break;
        default:
          break;
      }
    });
  });

  const drawer = (
    <Fragment>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onOpen={() => setOpenDrawer(true)}
        onClose={() => setOpenDrawer(false)}
        classes={{ paper: classes.drawer }}
      >
        {openDrawer && (
          <IconButton
            disableRipple
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(false)}
          >
            <CgClose className={classes.closeIcon} />
          </IconButton>
        )}
        <List disablePadding className={classes.list}>
          {tabOptions.map((tab) => (
            <ListItem
              key={tab.id}
              component={Link}
              to={tab.link}
              button
              className={classes.listItem}
              onClick={() => {
                setValue(tab.id);
                setOpenDrawer(false);
              }}
              selected={value === tab.id}
            >
              <ListItemText>{tab.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
      <IconButton
        disableRipple
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(true)}
      >
        <CgMenuRight size="2.25rem" color="#483d3f" title="Menu Icon" />
      </IconButton>
    </Fragment>
  );

  return <Fragment>{matchesMD ? drawer : tabs}</Fragment>;
};

export default Navigation;
