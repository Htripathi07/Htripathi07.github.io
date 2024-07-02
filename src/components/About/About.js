import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
  Card,
} from "./AboutElements";
function About() {
  return (
    <>
      <svg
        height="100%"
        width="100%"
        id="svg"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#151418ff"
          class="transition-all duration-300 ease-in-out delay-150"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>

      <ContactWrapper id="about" className="about section">
        <div className="Container">
          <div className="SectionTitle" style={{ "margin-top": "100px" }}>
            About Me
          </div>
          <Card className="BigCard">
            <Image
              src="https://contentstatic.techgig.com/photo/88751917.cms"
              alt="man-svgrepo"
            />
           <div className="AboutBio" id="user-detail-name">
  <li id="user-detail-name">
    Hello! My name is <strong>Hariom Tripathi</strong> and I find great joy in crafting digital creations that thrive on the vast landscape of the internet.
  </li>
  <br />
  <li id="user-detail-intro">
    My passion lies in creating elegantly simple designs and writing clean, efficient code. I take immense pride in my abilities, which have been honed through extensive experience across diverse projects.
  </li>
  <br />
  <li id="user-detail-intro">
    As a skilled full-stack developer, my expertise spans ReactJs, NextJS, Tailwind CSS, Bootstrap, Typescript, HTML5, CSS3, JavaScript, NodeJs, Express, mySQL,postgreSQL and MongoDB. I have successfully delivered projects in various domains including product-based requirements, e-commerce solutions, food delivery apps, video streaming applications, content management systems, and learning management systems etc.
  </li>
  <br />
  <li id="user-detail-intro">
    I have also contributed to mobile application projects such as lock screen apps and interactive whiteboard drawing tools, demonstrating versatility across web and mobile platforms.
  </li>
  <br />
  <li id="user-detail-intro">
    With a dedicated team, we strive to exceed client expectations by delivering solutions that are not only technically robust but also user-friendly and aligned with business objectives.
  </li>
</div>

          </Card>
        </div>
      </ContactWrapper>
    </>
  );
}

export default About;
