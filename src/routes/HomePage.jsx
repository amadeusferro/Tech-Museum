//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { useRef } from "react";

import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Values from "../components/Values/Values.jsx";
import Counts from "../components/Counts/Counts.jsx";
import Features from "../components/Features/Features.jsx";
import Portfolio from "../components/Portfolio/Portfolio.jsx";
import Testimonials from "../components/Testimonials/Testimonials.jsx";
import Team from "../components/Team/Team.jsx";
import Recent from "../components/Recent/Recent.jsx";
import Contact from "../components/Contact/Contact.jsx";

const HomePage = () => {
  const { t } = useTranslation();

  const heroSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const contactSectionRef = useRef(null);

  return (
    <>
      <Helmet>
        <title>{t("page_titles.homepage")}</title>
      </Helmet>
      <Hero heroSectionRef={heroSectionRef} />
      <About aboutSectionRef={aboutSectionRef} />
      <Values />
      <Counts />
      <Features />
      <Portfolio />
      <Testimonials />
      <Team />
      <Recent />
      <Contact contactSectionRef={contactSectionRef} />
    </>
  );
};

export default HomePage;
