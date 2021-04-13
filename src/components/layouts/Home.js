import Grid from "@material-ui/core/Grid";
import Features from "./Features";
import Slides from "./Slides";

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Slides />
      </Grid>
      <Grid item style={{ position: "relative", overflow: "hidden" }}>
        <Features />
      </Grid>
    </Grid>
  );
};

export default Home;
