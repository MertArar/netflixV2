import React from "react";

import { FaGithub, FaLinkedin, FaMedium, FaUser } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          This web application is not made for users to watch TV series/movies.
          For copyright reasons, you can only view trailers of movies. You can
          also access IMDB scores, categories, series/film descriptions, release
          dates, director/directors, writers and actors/actresses. Please visit
          and read the "Terms of Use", "Privacy-Policy" and "FAQ" pages.
          However, you can send me your questions/suggestions via linkedin.
        </div>
        <div className="socialIcons">
          <a href="https://github.com/MertArar">
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/mert-arar-6788771bb/">
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
          <a href="https://medium.com/@mertarar.ma">
            <span className="icon">
              <FaMedium />
            </span>
          </a>
          <a href="https://mertarar.netlify.app/">
            <span className="icon">
              <FaUser />
            </span>
          </a>
        </div>
        <div className="infoText2">
          Copyright © 2023 Mert Arar. All rights reserved.
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Footer;
