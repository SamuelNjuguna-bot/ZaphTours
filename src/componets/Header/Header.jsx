import App from "../../App";
import logo from "../../assets/header-logo/headerpic.jpeg";
import "./Header.css";
import { NavLink, Routes } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="logo-image-wrapper"></div>
        <div className="Header-Tittle">
          <h1 className="header-title">Zaph Tours</h1>
        </div>

        <div className="header-tagline">
          <p className="tagline-excerpt">Best Safaris and Adventures</p>
        </div>
        <div className="nav-header">
          <div className="nav-header">
            <Navigation to={"/"} label={"Home"} />
            <Navigation to={"/destination"} label={"Destination"} />
            <Navigation to={"/trip"} label={"Trip Types"} />
            <Navigation to={"/contact"} label={"Contact"} />
          </div>
        </div>
      </div>
    </>
  );
}

function Navigation({ to, label }) {
  return (
    <>
      <div className="link">
        <NavLink
          to={to}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          {label}
        </NavLink>
      </div>
    </>
  );
}
