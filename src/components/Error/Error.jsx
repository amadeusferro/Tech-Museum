//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Error.css";
import img404 from "../img/features.jpeg";

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

function Error() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("page_titles.error")}</title>
      </Helmet>
      <div className="container container404">
        <h1 className="h1404">404</h1>
        <h2 className="h2404">{t("error_inner_page.headline")}</h2>
        <p className="p404">{t("error_inner_page.paragraph")}</p>
        <img className="img404" src={img404} alt="" />
      </div>
    </>
  );
}

export default Error;
