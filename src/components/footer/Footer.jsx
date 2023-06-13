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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          veritatis libero, magni, ipsam culpa autem dolorem distinctio possimus
          laborum odio accusantium quod ullam voluptatibus quis. Magnam corporis
          maiores distinctio quos dolores deserunt, fugit sed nostrum aut
          repellendus cumque inventore eaque natus tenetur. Impedit voluptas
          error modi veritatis, cumque inventore at.
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
