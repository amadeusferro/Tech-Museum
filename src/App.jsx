//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./scripts/main.js";

import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
