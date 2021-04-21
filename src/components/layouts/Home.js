import Grid from "@material-ui/core/Grid";
import About from "./About";
import Distributors from "./Distributors";
import Features from "./Features";
import Slides from "./Slides";
import Contact from "./Contact";
import Testimonies from "./Testimonies";
import Footer from "./Footer";

const Home = () => {
  return (
    <Grid container direction="column" id="home">
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
      <Grid item>
        <Testimonies />
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
