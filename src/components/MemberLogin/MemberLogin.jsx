//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./MemberLogin.css";
import loginIMG from "../img/hero-img.png";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const MemberLogin = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("page_titles.member_login")}</title>
      </Helmet>
      <div className="container-login100">
        <div className="wrap-login100">
          <div className="login100-pic js-tilt" data-tilt>
            <img src={loginIMG} alt="IMG" />
          </div>

          <form className="login100-form validate-form">
            <span className="login100-form-title">
              {t("login_page.member_title")}
            </span>

            <div
              className="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz"
            >
              <input
                className="input100"
                type="text"
                name="email"
                placeholder={t("login_page.email")}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-envelope" aria-hidden="true"></i>
              </span>
            </div>

            <div
              className="wrap-input100 validate-input"
              data-validate="Password is required"
            >
              <input
                className="input100"
                type="password"
                name="pass"
                placeholder={t("login_page.password")}
              />
              <span className="focus-input100"></span>
              <span className="symbol-input100">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
            </div>

            <div className="container-login100-form-btn">
              <button className="login100-form-btn" to="/Tech-Museum/member-login">
                {t("login_page.button")}
              </button>
            </div>

            <div className="text-center p-t-12">
              <Link className="txt2" to="/Tech-Museum/member-login">
                {t("login_page.forgot")}?
              </Link>
            </div>

            <div className="text-center p-t-136">
              <Link className="txt2" to="/Tech-Museum/member-login">
                {t("login_page.create_new")}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MemberLogin;
