import React from "react";
import Grid from "@material-ui/core/Grid";
import SlideOne from "./SlideOne";

const Home = () => {
  return (
    <Grid container direction="column">
      <section>
        <SlideOne />
      </section>
    </Grid>
  );
};

export default Home;
