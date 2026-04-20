import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";
import { motion } from "framer-motion";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${(props) => props.theme.titleColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    font-weight: 100;

    .main {
      font-size: 50px;
      color: #ffffff;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
    span {
      color: #ffffff;
    }
  }
`;

const TitleMessage = () => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
  >
    <MyTitleMessage>
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, my name is
            <br />
            <span>
              <strong>Kyle Hamwey</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: [
                  "I'm just an I.T. Guy",
                  "Web Developer",
                  "AWS Specialists",
                  "Tech Enthusiast",
                  "Nature Lover",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  </motion.div>
);

export default TitleMessage;
