import React, { useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import CircleRating from "../circleRating/CircleRating";
import Genres from "../genres/Genres";

import "./style.scss";

const Carousel = () => {
  return <div>Carousel</div>;
};

export default Carousel;
