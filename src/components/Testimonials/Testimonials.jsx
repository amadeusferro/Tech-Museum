//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Testimonials.css";
import test1 from "../img/testimonials/testimonials-1.jpg";
import test2 from "../img/testimonials/testimonials-2.jpg";
import test3 from "../img/testimonials/testimonials-3.jpg";

import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Testimonials() {
  const { t } = useTranslation();

  return (
    <>
      <section id="testimonials" className="testimonials">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>
              <Link to="/Tech-Museum/testimonials">{t("testimonials.description")}</Link>
            </h2>
            <p>{t("testimonials.headline")}</p>
          </header>

          <div className="row g-2">
            <div className="col-md-4">
              <div className="card p-3 text-center px-4">
                <div className="user-image">
                  <img src={test1} className="rounded-circle" width="80" />
                </div>

                <div className="user-content">
                  <h5 className="mb-0">{t("testimonials.visitors.0.name")}</h5>
                  <span>{t("testimonials.visitors.0.occupation")}</span>
                  <p>{t("testimonials.visitors.0.message")}</p>
                </div>

                <div className="ratings">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 text-center px-4">
                <div className="user-image">
                  <img src={test2} className="rounded-circle" width="80" />
                </div>

                <div className="user-content">
                  <h5 className="mb-0">{t("testimonials.visitors.1.name")}</h5>
                  <span>{t("testimonials.visitors.1.occupation")}</span>
                  <p>{t("testimonials.visitors.1.message")}</p>
                </div>

                <div className="ratings">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3 text-center px-4">
                <div className="user-image">
                  <img src={test3} className="rounded-circle" width="80" />
                </div>

                <div className="user-content">
                  <h5 className="mb-0">{t("testimonials.visitors.2.name")}</h5>
                  <span>{t("testimonials.visitors.2.occupation")}</span>
                  <p>{t("testimonials.visitors.2.message")}</p>
                </div>

                <div className="ratings">
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                  <FaStar className="star" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
