import React from "react";
import "./Terms.scss";
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="privacy-container">
      <div className="header">
        <h1>Terms and Conditions ("Terms")</h1>
      </div>
      <div className="body-copy">
        <p className="date">Last updated: September 01, 2022</p>
        <p>
          Please read these Terms and Conditions ("Terms", "Terms and
          Conditions") carefully before using the
          https://www.jrdelectrical.co.uk website (the "Service") operated by
          JRD Electrical Ltd. ("us", "we", or "our").
        </p>
        <p>
          Your access to and use of the Service is conditioned on your
          acceptance of and compliance with these Terms. These Terms apply to
          all visitors, users and others who access or use the Service.
        </p>
        <p>
          By accessing or using the Service you agree to be bound by these
          Terms. If you disagree with any part of the terms then you may not
          access the Service. The Terms and Conditions agreement for JRD
          Electrical Ltd. has been created with the help of PrivacyPolicies.com
          Terms and Conditions Generator.
        </p>
        <div className="sub-header">
          <h2>LINKS TO OTHER WEBSITES</h2>
        </div>
        <p>
          Our Service may contain links to third-party websites or services that
          are not owned or controlled by JRD Electrical Ltd.
        </p>
        <p>
          JRD Electrical Ltd. has no control over, and assumes no responsibility
          for, the content, privacy policies, or practices of any third party
          web sites or services. You further acknowledge and agree that JRD
          Electrical Ltd. shall not be responsible or liable, directly or
          indirectly, for any damage or loss caused or alleged to be caused by
          or in connection with use of or reliance on any such content, goods or
          services available on or through any such web sites or services.
        </p>
        <p>
          We strongly advise you to read the terms and conditions and privacy
          policies of any third-party web sites or services that you visit.
        </p>
        <div className="sub-header">
          <h2>TERMINATION</h2>
        </div>
        <p>
        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
        </p>
        <p>
        All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
        </p>
        <div className="sub-header">
          <h2>GOVERNING LAW</h2>
        </div>
        <p>
        These Terms shall be governed and construed in accordance with the laws of United Kingdom, without regard to its conflict of law provisions.
        </p>
        <p>
        Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
        </p>
        <br></br>
        <div className="sub-header">
          <h2>CHANGES</h2>
        </div>
        <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
        </p>
        <p>
        By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
        </p>
        <div className="sub-header">
          <h2>CONTACT US</h2>
        </div>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us:
        </p>
        <ul>
          <li>By email:<a className="email-address" href="mailto:info@jrdelectrical.co.uk"> info@jrdelectrical.co.uk </a></li>
          <li>
            By visiting this page on our website:
            <Link to='/contact' className="web-link"> www.jrdelectrical.co.uk/contact</Link>
          </li>
          <li>By phone number: 07831 644 244</li>
          <li>By mail: JRD Electrical Ltd 154 stoke Lane BristoL BS9 3RN</li>
        </ul>
      </div>
    </div>
  );
};

export default Terms;
