//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Values.css";
import values1 from "../img/values-1.jpeg";
import values2 from "../img/values-2.jpeg";
import values3 from "../img/values-3.jpeg";

import { useTranslation } from "react-i18next";

function Values() {
  const { t } = useTranslation();

  return (
    <>
      <section id="values" className="values">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>{t("values.description")}</h2>
            <p>{t("values.headline")}</p>
          </header>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
              <div className="box">
                <img src={values1} className="img-fluid" alt="" />
                <h3>{t("values.values.0.header")}</h3>
                <p>{t("values.values.0.paragraph")}</p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="box">
                <img src={values2} className="img-fluid" alt="" />
                <h3>{t("values.values.1.header")}</h3>
                <p>{t("values.values.1.paragraph")}</p>
              </div>
            </div>

            <div
              className="col-lg-4 mt-4 mt-lg-0"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="box">
                <img src={values3} className="img-fluid" alt="" />
                <h3>{t("values.values.2.header")}</h3>
                <p>{t("values.values.2.paragraph")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Values;
