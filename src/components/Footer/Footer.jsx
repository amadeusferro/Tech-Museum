//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Footer.css";

import { useTranslation } from "react-i18next";

function Footer() {
  const { t, i18n } = useTranslation();
  const isJapanese = i18n.language === "jp";

  return (
    <>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright">
            &copy; {t("footer.copyright")}
            <strong>
              <span>INTEGRATECH</span>
            </strong>
            {t("footer.rights")}
          </div>
          <div className="credits">
            {isJapanese ? (
              <>
                <a
                  href="https://www.linkedin.com/in/amadeusferro/"
                  target="blank"
                >
                  {t("footer.members.amadeus_ferro")}
                </a>
                、{" "}
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-lima-8b5122220/"
                  target="blank"
                >
                  {t("footer.members.joao_victor_guidi")}
                </a>
                、{" "}
                {t("footer.developed_by")} <br />
                <a href="https://www.linkedin.com/in/amadeusferro/">
                  {t("footer.members.amadeus_ferro")}
                </a>
                {t("footer.translated_by")}
              </>
            ) : (
              <>
                {t("footer.developed_by")}{" "}
                <a
                  href="https://www.linkedin.com/in/amadeusferro/"
                  target="blank"
                >
                  {t("footer.members.amadeus_ferro")}
                </a>
                ,{" "}
                <a
                  href="https://www.linkedin.com/in/jo%C3%A3o-lima-8b5122220/"
                  target="blank"
                >
                  {t("footer.members.joao_victor_guidi")}
                </a>
                <br />
                {t("footer.translated_by")}{" "}
                <a
                  href="https://www.linkedin.com/in/amadeusferro/"
                  target="blank"
                >
                  Amadeus Ferro
                </a>
              </>
            )}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
