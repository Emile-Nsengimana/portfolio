// import AwesomeSlider from 'react-awesome-slider';
// import AwsSliderStyles from 'react-awesome-slider/src/styles.scss';
import React_img from '../img/react.png';
import Flask_img from '../img/flask.png';
import NodeJs_img from '../img/nodejs.png';
import PostgreSQL_img from '../img/elephant.png';
import Docker_img from '../img/docker.png';
import Redis_img from '../img/redis.png';
import MySQL_img from '../img/mysql.png';
import Mongo_img from '../img/mongo.png';
import Sequilize_img from '../img/sequilize.png';
import React from 'react';
import CarouselSlider from "react-carousel-slider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const Tools = () => {

  const items = [
    {
      "img": React_img,
      "name": "React",
    },
    {
      "img": Flask_img,
      "name": "Flask",
    },
    {
      "img": NodeJs_img,
      "name": "NodeJs",
    },
    {
      "img": PostgreSQL_img,
      "name": "PostgreSQL",
    },
    {
      "img": Sequilize_img,
      "name": "PostgreSQL",
    },
    {
      "img": Redis_img,
      "name": "Redis",
    },
    {
      "img": Docker_img,
      "name": "Redis",
    },
    {
      "img": MySQL_img,
      "name": "MySQL",
    },
    {
      "img": Mongo_img,
      "name": "MySQL",
    }
  ]

  let rBtnCpnt = (<div style={{ zIndex: 100 }}>
    <FontAwesomeIcon icon={faCaretRight} />
  </div>);

  let lBtnCpnt = (<div>
    <FontAwesomeIcon icon={faCaretLeft} />
  </div>);

  let iconItemsStyle = {
    padding: "0px",
    background: "transparent",
    margin: "0 30px",
    height: "50%",
  };

  let circleIcon = {
    borderRadius: "50%",
  }

  let iconsSlides = items.map((item, index) =>
    <div key={index} style={circleIcon} >
      <img src={item.img} alt="aaaa" ></img>
      {/* <h5 style={{textAlign: "center", display: "block", fontWeight: 700}}>{item.name}</h5> */}
    </div>
  );

  let icons = (<CarouselSlider
    sliderBoxStyle={{ height: "7rem", marginTop: "-2rem", width: "100%", background: "white" }}
    accEle={{ dots: false }}
    slideCpnts={iconsSlides}
    itemsStyle={iconItemsStyle}
    buttonSetting={{ placeOn: 'middle-outside' }}
    rBtnCpnt={rBtnCpnt}
    lBtnCpnt={lBtnCpnt}
  />);

  return (<div style={{ position: "relative", margin: "0 auto", width: "100%" }} >
    {icons}
  </div>);
};

export default Tools;
