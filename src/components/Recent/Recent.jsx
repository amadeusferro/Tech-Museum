//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./Recent.css";
import BlogIMG1 from "../img/blog/blog-1.jpg";
import BlogIMG2 from "../img/blog/blog-2.jpg";
import BlogIMG3 from "../img/blog/blog-3.jpg";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Recent() {
  const { t } = useTranslation();

  return (
    <>
      <section id="recent-blog-posts" className="recent-blog-posts">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h2>
              <Link to="/Tech-Museum/blog">{t("recent.description")}</Link>
            </h2>
            <p>{t("recent.headline")}</p>
          </header>

          <div className="row">
            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img">
                  <img src={BlogIMG1} className="img-fluid" alt="" />
                </div>
                <span className="post-date">{t("recent.posts.0.date")}</span>
                <h3 className="post-title">{t("recent.posts.0.headline")}</h3>
                <Link
                  to="/Tech-Museum/blog/single/1"
                  className="readmore stretched-link mt-auto"
                >
                  <span>{t("recent.read_more")}</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img">
                  <img src={BlogIMG2} className="img-fluid" alt="" />
                </div>
                <span className="post-date">{t("recent.posts.1.date")}</span>
                <h3 className="post-title">{t("recent.posts.1.headline")}</h3>
                <Link
                  to="/Tech-Museum/blog/single/2"
                  className="readmore stretched-link mt-auto"
                >
                  <span>{t("recent.read_more")}</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="post-box">
                <div className="post-img">
                  <img src={BlogIMG3} className="img-fluid" alt="" />
                </div>
                <span className="post-date">{t("recent.posts.2.date")}</span>
                <h3 className="post-title">{t("recent.posts.2.headline")}</h3>
                <Link
                  to="/Tech-Museum/blog/single/3"
                  className="readmore stretched-link mt-auto"
                >
                  <span>{t("recent.read_more")}</span>
                  <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recent;
