import "./footer.css";
import logo from "../../assets/header-logo/headerpic.jpeg";
import { IoLogoInstagram, IoLogoYoutube, IoLogoGithub } from "react-icons/io5";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <>
      <div className="footer-container">

        <div className="footer-logo-component">
          <Logo imageUrl={logo} headerTitle={"Zaph Tours"} />
        </div>
        <div className="footer-contact-component">
          <Contact />
        </div>
        <div className="footer-about-component">
          <About />
        </div>
      </div>
      <div className="developer">
        <h3>
          Design Created by Samuel Njuguna{" "}
          <Link to={"https://github.com/SamuelNjuguna-bot/Zaph-Tours"}>
            <IoLogoGithub />
          </Link>
        </h3>
      </div>
    </>
  );
}

function Logo({ imageUrl, headerTitle }) {
  return (
    <>
      <div className="logo-container">
        <div className="logo-image-wrapper">
          <img src={imageUrl} alt="" />
        </div>
        <div className="header-title">
          <h1 className="header-logo-title">{headerTitle}</h1>
          <p className="tagline">Best Safaris And Adventures</p>
        </div>
      </div>
    </>
  );
}
function Contact() {
  return (
    <>
      <div className="contact-icons">
        <Link className="social-icons">
          <IoLogoInstagram />
        </Link>
        <Link className="social-icons">
          <FaFacebookSquare />
        </Link>
        <Link className="social-icons">
          <FaXTwitter />
        </Link>
        <Link className="social-icons">
          <IoLogoYoutube />
        </Link>
      </div>
    </>
  );
}

function About() {
  return (
    <>
      <div className="about-links">
        <Link className="links">Review</Link>
        <Link className="links">About Us</Link>
        <Link className="links">FAQs</Link>
        <Link className="links">Privacy Policy</Link>
        <Link className="links">Terms And Conditions</Link>
      </div>
    </>
  );
}
