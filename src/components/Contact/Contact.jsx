//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Contact.css";

import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>{t("contact.description")}</h2>
            <p>{t("contact.headline")}</p>
          </header>

          <div className="row gy-4">
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-geo-alt"></i>
                    <h3>{t("contact.address.0")}</h3>
                    <p>
                      {t("contact.address.1")} {t("contact.address.2")}{" "}
                      {t("contact.address.3")}{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-telephone"></i>
                    <h3>{t("contact.phone")}</h3>
                    <p>
                      +55 64 3413-7900
                      <br />
                      +55 64 9????-????
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-envelope"></i>
                    <h3>{t("contact.email")}</h3>
                    <p>
                      secgrad.mhos@ifgoiano.edu.br
                      <br />
                      ?????.mhos@ifgoiano.edu.br
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box">
                    <i className="bi bi-clock"></i>
                    <h3>{t("contact.timetable.title")}</h3>
                    <p>
                      {t("contact.timetable.days")}
                      <br />
                      {t("contact.timetable.hours")}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form className="email-form">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      placeholder={t("contact.form.0")}
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder={t("contact.form.1")}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder={t("contact.form.2")}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder={t("contact.form.3")}
                      rows="6"
                      required
                    ></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">{t("contact.loading")}</div>
                    <div className="error-message"></div>
                    <div className="sent-message">{t("contact.message")}</div>

                    <button className="submit">{t("contact.button")}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
