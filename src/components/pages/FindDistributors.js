import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { FiArrowRight } from "react-icons/fi";
import distributor1 from "../../assets/Mask Group.png";
import distributor2 from "../../assets/Mask Group-1.png";
import distributor3 from "../../assets/Mask Group-2.png";
import laundryBasket from "../../assets/laundary_basket.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    background:
      "linear-gradient(153deg, rgba(33,164,196,0.23012955182072825) 1%, rgba(255,255,255,0.3561799719887955) 25%, rgba(253,254,255,0) 57%, rgba(239,249,251,0.14609593837535018) 64%, rgba(33,164,196,0.04805672268907568) 87%)",
    backgroundPosition: "10%",
    position: "relative",
    paddingTop: "10em",
    paddingLeft: "15em",
    paddingRight: "15em",

    [theme.breakpoints.down("md")]: {
      paddingLeft: "5em",
      paddingRight: "5em",
    },

    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
      background:
        "radial-gradient(circle, rgba(254,150,198,0.3701855742296919) 0%, rgba(255,255,255,1) 26%);",
      backgroundPosition: "left",
    },
  },
  laundryBasket: {
    position: "absolute",
    right: 0,
    top: "-5em",
    maxWidth: "30em",

    [theme.breakpoints.down("xs")]: {
      maxWidth: "20em",
    },
  },
  circleTop: {
    ...theme.typography.circle,
    top: "2em",
    left: "50%",
    transform: "translateX(-50%)",
  },
  circleBottom: {
    ...theme.typography.circle,
    bottom: "5em",
    left: "50%",
    transform: "translateX(-50%)",
  },
  squareTop: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    left: "2em",
    top: "7em",
  },
  squareMiddle: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    top: "15.5em",
    left: "78%",
    filter: "blur(1px)",
  },
  squareMiddleBg: {
    ...theme.typography.square,
    ...theme.typography.squareBg,
    top: "19.5em",
    left: "30%",
  },
  squareBottom: {
    ...theme.typography.square,
    ...theme.typography.squareSm,
    bottom: "2em",
    left: "2em",
  },
  primaryHeading: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: theme.palette.common.brown,

    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },

  stateSelectGrid: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  townSelectGrid: {
    marginLeft: "3em",
    marginRight: "3em",

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
      marginTop: "2em",
      marginBottom: "2em",
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },

  formControl: {
    position: "relative",
    zIndex: 9,
    width: 250,

    [theme.breakpoints.down("sm")]: {
      width: 450,
    },

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  sortFormControl: {
    minWidth: 70,

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#C4C4C4 !important",
      borderRadius: 5,
    },

    "& .MuiOutlinedInput-input": {
      padding: "5px 14px !important",
    },

    "& .MuiInputLabel-outlined": {
      transform: "translate(14px, 8px) scale(1)",
      fontSize: ".65rem",
      color: "#C4C4C4",
    },

    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
      width: 15,
    },

    "& .MuiSelect-iconOutlined": {
      fontSize: "1.2rem",
      transform: "translateY(2px)",
      color: "#C4C4C4",
    },
  },
  menuItem: {
    paddingLeft: "1em",
    paddingRight: "1em",
  },

  btn: {
    ...theme.typography.btn,
    borderBottomLeftRadius: 10,
    fontFamily: "Open Sans",
    padding: ".75em 3em",

    "&:hover": {
      background: theme.palette.secondary.light,
    },
    "&:active": {
      background: theme.palette.secondary.dark,
    },

    [theme.breakpoints.down("sm")]: {
      width: 450,
    },

    [theme.breakpoints.down("xs")]: {
      width: "auto",
      borderBottomLeftRadius: 0,
    },
  },
  resultsText: {
    fontFamily: "BR Firma Light Italic",
    fontSize: "1rem",
  },
  cardSectionGrid: {
    paddingTop: "10em",
    flexDirection: "row",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "7em",
      flexDirection: "column",
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
      width: 350,
    },

    [theme.breakpoints.down("xs")]: {
      padding: "8em 3em 2em",
      width: "100%",
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
  searchResultsText: {
    color: theme.palette.common.blue,
    fontSize: ".75rem",
    fontFamily: "BR Firma SemiBold",
  },
}));

const stateOptions = [
  { id: 0, name: "Lagos" },
  { id: 1, name: "Abuja" },
  { id: 2, name: "Kaduna" },
  { id: 3, name: "Rivers" },
  { id: 4, name: "Anambra" },
  { id: 5, name: "Adamawa" },
];

const townOptions = [
  { id: 0, name: "Surulere" },
  { id: 1, name: "Asokoro" },
  { id: 2, name: "Zaria" },
  { id: 3, name: "Port Harcourt" },
  { id: 4, name: "Onitsha" },
  { id: 5, name: "Yola" },
];

