//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Features.css";
import IMG from "../img/features.jpeg";

import { useTranslation } from "react-i18next";

function Features() {
  const { t } = useTranslation();

  return (
    <>
      <section id="features" className="features">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>{t("features.description")}</h2>
            <p>{t("features.headline")}</p>
          </header>

          <div className="row">
            <div className="col-lg-6">
              <img src={IMG} className="img-fluid" alt="" />
            </div>

            <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
              <div className="row align-self-center gy-4">
                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="200"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>{t("features.features.0")}</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>{t("features.features.1")}</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="400"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>{t("features.features.2")}</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="500"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>{t("features.features.3")}</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="600"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>{t("features.features.4")}</h3>
                  </div>
                </div>

                <div
                  className="col-md-6"
                  data-aos="zoom-out"
                  data-aos-delay="700"
                >
                  <div className="feature-box d-flex align-items-center">
                    <i className="bi bi-check"></i>
                    <h3>{t("features.features.5")}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
