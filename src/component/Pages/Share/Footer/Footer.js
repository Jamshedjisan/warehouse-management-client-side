import React from "react";
import { Container } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer className="footer-area mt-5">
      <Container>
        <div className="footer-info">
          <div className="information-area mt-2">
            <h5 className="mb-3">Information</h5>
            <li>Delivered Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>About Us</li>
          </div>
          <div className="contact-area mt-2">
            <h5 className="mb-3">Contact Us</h5>
            <li>
              Address: <span>Boalkhali,Chattogram,Bangladesh</span>
            </li>
            <li>
              Email: <span>jamshedjisan76@gmail.com</span>
            </li>
            <li>
              Phone: <span>01849618076</span>
            </li>
          </div>
          <div className="social-area mt-2">
            <h5 className="mb-3">Fellow Me</h5>
            <a href="https://www.facebook.com/jamshed.jisan">
              <span>
                <FaFacebookF />
              </span>
            </a>
            <a href="https://www.instagram.com/jamshedjisan/">
              <span>
                <FaInstagram />
              </span>
            </a>
            <a href="https://twitter.com/NishanD79240904">
              <span>
                <FaTwitter />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/nishan-das-00bb58215/">
              <span>
                <FaLinkedinIn />
              </span>
            </a>
          </div>
        </div>
        <div className="footer-down-info  text-center">
          <p>
            <small>
              All COPYRIGHT &copy; {year}, DESIGNED BY Jamshedul Alam{" "}
            </small>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
