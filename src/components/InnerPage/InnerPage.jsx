//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./InnerPage.css";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function InnerPage({ pageName, title, content }) {
  const { t } = useTranslation();
  return (
    <>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to="/Tech-Museum/">{t("navbar.home")}</Link>
              </li>
              <li>{pageName}</li>
            </ol>
            <h2>{title}</h2>
          </div>
        </section>

        <section className="inner-page">
          <div className="container">{content}</div>
        </section>
      </main>
    </>
  );
}

InnerPage.propTypes = {
  pageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default InnerPage;
