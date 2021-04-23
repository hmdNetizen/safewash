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
import laundryBasket from "../../assets/laundary_basket.png";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    background:
      "linear-gradient(153deg, rgba(33,164,196,0.23012955182072825) 1%, rgba(255,255,255,0.3561799719887955) 25%, rgba(253,254,255,0) 57%, rgba(239,249,251,0.14609593837535018) 64%, rgba(33,164,196,0.04805672268907568) 87%)",
    backgroundPosition: "10%",
    position: "relative",
    height: "100vh",
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
    },
  },
  laundryBasket: {
    position: "absolute",
    right: 0,
    top: "-5em",
    maxWidth: "30em",
  },
  primaryHeading: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: theme.palette.common.brown,
  },

  townSelectGrid: {
    marginLeft: "3em",
    marginRight: "3em",

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },

  formControl: {
    minWidth: 250,

    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },
  sortFormControl: {
    minWidth: 80,

    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#C4C4C4 !important",
      borderRadius: 5,
    },

    "& .MuiOutlinedInput-input": {
      padding: "5px 14px !important",
    },

    "& .MuiInputLabel-outlined": {
      transform: "translate(14px, 5px) scale(1)",
    },

    "& .MuiInputLabel-shrink": {
      transform: "translate(14px, -6px) scale(0.75)",
    },
  },
  sortInput: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "red !important",
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

    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
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
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setState] = useState("");
  const [town, setTown] = useState("");
  const [sort, setSort] = useState("");

  return (
    <Grid container direction="column" className={classes.parentGrid}>
      <Grid item>
        <img
          src={laundryBasket}
          alt="An opaque laundry basket"
          className={classes.laundryBasket}
        />
      </Grid>
      <Grid item container alignItems="center">
        <Grid item style={{ marginRight: "2em" }}>
          <Typography variant="h3" className={classes.primaryHeading}>
            Find Distributors Around You
          </Typography>
        </Grid>
        <Grid item>
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
          style={{ marginTop: "3em" }}
        >
          <Grid item>
            <FormControl variant="outlined" className={classes.formControl}>
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
            <FormControl variant="outlined" className={classes.formControl}>
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
    </Grid>
  );
};

export default FindDistributors;
