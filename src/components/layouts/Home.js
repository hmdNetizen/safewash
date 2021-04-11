import { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import "keen-slider/keen-slider.min.css";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";
import { useKeenSlider } from "keen-slider/react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [pause, setPause] = useState(false);
  const timer = useRef();

  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [pause, slider]);

  return (
    <Grid container direction="column">
      <section
        style={{ position: "relative", overflow: "hidden" }}
        className="navigation-wrapper"
      >
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            <SlideOne />
          </div>
          <div className="keen-slider__slide number-slide2">
            <SlideTwo />
          </div>
          <div className="keen-slider__slide number-slide3">
            <SlideThree />
          </div>
          <div className="keen-slider__slide number-slide4">
            <SlideFour />
          </div>
        </div>
        {slider && (
          <div className="dots__container">
            <div className="dots">
              {[...Array(slider.details().size).keys()].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      slider.moveToSlideRelative(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  />
                );
              })}
            </div>
          </div>
        )}
      </section>
    </Grid>
  );
};

export default Home;
