//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import Inner from "../components/InnerPage/InnerPage";

const InnerPage = ({ pageName, title, content }) => {
  const { t } = useTranslation();

  return (
    <>
      <Inner pageName={t(pageName)} title={t(title)} content={content} />
    </>
  );
};

InnerPage.propTypes = {
  pageName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default InnerPage;
