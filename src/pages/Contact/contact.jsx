import "./contact.css";
import { Link } from "react-router-dom";
import { FaPhone, FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div className="contact-details">
        <div className="contact">
          <div className="heading">
            <h1>Reach Us Through</h1>
          </div>
          <Link>
            {" "}
            <p>
              <span className="icon">
                <FaPhone />
              </span>
              0115028263
            </p>
          </Link>
          <Link>
            <p>
              <span className="icon">
                <IoLogoFacebook />
              </span>
              Facebook
            </p>
          </Link>
          <Link>
            <p>
              <span className="icon">
                <FaInstagram />
              </span>
              Instagram
            </p>
          </Link>
          <Link>
            <p>
              <span className="icon">
                <FaXTwitter />
              </span>
              Twitter
            </p>
          </Link>
          <Link>
            {" "}
            <p>
              <span className="icon">
                <FaYoutube />
              </span>
              Youtube
            </p>
          </Link>
        </div>
        <div className="reach-us">
          <div className="heading">
            <h1>Have Your Say Here</h1>
          </div>
          <form className="form">
            <input
              type="text"
              className="text"
              placeholder="Enter Your Name"
              required
            />
            <input
              type="number"
              className="text"
              placeholder="Enter Your Number"
              required
            />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="text"
              required
            />
            <textarea
              className="message"
              placeholder="Enter Your Message"
              required
            >
              Message
            </textarea>
            <button className="send">Enter</button>
          </form>
        </div>
      </div>
      <div className="map-header">
        <h1>You can find Us</h1>
      </div>
      <div className="map">
        <iframe
          width="80%"
          height="600"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </>
  );
}
