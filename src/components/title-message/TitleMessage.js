import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

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
    color: ${props => props.theme.titleColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5);
    font-weight: 100;

    .main {
      font-size: 50px;
      color: #FFFFFF; /* Color for "Hi, my name is" and "Kyle Hamwey" */
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
      span {
      color: #FFFFFF;
      }
  }
`;

const TitleMessage = () => (
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
                strings: ["I'm just an I.T. Guy", "Web Developer", "AWS Specialists", "Tech Enthusiast", "Nature Lover"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  );
  
  export default TitleMessage;
  