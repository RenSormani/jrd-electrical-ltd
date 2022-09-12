import React from "react";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const element2 = <FontAwesomeIcon icon={faScrewdriverWrench} />;
const element3 = <FontAwesomeIcon icon={faBolt} />;

const About = () => {
  return (
<div className="container">
      <div className="about-container">
        <h1>ABOUT US</h1>
      </div>

      <div className="description-container">
        <div className="contact-descritpion">
          <h1>
          Established in 1991 by James Dillon, JRD Electrical has built an
          exceptional reputation, offering the highest levels of customer
          care, whilst using the latest electrical techniques and quality
          materials to meet expectations.
          </h1>
        </div>

        <div className="light-image">
          <h2 className="lightbulb">{element3}</h2>
        </div>

        <div className="trust-descritpion">
          <h2>Who we are...</h2>
          <h1>We are a company with over 30 years of experience, striving to
              consistently deliver the exceptional standards that have made the
              name JRD Electrical synonymous with quality electrical work. We
              operate contracting teams across the Southwest. All directors,
              managers, supervisors and site operatives are directly employed,
              CSCS (ECS) registered and are fully dedicated to customer care and
              maintaining our strong reputation.
          </h1>
        </div>

        <div className="light-image">
          <h2 className="lightbulb">{element2}</h2>
        </div>

        <div className="building-regulations">
        <h2>Who we employ...</h2>
          <h1>We operate an on-going, training-and-assessment program with all of
              our electricians, to keep them on top of all the latest developments
              and industry standards, Inspection and Test C&G 2391. All staff are
              CRB-verified and fulfil both the Competent person and Part P
              requirements.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
