import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import "keen-slider/keen-slider.min.css";
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";
import SlideFour from "./SlideFour";
import { useKeenSlider } from "keen-slider/react";

const Slides = ({ setValue }) => {
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
    <section
      className="navigation-wrapper"
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1">
          <SlideOne setValue={setValue} />
        </div>
        <div className="keen-slider__slide number-slide2">
          <SlideTwo setValue={setValue} />
        </div>
        <div className="keen-slider__slide number-slide3">
          <SlideThree setValue={setValue} />
        </div>
        <div className="keen-slider__slide number-slide4">
          <SlideFour setValue={setValue} />
        </div>
      </div>
      {/* THE STYLES OF THE NAVIGATION DOTS IS IMPLEMENTED IN THE APP.CSS FILE */}
      {slider && (
        <div className="dots__container">
          <div className="dots">
            {[...Array(slider.details().size).keys()].map((index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    slider.moveToSlideRelative(index);
                  }}
                  className={"dot" + (currentSlide === index ? " active" : "")}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

Slides.propTypes = {
  setValue: PropTypes.func.isRequired,
};

export default Slides;
