import Grid from "@material-ui/core/Grid";
import About from "./About";
import Distributors from "./Distributors";
import Features from "./Features";
import Slides from "./Slides";
import Contact from "./Contact";

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Slides />
      </Grid>
      <Grid item>
        <Features />
      </Grid>
      <Grid item>
        <About />
      </Grid>
      <Grid item>
        <Distributors />
      </Grid>
      <Grid item>
        <Contact />
      </Grid>
    </Grid>
  );
};

export default Home;
