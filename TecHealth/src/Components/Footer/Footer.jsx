import React from "react";
// import "./Style/Footer.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "./Style/Footer.css";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span id="Footer-1">Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="https://www.facebook.com/profile.php?id=100092641240863" target="_blank" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="facebook-f" />
          </a>
          <a href="https://wa.me/message/QLYBWQ7GTJR2B1" target="_blank" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="whatsapp" />
          </a>
          <a href="https://instagram.com/techealth_india?igshid=ZGUzMzM3NWJiOQ==" target="_blank" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="instagram" />
          </a>
          <a href="https://www.linkedin.com/company/techealth23/" target="_blank" className="me-4 text-reset">
            <MDBIcon id="Footer-1" fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                TecHealth
              </h6>
              <p className="Footer-Color">
                TecHealth has come a long way ever since its inception in 2022.
                With a lot of hard work and perseverance we have made a place
                for ourselves in the market. As a brand and as a service, it is
                our constant endeavour to redefine ourselves. As a brand and as
                a service, it is our constant endeavour to redefine ourselves.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Services
              </h6>
              <p>
                <p className="Footer-Color">Ambulance Services</p>
              </p>
              <p>
                <p className="Footer-Color">Online Consultation</p>
              </p>
              <p>
                <p className="Footer-Color">Veterinary </p>
              </p>
              <p>
                <p className="Footer-Color">E - Pharmacy</p>
              </p>
              <p>
                <p className="Footer-Color">Health and Wellness</p>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Useful links
              </h6>
              <p>
                <a
                  onClick={() => navigate("/")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  Home
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/About-Us")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  About Us
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/Services")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  Services
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("#")}  // LINK - /Privacy-Policy
                  className="Footer-Color"
                  id="footer-link"
                >
                  Privacy Policy
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("#")} // LINK - /Terms-&-Conditions
                  className="Footer-Color"
                  id="footer-link"
                >
                  Terms & Conditions
                </a>
              </p>
              <p>
                <a
                  onClick={() => navigate("/Contact-Us")}
                  className="Footer-Color"
                  id="footer-link"
                >
                  Contact Us
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4" id="Footer-1">
                Contact
              </h6>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="home" className="me-2" />
                New Delhi, India
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="envelope" className="me-3" />
                info@techealth.in
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="phone" className="me-3" />{" "}
                +91 9717365884
              </p>
              <p className="Footer-Color">
                <MDBIcon id="Footer-1" icon="print" className="me-3" />{" "}
                +91 7837294610
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ background: "linear-gradient(235deg, #34a853, #0072c6)", color: "white" }}
      >
        © 2023 <strong>TecHealth</strong> : Developed by&nbsp;
        <a
          id="TextNone"
          className="text-reset fw-bold"
          href="https://agbiztech.in/"
          target="_blank"
        >
          AGBIZ
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
