//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import { useState } from "react";
import "./Gallery.css";
import port1 from "../img/portfolio/portfolio-1.jpg";
import port2 from "../img/portfolio/portfolio-2.jpg";
import port3 from "../img/portfolio/portfolio-3.jpg";
import port4 from "../img/portfolio/portfolio-4.jpg";
import port5 from "../img/portfolio/portfolio-5.jpg";
import port6 from "../img/portfolio/portfolio-6.jpg";
import port7 from "../img/portfolio/portfolio-7.jpg";
import port8 from "../img/portfolio/portfolio-8.jpg";
import port9 from "../img/portfolio/portfolio-9.jpg";

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Gallery() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const galleryItems = [
    { id: 1, src: port1, filter: "Console", nameKey: "gallery.parts.0.name", filterKey: "gallery.parts.0.filter" },
    { id: 2, src: port1, filter:  "Console", nameKey: "gallery.parts.0.name", filterKey: "gallery.parts.0.filter" },
    { id: 3, src: port1, filter:  "Console", nameKey: "gallery.parts.0.name", filterKey: "gallery.parts.0.filter" },
    { id: 4, src: port1, filter:  "Console", nameKey: "gallery.parts.0.name", filterKey: "gallery.parts.0.filter" },
    { id: 5, src: port2, filter:  "PC", nameKey: "gallery.parts.1.name", filterKey: "gallery.parts.1.filter" },
    { id: 6, src: port2, filter:  "PC", nameKey: "gallery.parts.1.name", filterKey: "gallery.parts.1.filter" },
    { id: 7, src: port2, filter:  "PC", nameKey: "gallery.parts.1.name", filterKey: "gallery.parts.1.filter" },
    { id: 8, src: port2, filter:  "PC", nameKey: "gallery.parts.1.name", filterKey: "gallery.parts.1.filter" },
    { id: 9, src: port3, filter:  "Hardware", nameKey: "gallery.parts.2.name", filterKey: "gallery.parts.2.filter" },
    { id: 10, src: port3, filter:  "Hardware", nameKey: "gallery.parts.2.name", filterKey: "gallery.parts.2.filter" },
    { id: 11, src: port3, filter:  "Hardware", nameKey: "gallery.parts.2.name", filterKey: "gallery.parts.2.filter" },
    { id: 12, src: port3, filter:  "Hardware", nameKey: "gallery.parts.2.name", filterKey: "gallery.parts.2.filter" },
    { id: 13, src: port4, filter:  "PC", nameKey: "gallery.parts.3.name", filterKey: "gallery.parts.3.filter" },
    { id: 14, src: port4, filter:  "PC", nameKey: "gallery.parts.3.name", filterKey: "gallery.parts.3.filter" },
    { id: 15, src: port4, filter:  "PC", nameKey: "gallery.parts.3.name", filterKey: "gallery.parts.3.filter" },
    { id: 16, src: port4, filter:  "PC", nameKey: "gallery.parts.3.name", filterKey: "gallery.parts.3.filter" },
    { id: 17, src: port5, filter:  "Console", nameKey: "gallery.parts.4.name", filterKey: "gallery.parts.4.filter" },
    { id: 18, src: port5, filter:  "Console", nameKey: "gallery.parts.4.name", filterKey: "gallery.parts.4.filter" },
    { id: 19, src: port5, filter:  "Console", nameKey: "gallery.parts.4.name", filterKey: "gallery.parts.4.filter" },
    { id: 20, src: port5, filter:  "Console", nameKey: "gallery.parts.4.name", filterKey: "gallery.parts.4.filter" },
    { id: 21, src: port6, filter:  "Hardware", nameKey: "gallery.parts.5.name", filterKey: "gallery.parts.5.filter" },
    { id: 22, src: port6, filter:  "Hardware", nameKey: "gallery.parts.5.name", filterKey: "gallery.parts.5.filter" },
    { id: 23, src: port6, filter:  "Hardware", nameKey: "gallery.parts.5.name", filterKey: "gallery.parts.5.filter" },
    { id: 24, src: port6, filter:  "Hardware", nameKey: "gallery.parts.5.name", filterKey: "gallery.parts.5.filter" },
    { id: 25, src: port7, filter:  "Hardware", nameKey: "gallery.parts.6.name", filterKey: "gallery.parts.6.filter" },
    { id: 26, src: port7, filter:  "Hardware", nameKey: "gallery.parts.6.name", filterKey: "gallery.parts.6.filter" },
    { id: 27, src: port7, filter:  "Hardware", nameKey: "gallery.parts.6.name", filterKey: "gallery.parts.6.filter" },
    { id: 28, src: port7, filter:  "Hardware", nameKey: "gallery.parts.6.name", filterKey: "gallery.parts.6.filter" },
    { id: 29, src: port8, filter:  "PC", nameKey: "gallery.parts.7.name", filterKey: "gallery.parts.7.filter" },
    { id: 30, src: port8, filter:  "PC", nameKey: "gallery.parts.7.name", filterKey: "gallery.parts.7.filter" },
    { id: 31, src: port8, filter:  "PC", nameKey: "gallery.parts.7.name", filterKey: "gallery.parts.7.filter" },
    { id: 32, src: port8, filter:  "PC", nameKey: "gallery.parts.7.name", filterKey: "gallery.parts.7.filter" },
    { id: 33, src: port9, filter:  "Console", nameKey: "gallery.parts.8.name", filterKey: "gallery.parts.8.filter" },
    { id: 34, src: port9, filter:  "Console", nameKey: "gallery.parts.8.name", filterKey: "gallery.parts.8.filter" },
    { id: 35, src: port9, filter:  "Console", nameKey: "gallery.parts.8.name", filterKey: "gallery.parts.8.filter" },
    { id: 36, src: port9, filter:  "Console", nameKey: "gallery.parts.8.name", filterKey: "gallery.parts.8.filter" },
  ];

  return (
    <>
      <Helmet>
        <title>{t("page_titles.gallery")}</title>
      </Helmet>
      <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                <li
                  className={filter === "all" ? "filter-active" : ""}
                  onClick={() => handleFilterChange("all")}
                >
                  {t("gallery.portfolio_fiters.all")}
                </li>
                <li
                  className={filter === "Console" ? "filter-active" : ""}
                  onClick={() => handleFilterChange("Console")}
                >
                  {t("gallery.portfolio_fiters.consoles")}
                </li>
                <li
                  className={filter === "PC" ? "filter-active" : ""}
                  onClick={() => handleFilterChange("PC")}
                >
                  {t("gallery.portfolio_fiters.pc")}
                </li>
                <li
                  className={filter === "Hardware" ? "filter-active" : ""}
                  onClick={() => handleFilterChange("Hardware")}
                >
                  {t("gallery.portfolio_fiters.hardware")}
                </li>
              </ul>
            </div>
          </div>

          <div
            className="row gy-4 portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {galleryItems
              .filter((item) => filter === "all" || item.filter === filter)
              .map((item) => {
                const detailsUrl = `/Tech-Museum/gallery/details/${item.id}`;
                return (
                  <div
                    key={item.id}
                    className={`col-lg-4 col-md-6 portfolio-item filter-${item.filter}`}
                  >
                    <div className="portfolio-wrap">
                      <img src={item.src} className="img-fluid" alt="" />
                      <div className="portfolio-info">
                        <h4>{t(item.nameKey)}</h4>
                        <p>{t(item.filterKey)}</p>
                        <div className="portfolio-links">
                          <Link
                            to={detailsUrl}
                            title={t("gallery.more_details")}
                          >
                            <i className="bi bi-link"></i>
                          </Link>
                          <Link to={detailsUrl} title={t("gallery.3d_view")}>
                            <i className="bi bi-badge-3d"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
