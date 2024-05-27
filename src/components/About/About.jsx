//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./About.css";
import aboutImg from "../img/about.jpg";

import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="row gx-0">
            <div
              className="col-lg-6 d-flex flex-column justify-content-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="content">
                <h3>{t("about.description")}</h3>
                <h2>{t("about.headline")}</h2>
                <p>{t("about.paragraph")}</p>
                <div className="text-center text-lg-start">
                  <a
                    href="#values"
                    className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>{t("about.button")}</span>
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img src={aboutImg} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
