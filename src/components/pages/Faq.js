import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  parentGrid: {
    height: "100vh",
  },
}));

const Faq = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.parentGrid}
      justify="center"
      alignItems="center"
    >
      <Grid item>
        <Typography variant="h2" color="secondary" align="center">
          Frequently Asked Questions
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Faq;
