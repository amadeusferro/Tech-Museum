//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Team.css";
import amadeus from "../img/team/amadeus_ferro.jpg";
import joao from "../img/team/joao_victor_guidi.jpeg";
import matheus from "../img/team/matheus_ribeiro.jpeg";
import thalles from "../img/team/thalles_eduardo.jpeg";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Team = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="team" className="team">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>
              <Link to="/Tech-Museum/team">{t("team.description")}</Link>
            </h2>
            <p>{t("team.headline")}</p>
          </header>

          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-stretch eachMember">
              <div className="member" data-aos="fade-up" data-aos-delay="100">
                <div className="member-img">
                  <img src={amadeus} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="https://github.com/amadeusferro" target="blank">
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/amadeus.ferro/"
                      target="blank"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amadeusferro/"
                      target="blank"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{t("team.members.amadeus_ferro.name")}</h4>
                  <span>{t("team.members.amadeus_ferro.position")}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch eachMember">
              <div className="member" data-aos="fade-up" data-aos-delay="200">
                <div className="member-img">
                  <img src={joao} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="" target="blank">
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/jvglima03/"
                      target="blank"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jo%C3%A3o-lima-8b5122220/"
                      target="blank"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{t("team.members.joao_lima.name")}</h4>
                  <span>{t("team.members.joao_lima.position")}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch eachMember">
              <div className="member" data-aos="fade-up" data-aos-delay="300">
                <div className="member-img">
                  <img src={matheus} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="" target="blank">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="https://www.instagram.com/utheuz_/" target="blank">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/utheuz-ribeiro/"
                      target="blank"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{t("team.members.matheus_ribeiro.name")}</h4>
                  <span>{t("team.members.matheus_ribeiro.position")}</span>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-stretch eachMember">
              <div className="member" data-aos="fade-up" data-aos-delay="400">
                <div className="member-img">
                  <img src={thalles} className="img-fluid" alt="" />
                  <div className="social">
                    <a href="https://github.com/Thalles-Eduardo" target="blank">
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/zzthalleszz/"
                      target="blank"
                    >
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/thalles-eduardo-7297a6237/"
                      target="blank"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
                <div className="member-info">
                  <h4>{t("team.members.thalles_eduardo.name")}</h4>
                  <span>{t("team.members.thalles_eduardo.position")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
