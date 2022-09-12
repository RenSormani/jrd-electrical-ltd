import React from "react";
import "./TrustMark.scss";
import { Link } from "react-router-dom";
import icon from "../../../images/Nic-EIC.png";
import icon2 from "../../../images/TrustMark-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faLightbulb} />;
const element2 = <FontAwesomeIcon icon={faHelmetSafety} />;
const element3 = <FontAwesomeIcon icon={faBolt} />;

const TrustMark = () => {
  return (
    <div className="container">
      <div className="trustmark-container">
        <h1>TRUSTMARK</h1>
      </div>

      <div className="description-container">
        <div className="contact-descritpion">
          <h1>
            JRD Electrical Ltd are registered with the TrustMark scheme – a
            government-backed initiative to assist consumers to find a reputable
            contractor. NICEIC is one of a limited number of scheme providers
            authorised to award TrustMark to electrical contractors.
          </h1>
        </div>

        <div className="light-image">
          <h2 className="lightbulb">{element}</h2>
        </div>

        <div className="trust-descritpion">
          <h1>
            TrustMark is an initiative supported by the Government, the building
            industry and consumer groups to help consumers find reliable and
            trustworthy tradespeople to make improvements and repairs to their
            homes. If a firm displays the TrustMark logo consumers can be
            assured that it has been checked against a set of standards set by
            the Government by a TrustMark approved body.{" "}
          </h1>
        </div>

        <div className="light-image">
          <h2 className="lightbulb">{element2}</h2>
        </div>

        <div className="building-regulations">
          <h1>
            The new building regulations state that all electrical
            installations, repair and maintenance work must be approved by the
            local building authority control department or undertaken by a
            "competent person". A "competent person" has the authority to
            self-certify that the work carried out is to British Standards and
            they then must provide the client and the local authorities the
            relevant documentation for the electrical works carried out. For
            more information click on the links below...
            <div className="regulator-list">
              <ul>
                <li>
                  <div className="light-image">
                  <a href='https://www.trustmark.org.uk/'><h2 className="lightbulb">{element3} TrustMark</h2></a>
                  </div>
                </li>
                <li>
                  <div className="light-image">
                  <a href='https://www.legislation.gov.uk/uksi/1994/3260/contents/made'><h2 className="lightbulb">
                      {element3} Pat Testing - statutory requirements
                    </h2></a>
                  </div>
                </li>
                <li>
                  <div className="light-image">
                  <a href='https://www.niceic.com/'><h2 className="lightbulb">
                      {element3} NICEIC - Information on Electrical Hazards
                    </h2></a>
                  </div>
                </li>
                <li>
                  <div className="light-image">
                  <a href='https://www.diydoctor.org.uk/projects/partp.htm'><h2 className="lightbulb">
                      {element3} Part P - Building Regulations
                    </h2></a>
                  </div>
                </li>
              </ul>
              <div className="footer-logo--container">
                <div className="footer-logo1">
                  <Link to="/" className="social-logo">
                    <img src={icon} alt="JRD-icon" className="NIC"></img>
                  </Link>
                </div>
                <div className="footer-logo2">
                  <Link to="/" className="social-logo">
                    <img src={icon2} alt="JRD-icon" className="Trust"></img>
                  </Link>
                </div>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TrustMark;
