//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Counts.css";

import { PureIncrement } from "pure_counter";
import { useTranslation } from "react-i18next";

function Counts() {
  const { t } = useTranslation();

  return (
    <>
      <section id="counts" className="counts">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-gift"></i>
                <div>
                  <PureIncrement
                    start={0}
                    end={32}
                    duration={3}
                  ></PureIncrement>
                  <p>{t("counts.donors")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-laptop"></i>
                <div>
                  <PureIncrement
                    start={0}
                    end={97}
                    duration={3}
                  ></PureIncrement>
                  <p>{t("counts.parts")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-people"></i>
                <div>
                  <PureIncrement
                    start={0}
                    end={143}
                    duration={3}
                  ></PureIncrement>
                  <p>{t("counts.visitors")}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-cpu"></i>
                <div>
                  <PureIncrement
                    start={0}
                    end={22}
                    duration={3}
                  ></PureIncrement>
                  <p>{t("counts.members")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Counts;
