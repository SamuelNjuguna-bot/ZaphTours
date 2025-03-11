import "./App.css";
import Header from "./componets/Header/Header";
import Home from "./pages/Home/Home";
import Trip from "./pages/Trip Type/trip";
import Contact from "./pages/Contact/contact";
import Destinaton from "./pages/Destinations/destination";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./componets/Footer/footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/destination" element={<Destinaton />}>
          Destination
        </Route>
        <Route path="/trip" element={<Trip />}>
          Trip
        </Route>
        <Route path="/contact" element={<Contact />}>
          Contact
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