const sortOptions = [
  { id: 0, title: "sort" },
  { id: 1, title: "sort" },
  { id: 2, title: "sort" },
  { id: 3, title: "sort" },
  { id: 4, title: "sort" },
];

const FindDistributors = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [openDialogOne, setOpenDialogOne] = useState(false);
  const [openDialogTwo, setOpenDialogTwo] = useState(false);
  const [openDialogThree, setOpenDialogThree] = useState(false);

  const matchesXXS = useMediaQuery("(max-width: 349px)");
  const matchesXXXS = useMediaQuery("(max-width: 279px)");
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [sort, setSort] = useState("");

  return (
    <Grid
      container
      direction="column"
      className={classes.parentGrid}
      style={{
        paddingRight: matchesXXXS ? "1em" : undefined,
        paddingLeft: matchesXXXS ? "1em" : undefined,
      }}
    >
      {matchesSM && <div className={classes.circleTop} />}
      {matchesSM && <div className={classes.squareTop} />}
      <Grid item>
        <img
          src={laundryBasket}
          alt="An opaque laundry basket"
          className={classes.laundryBasket}
        />
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justify={matchesXS ? "flex-start" : matchesSM ? "center" : "flex-start"}
      >
        <Grid item style={{ marginRight: "2em" }}>
          <Typography variant="h3" className={classes.primaryHeading}>
            Find Distributors Around {!matchesXXXS && matchesXS && <br />} You
          </Typography>
        </Grid>
        <Grid item>
          {matchesSM && (
            <div
              className={classes.squareMiddle}
              style={{ top: matchesXXS ? "17.25em" : undefined }}
            />
          )}
          {matchesSM && (
            <div
              className={classes.squareMiddleBg}
              style={{ top: matchesXXS ? "21em" : undefined }}
            />
          )}
          <FormControl
            variant="outlined"
            classes={{ root: classes.sortFormControl }}
          >
            <InputLabel id="select-sort-option">Sort</InputLabel>
            <Select
              labelId="select-sort-option"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              label="Sort"
              classes={{ root: classes.sortInput }}
            >
              <MenuItem value="" className={classes.menuItem}>
                <em>None</em>
              </MenuItem>
              {sortOptions.map((option) => (
                <MenuItem
                  key={option.id}
                  value={option.title}
                  className={classes.menuItem}
                >
                  {option.title}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          alignItems={
            matchesXS ? "flex-start" : matchesSM ? "center" : "flex-start"
          }
          style={{ marginTop: "3em" }}
        >
          <Grid item className={classes.stateSelectGrid}>
            <FormControl
              variant="outlined"
              classes={{ root: classes.formControl }}
            >
              <InputLabel id="select-state">Select State</InputLabel>
              <Select
                labelId="select-state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                label="State"
              >
                <MenuItem value="" className={classes.menuItem}>
                  <em>None</em>
                </MenuItem>
                {stateOptions.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    className={classes.menuItem}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item className={classes.townSelectGrid}>
            <FormControl
              variant="outlined"
              classes={{ root: classes.formControl }}
            >
              <InputLabel id="select-town">Select Town</InputLabel>
              <Select
                labelId="select-town"
                value={town}
                onChange={(e) => setTown(e.target.value)}
                label="Town"
              >
                <MenuItem value="" className={classes.menuItem}>
                  <em>None</em>
                </MenuItem>
                {townOptions.map((option) => (
                  <MenuItem
                    key={option.id}
                    value={option.name}
                    className={classes.menuItem}
                  >
                    {option.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.btn}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container alignItems="center" style={{ marginTop: "5em" }}>
          <Grid item>
            <Typography variant="body1" className={classes.resultsText}>
              Search Results &nbsp;
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              <FiArrowRight />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{ marginTop: "7em", marginBottom: "5em" }}>
        <Grid
          container
          spacing={matchesSM ? 0 : 5}
          direction={matchesSM ? "column" : "row"}
          alignItems={matchesSM ? "center" : "flex-start"}
        >
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
              marginTop: matchesSM ? "7em" : 0,
              marginBottom: matchesSM ? "7em" : 0,
            }}
          >
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
          <Grid item>
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
                  Mallam Bashir Limited
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
                Leave a message for Mallam Bashir Limited
              </DialogTitle>
              <DialogContent>
                <DialogContentText>Not Available</DialogContentText>
              </DialogContent>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container style={{ marginBottom: "15em" }}>
        <Grid item>
          <Typography variant="body1" className={classes.searchResultsText}>
            View More Distributors &nbsp;
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1">
            <FiArrowRight color={theme.palette.common.blue} />
          </Typography>
        </Grid>
      </Grid>
      {matchesSM && <div className={classes.circleBottom} />}
      {matchesSM && <div className={classes.squareBottom} />}
    </Grid>
  );
};

export default FindDistributors;
