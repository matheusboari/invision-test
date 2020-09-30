import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import '../sass/app.scss';

import Image from '../assets/data.png';

const Slider = withAutoplay(AwesomeSlider);

function SliderComponent() {
  return (
    <div className="slide_card">
      <Slider
        className="slider_component"
        organicArrows={false}
        play
        cancelOnInteraction={false}
        interval={6000}
      >
        <div className="slide">
          <img className="slide_image" src={Image} alt="peoples" />
          <h2 className="slide_title">Marcenas mattis egestas</h2>
          <p className="slide_text">
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </div>
        <div className="slide">
          <img className="slide_image" src={Image} alt="peoples" />
          <h2 className="slide_title">Marcenas mattis egestas</h2>
          <p className="slide_text">
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </div>
        <div className="slide">
          <img className="slide_image" src={Image} alt="peoples" />
          <h2 className="slide_title">Marcenas mattis egestas</h2>
          <p className="slide_text">
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </div>
        <div className="slide">
          <img className="slide_image" src={Image} alt="peoples" />
          <h2 className="slide_title">Marcenas mattis egestas</h2>
          <p className="slide_text">
            Erdum et malesuada fames ac ante ileum primmer in faucibus
            uspendisse porta.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default SliderComponent;
