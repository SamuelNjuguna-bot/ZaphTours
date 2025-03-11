import Header from "../../componets/Header/Header";
import { Link } from "react-router-dom";
import img from "../../assets/hero-section/diani3.jpeg";
import img2 from "../../assets/featured-places/Mt Kenya.jpg";
import img3 from "../../assets/featured-places/tsavo.jpg";
import img4 from "../../assets/featured-places/Nairobi_National_Park.jpg";
import img5 from "../../assets/featured-places/L.Nakuru.jpg";
import img6 from "../../assets/featured-places/mt Lonogonot.jpeg";
import img7 from "../../assets/testimonials/Susan.jpg";
import img8 from "../../assets/testimonials/John Lee .jpg";

import "./Home.css";
export default function Home() {
  return (
    <>
      <div className="hero">
        <h2 className="hero-tagline">Explore World With Us</h2>
        <p className="motto">Hakuna Matata</p>
      </div>
      <div className="about-us">
        <h1 className="about-us-heading">About Us</h1>
        <p className="about-us-exercept">
        Discover the ultimate travel experiences tailored to your desires! Our platform offers a diverse range of trip types, from thrilling adventure activities like surfing and hiking to serene wellness retreats, cultural explorations, and luxury beach holidays. Whether you're looking to explore breathtaking safaris, immerse yourself in eco-tours, or indulge in fine dining and African culinary delights, we have something for every traveler. Plan your perfect getaway today and create unforgettable memories!
        </p>
      </div>
      <div className="featured-header">
        <h1 className="featured-header-titte">Must Visit !!</h1>
      </div>
      <div className="featured-destinations">
        <Featured description={"Diani Beach"} price={14000} url={img} />
        <Featured description={"Mt Kenya"} price={4000} url={img2} />
        <Featured description={"Lake Nakuru"} price={6999} url={img5} />
        <Featured description={"Mt Rwenzori"} price={1000} url={img6} />
        <Featured description={"Tsavo"} price={5500} url={img3} />
        <Featured
          description={"Nairobi National Park"}
          price={1200}
          url={img4}
        />
      </div>

      <div className="featured-header-titte-testimonial">
        <h1 className="featured-header-titte-testimoy">Testimonials</h1>
      </div>
      <div className="testimonials">
        <div className="testimonials-container">
          <Testimonies
            userProfilePic={img7}
            feedback={
              "Our safari experience was absolutely unforgettable! From breathtaking wildlife encounters to top-notch service, everything exceeded our expectations. The guides were knowledgeable, friendly, and ensured we had the best views of the Big Five. Every detail was perfectly planned, making our trip seamless and truly magical. We can't wait to return!"
            }
            username={"Susan Michaels"}
          />
          <Testimonies
            userProfilePic={img8}
            feedback={
              "Our safari experience was beyond amazing! Not only did we witness breathtaking wildlife up close, but we also got to relax on incredible sand beaches with stunning views and especially Diani Beach. The combination of adventure and serenity made this trip unforgettable. Exceptional service, beautiful landscapes, and memories that will last a lifetime!"
            }
            username={"John Lee"}
          />
        </div>
      </div>
      <div className="subscribe-heading">
        <h1>Subscribe To Our News</h1>
      </div>
      <div className="news-subscribe">
        <News />
      </div>
    </>
  );
}

function Featured({ description, price, url }) {
  return (
    <>
      <div className="feature1">
        <img src={url} alt="" />
        <p className="description2">{description}</p>
        <p className="price2">Starting @ $ {price}</p>
        <div className="div">
          <button className="btn">Book Now</button>
        </div>
      </div>
    </>
  );
}

function Testimonies({ username, userProfilePic, feedback }) {
  return (
    <>
      <div className="user-feedback">
        <div className="image-wrapper">
          <img src={userProfilePic} alt="" />
        </div>
        <div className="tst">
          <p className="user">{username}</p>
          <p className="testimony">{feedback}</p>
        </div>
      </div>
    </>
  );
}

function News() {
  return (
    <>
      <div className="subscribe-container">
        <div className="news-header-tagline">
          <h1>Subscribe Below For Exciting News and get Latest updates </h1>
        </div>
        <div className="form">
          <form action="">
            <input
              type="text"
              className="subscribe"
              placeholder="Enter Your email"
            />
            <button className="subscribe-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  );
}
