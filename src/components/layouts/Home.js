import React from "react";
import Grid from "@material-ui/core/Grid";
// import SlideOne from "./SlideOne";
// import SlideTwo from "./SlideTwo";
// import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";

const Home = () => {
  return (
    <Grid container direction="column">
      <section style={{ position: "relative", overflow: "hidden" }}>
        {/* <SlideOne /> */}
        {/* <SlideTwo /> */}
        {/* <SlideThree /> */}
        <SlideFour />
      </section>
      <section>Hello World</section>
    </Grid>
  );
};

export default Home;
