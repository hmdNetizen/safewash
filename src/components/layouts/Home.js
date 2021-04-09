import React from "react";
import Grid from "@material-ui/core/Grid";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";

const Home = () => {
  return (
    <Grid container direction="column">
      <section>
        {/* <SlideOne /> */}
        <SlideTwo />
      </section>
    </Grid>
  );
};

export default Home;
