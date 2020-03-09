import AutoplaySlider from 'react-awesome-slider/hoc/autoplay';
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fold-out-animation.scss';
import Docker_img from '../img/docker.png';

const Slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false}
    interval={6000}
    cssModule={AwesomeSliderStyles}
  >
    <div data-src={Docker_img} />
    <div data-src={Docker_img} />
    <div data-src={Docker_img} />
    <div data-src={Docker_img} />

  </AutoplaySlider>
);


export default Slider;
