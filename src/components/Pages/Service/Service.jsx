import React from "react";
import "./Service.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

const element = <FontAwesomeIcon icon={faLightbulb} />;
const element2 = <FontAwesomeIcon icon={faScrewdriverWrench} />;
const element3 = <FontAwesomeIcon icon={faBolt} />;

const Service = () => {
  return (
    <div className="container">
      <div className="service-container">
        <h1>SERVICES</h1>
      </div>

      <div className="description-container">
        <div className="contact-descritpion">
          <h1>
            For more than 30 years we have professionally designed, installed
            and maintained thousands of electrical systems throughout the
            South-West. Whether domestic or commercial, we make sure we get it
            right first time by thoroughly understanding each client's
            requirements.
          </h1>
        </div>

        <div className="light-image">
          <h2 className="lightbulb">{element3}</h2>
        </div>

        <div class="overlay-container">
          <div className="image">
            <div className="overlay">Residential</div>
          </div>
        </div>

        <div className="trust-descritpion">
          <div className="residential-strap">
            <h2>
              We cover a broad range of electrical installation and maintenance
              jobs for the home, including...
            </h2>
          </div>
          <h1>
            <ul>
              <div className="list-container">
                <div className="list-1">
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Kitchen, bathroom and bedroom
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Conservatories and extensions
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Maintenance</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Gas heating</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Loft Conversions</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Telecommunications
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Oil-Fired heating
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Door/gate entry</h2>
                    </div>
                  </li>
                </div>
                <div className="list-2">
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} CCTV</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Extractor fans</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Garden installations
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Air conditioning</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Swimming pools</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Stair lifts</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">{element3} Spa baths</h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Solid fuel heating
                      </h2>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </h1>
        </div>

        <div className="light-image">
          <h2 className="lightbulb">{element2}</h2>
        </div>

        <div className="overlay-container-2">
          <div className="image-2">
            <div className="overlay-2">Commercial</div>
          </div>
        </div>

        <div className="trust-descritpion">
          <div className="residential-strap">
            <h2>
              We have long-term experience of working with commercial letting
              agents and landlords and offer tailored services to suit their
              particular needs.
            </h2>
          </div>
          <h1>
            <ul>
              <div className="list-container">
                <div className="list-3">
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Electrical Periodic Testing
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} NICEIC Certification and Reports
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Emergency Lighting, Testing and Installation
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Fire Alarm and Smoke Detectors, Testing and
                        Installation
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Portable Appliance Testing “PAT”
                      </h2>
                    </div>
                  </li>
                  <li>
                    <div className="light-image">
                      <h2 className="lightbulb">
                        {element3} Complete Service Management
                      </h2>
                    </div>
                  </li>
                </div>
              </div>
            </ul>
          </h1>
        </div>

        <div className="building-regulations">
          <h2>
            INFORMATION FOR LANDLORDS: PAT TESTING & ELECTRICAL EQUIPMENT
            TESTING
          </h2>
          <br></br>
          <h1>
            The Electrical Equipment (Safety) Regulations 1994, mandatory since
            1st January 1997, states that all electrical appliances supplied
            with let accommodation must be safe. The only sure method of
            ensuring that these appliances are safe is to have them tested by a
            trained competent person using the appropriate calibrated portable
            appliance testing equipment.
            <br></br>
            <br></br>
            As a landlord, you have a duty to prevent harm to your tenants from
            electrical appliances that you supply. Portable Appliance Testing is
            widely regarded as being the best way of complying with this
            obligation. This covers all portable appliances that you supply,
            including fridges and freezers, microwave ovens (see microwave
            testing also), televisions and vacuum cleaners.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Service;
