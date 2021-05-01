import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import About from "./About";
import Distributors from "./Distributors";
import Features from "./Features";
import Slides from "./Slides";
import Contact from "./Contact";
import Testimonies from "./Testimonies";

const Home = ({ setValue }) => {
  return (
    <Grid
      container
      direction="column"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <Grid item>
        <Slides setValue={setValue} />
      </Grid>
      <Grid item>
        <Features />
      </Grid>
      <Grid item>
        <About setValue={setValue} />
      </Grid>
      <Grid item>
        <Distributors setValue={setValue} />
      </Grid>
      <Grid item>
        <Contact setValue={setValue} />
      </Grid>
      <Grid item>
        <Testimonies />
      </Grid>
    </Grid>
  );
};

Home.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Home;
