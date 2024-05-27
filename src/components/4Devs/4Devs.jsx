//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./4Devs.css";
import img404 from "../img/features.jpeg";

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function FourDevs() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("page_titles.four_devs")}</title>
      </Helmet>
      <div className="container container404">
        <i className="bi bi-hourglass-top"></i>
        <h2 className="h2404">{t("4devs.headline")}</h2>
        <p className="p404">{t("4devs.paragraph")}</p>
        <img className="img404" src={img404} alt="" />
      </div>
    </>
  );
}

export default FourDevs;
