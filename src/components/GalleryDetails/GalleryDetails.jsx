//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./GalleryDetails.css";
import port1 from "../img/portfolio/portfolio-1.jpg";
import port2 from "../img/portfolio/portfolio-2.jpg";
import port3 from "../img/portfolio/portfolio-3.jpg";
import port4 from "../img/portfolio/portfolio-4.jpg";
import port5 from "../img/portfolio/portfolio-5.jpg";
import port6 from "../img/portfolio/portfolio-6.jpg";
import port7 from "../img/portfolio/portfolio-7.jpg";
import port8 from "../img/portfolio/portfolio-8.jpg";
import port9 from "../img/portfolio/portfolio-9.jpg";

import { useState } from "react";
import { useParams } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const images = [port1, port2, port3];

const galleryItems = [
  { id: 1, src: port1, filter: "Console", nameKey: "gallery.parts.0.name", filterKey: "gallery.parts.0.filter", url:"gallery.parts.0.url", info: "gallery.parts.0.info", manufacturer: "gallery.parts.0.manufacturer", manufacturing_date: "gallery.parts.0.manufacturing_date" },
  { id: 2, src: port1, filter:  "Console", nameKey: "gallery.parts.0.name", filterKey: "gallery.parts.0.filter", url:"gallery.parts.0.url", info: "gallery.parts.0.info", manufacturer: "gallery.parts.0.manufacturer", manufacturing_date: "gallery.parts.0.manufacturing_date" },
  { id: 3, src: port1, filter:  "Console", nameKey: "gallery.parts.0.name", filterKey: "gallery.parts.0.filter", url:"gallery.parts.0.url", info: "gallery.parts.0.info", manufacturer: "gallery.parts.0.manufacturer", manufacturing_date: "gallery.parts.0.manufacturing_date" },
  { id: 4, src: port1, filter:  "Console", nameKey: "gallery.parts.0.name", filterKey: "gallery.parts.0.filter", url:"gallery.parts.0.url", info: "gallery.parts.0.info", manufacturer: "gallery.parts.0.manufacturer", manufacturing_date: "gallery.parts.0.manufacturing_date" },
  { id: 5, src: port2, filter:  "PC", nameKey: "gallery.parts.1.name", filterKey: "gallery.parts.1.filter", url:"gallery.parts.1.url", info: "gallery.parts.1.info", manufacturer: "gallery.parts.1.manufacturer", manufacturing_date: "gallery.parts.1.manufacturing_date" },
  { id: 6, src: port2, filter:  "PC", nameKey: "gallery.parts.1.name", filterKey: "gallery.parts.1.filter", url:"gallery.parts.1.url", info: "gallery.parts.1.info", manufacturer: "gallery.parts.1.manufacturer", manufacturing_date: "gallery.parts.1.manufacturing_date" },
  { id: 7, src: port2, filter:  "PC", nameKey: "gallery.parts.1.name", filterKey: "gallery.parts.1.filter", url:"gallery.parts.1.url", info: "gallery.parts.1.info", manufacturer: "gallery.parts.1.manufacturer", manufacturing_date: "gallery.parts.1.manufacturing_date" },
  { id: 8, src: port2, filter:  "PC", nameKey: "gallery.parts.1.name", filterKey: "gallery.parts.1.filter", url:"gallery.parts.1.url", info: "gallery.parts.1.info", manufacturer: "gallery.parts.1.manufacturer", manufacturing_date: "gallery.parts.1.manufacturing_date" },
  { id: 9, src: port3, filter:  "Hardware", nameKey: "gallery.parts.2.name", filterKey: "gallery.parts.2.filter", url:"gallery.parts.2.url", info: "gallery.parts.2.info", manufacturer: "gallery.parts.2.manufacturer", manufacturing_date: "gallery.parts.2.manufacturing_date" },
  { id: 10, src: port3, filter:  "Hardware", nameKey: "gallery.parts.2.name", filterKey: "gallery.parts.2.filter", url:"gallery.parts.2.url", info: "gallery.parts.2.info", manufacturer: "gallery.parts.2.manufacturer", manufacturing_date: "gallery.parts.2.manufacturing_date" },
  { id: 11, src: port3, filter:  "Hardware", nameKey: "gallery.parts.2.name", filterKey: "gallery.parts.2.filter", url:"gallery.parts.2.url", info: "gallery.parts.2.info", manufacturer: "gallery.parts.2.manufacturer", manufacturing_date: "gallery.parts.2.manufacturing_date" },
  { id: 12, src: port3, filter:  "Hardware", nameKey: "gallery.parts.2.name", filterKey: "gallery.parts.2.filter", url:"gallery.parts.2.url", info: "gallery.parts.2.info", manufacturer: "gallery.parts.2.manufacturer", manufacturing_date: "gallery.parts.2.manufacturing_date" },
  { id: 13, src: port4, filter:  "PC", nameKey: "gallery.parts.3.name", filterKey: "gallery.parts.3.filter", url:"gallery.parts.3.url", info: "gallery.parts.3.info", manufacturer: "gallery.parts.3.manufacturer", manufacturing_date: "gallery.parts.3.manufacturing_date" },
  { id: 14, src: port4, filter:  "PC", nameKey: "gallery.parts.3.name", filterKey: "gallery.parts.3.filter", url:"gallery.parts.3.url", info: "gallery.parts.3.info", manufacturer: "gallery.parts.3.manufacturer", manufacturing_date: "gallery.parts.3.manufacturing_date" },
  { id: 15, src: port4, filter:  "PC", nameKey: "gallery.parts.3.name", filterKey: "gallery.parts.3.filter", url:"gallery.parts.3.url", info: "gallery.parts.3.info", manufacturer: "gallery.parts.3.manufacturer", manufacturing_date: "gallery.parts.3.manufacturing_date" },
  { id: 16, src: port4, filter:  "PC", nameKey: "gallery.parts.3.name", filterKey: "gallery.parts.3.filter", url:"gallery.parts.3.url", info: "gallery.parts.3.info", manufacturer: "gallery.parts.3.manufacturer", manufacturing_date: "gallery.parts.3.manufacturing_date" },
  { id: 17, src: port5, filter:  "Console", nameKey: "gallery.parts.4.name", filterKey: "gallery.parts.4.filter", url:"gallery.parts.4.url", info: "gallery.parts.4.info", manufacturer: "gallery.parts.4.manufacturer", manufacturing_date: "gallery.parts.4.manufacturing_date" },
  { id: 18, src: port5, filter:  "Console", nameKey: "gallery.parts.4.name", filterKey: "gallery.parts.4.filter", url:"gallery.parts.4.url", info: "gallery.parts.4.info", manufacturer: "gallery.parts.4.manufacturer", manufacturing_date: "gallery.parts.4.manufacturing_date" },
  { id: 19, src: port5, filter:  "Console", nameKey: "gallery.parts.4.name", filterKey: "gallery.parts.4.filter", url:"gallery.parts.4.url", info: "gallery.parts.4.info", manufacturer: "gallery.parts.4.manufacturer", manufacturing_date: "gallery.parts.4.manufacturing_date" },
  { id: 20, src: port5, filter:  "Console", nameKey: "gallery.parts.4.name", filterKey: "gallery.parts.4.filter", url:"gallery.parts.4.url", info: "gallery.parts.4.info", manufacturer: "gallery.parts.4.manufacturer", manufacturing_date: "gallery.parts.4.manufacturing_date" },
  { id: 21, src: port6, filter:  "Hardware", nameKey: "gallery.parts.5.name", filterKey: "gallery.parts.5.filter", url:"gallery.parts.5.url", info: "gallery.parts.5.info", manufacturer: "gallery.parts.5.manufacturer", manufacturing_date: "gallery.parts.5.manufacturing_date" },
  { id: 22, src: port6, filter:  "Hardware", nameKey: "gallery.parts.5.name", filterKey: "gallery.parts.5.filter", url:"gallery.parts.5.url", info: "gallery.parts.5.info", manufacturer: "gallery.parts.5.manufacturer", manufacturing_date: "gallery.parts.5.manufacturing_date" },
  { id: 23, src: port6, filter:  "Hardware", nameKey: "gallery.parts.5.name", filterKey: "gallery.parts.5.filter", url:"gallery.parts.5.url", info: "gallery.parts.5.info", manufacturer: "gallery.parts.5.manufacturer", manufacturing_date: "gallery.parts.5.manufacturing_date" },
  { id: 24, src: port6, filter:  "Hardware", nameKey: "gallery.parts.5.name", filterKey: "gallery.parts.5.filter", url:"gallery.parts.5.url", info: "gallery.parts.5.info", manufacturer: "gallery.parts.5.manufacturer", manufacturing_date: "gallery.parts.5.manufacturing_date" },
  { id: 25, src: port7, filter:  "Hardware", nameKey: "gallery.parts.6.name", filterKey: "gallery.parts.6.filter", url:"gallery.parts.6.url", info: "gallery.parts.6.info", manufacturer: "gallery.parts.6.manufacturer", manufacturing_date: "gallery.parts.6.manufacturing_date" },
  { id: 26, src: port7, filter:  "Hardware", nameKey: "gallery.parts.6.name", filterKey: "gallery.parts.6.filter", url:"gallery.parts.6.url", info: "gallery.parts.6.info", manufacturer: "gallery.parts.6.manufacturer", manufacturing_date: "gallery.parts.6.manufacturing_date" },
  { id: 27, src: port7, filter:  "Hardware", nameKey: "gallery.parts.6.name", filterKey: "gallery.parts.6.filter", url:"gallery.parts.6.url", info: "gallery.parts.6.info", manufacturer: "gallery.parts.6.manufacturer", manufacturing_date: "gallery.parts.6.manufacturing_date" },
  { id: 28, src: port7, filter:  "Hardware", nameKey: "gallery.parts.6.name", filterKey: "gallery.parts.6.filter", url:"gallery.parts.6.url", info: "gallery.parts.6.info", manufacturer: "gallery.parts.6.manufacturer", manufacturing_date: "gallery.parts.6.manufacturing_date" },
  { id: 29, src: port8, filter:  "PC", nameKey: "gallery.parts.7.name", filterKey: "gallery.parts.7.filter", url:"gallery.parts.7.url", info: "gallery.parts.7.info", manufacturer: "gallery.parts.7.manufacturer", manufacturing_date: "gallery.parts.7.manufacturing_date" },
  { id: 30, src: port8, filter:  "PC", nameKey: "gallery.parts.7.name", filterKey: "gallery.parts.7.filter", url:"gallery.parts.7.url", info: "gallery.parts.7.info", manufacturer: "gallery.parts.7.manufacturer", manufacturing_date: "gallery.parts.7.manufacturing_date" },
  { id: 31, src: port8, filter:  "PC", nameKey: "gallery.parts.7.name", filterKey: "gallery.parts.7.filter", url:"gallery.parts.7.url", info: "gallery.parts.7.info", manufacturer: "gallery.parts.7.manufacturer", manufacturing_date: "gallery.parts.7.manufacturing_date" },
  { id: 32, src: port8, filter:  "PC", nameKey: "gallery.parts.7.name", filterKey: "gallery.parts.7.filter", url:"gallery.parts.7.url", info: "gallery.parts.7.info", manufacturer: "gallery.parts.7.manufacturer", manufacturing_date: "gallery.parts.7.manufacturing_date" },
  { id: 33, src: port9, filter:  "Console", nameKey: "gallery.parts.8.name", filterKey: "gallery.parts.8.filter", url:"gallery.parts.8.url", info: "gallery.parts.8.info", manufacturer: "gallery.parts.8.manufacturer", manufacturing_date: "gallery.parts.8.manufacturing_date" },
  { id: 34, src: port9, filter:  "Console", nameKey: "gallery.parts.8.name", filterKey: "gallery.parts.8.filter", url:"gallery.parts.8.url", info: "gallery.parts.8.info", manufacturer: "gallery.parts.8.manufacturer", manufacturing_date: "gallery.parts.8.manufacturing_date" },
  { id: 35, src: port9, filter:  "Console", nameKey: "gallery.parts.8.name", filterKey: "gallery.parts.8.filter", url:"gallery.parts.8.url", info: "gallery.parts.8.info", manufacturer: "gallery.parts.8.manufacturer", manufacturing_date: "gallery.parts.8.manufacturing_date" },
  { id: 36, src: port9, filter:  "Console", nameKey: "gallery.parts.8.name", filterKey: "gallery.parts.8.filter", url:"gallery.parts.8.url", info: "gallery.parts.8.info", manufacturer: "gallery.parts.8.manufacturer", manufacturing_date: "gallery.parts.8.manufacturing_date" },
];

function GalleryDetails() {
  const { id } = useParams();
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectedItem = galleryItems.find((item) => item.id === parseInt(id));

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  if (!selectedItem) {
    return <Navigate to="/Tech-Museum/*" />;
  }

  return (
    <>
      <Helmet>
        <title>{t(selectedItem.nameKey)}</title>
      </Helmet>
      <main id="main">
        <section className="breadcrumbs">
          <div className="container">
            <ol>
              <li>
                <Link to="/Tech-Museum/">Home</Link>
              </li>
              <li>
                <Link to="/Tech-Museum/gallery">{t("gallery_details.page_name")}</Link>
              </li>
              <li>{t(selectedItem.nameKey)}</li>
            </ol>
            <h2>{t(selectedItem.nameKey)}</h2>
          </div>
        </section>

        <section className="inner-page">
          <div className="container">
            <section id="portfolio-details" className="portfolio-details">
              <div className="container">
                <div className="row gy-4">
                  <div className="col-lg-8">
                    <div className="portfolio-details-slider">
                      <div
                        className="slider-wrapper"
                        style={{
                          transform: `translateX(-${currentIndex * 100}%)`,
                        }}
                      >
                        {images.map((image, index) => (
                          <div className="slider-slide" key={index}>
                            <img src={selectedItem.src} alt="" />
                          </div>
                        ))}
                      </div>
                      <div className="slider-buttons">
                        <button className="slider-button" onClick={handlePrev}>
                          &lt;
                        </button>
                        <button className="slider-button" onClick={handleNext}>
                          &gt;
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="portfolio-info">
                      <h3>{t("gallery_details.product_information")}</h3>
                      <ul>
                        <li>
                          <strong>{t("gallery_details.category")}</strong>{" "}
                          {t(selectedItem.filterKey)}
                        </li>
                        <li>
                          <strong>{t("gallery_details.manufacturer")}</strong>{" "}
                          {t(selectedItem.manufacturer)}
                        </li>
                        <li>
                          <strong>
                            {t("gallery_details.manufacturing_date")}
                          </strong>{" "}
                          {t(selectedItem.manufacturing_date)}
                        </li>
                        <li>
                          <strong>{t("gallery_details.url")}</strong>{" "}
                          <a
                            href={`http://${t(selectedItem.url)}`}
                            target="blank"
                          >
                            {t(selectedItem.url)}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="portfolio-description">
                      <h2>{t("gallery_details.details")}</h2>
                      <p>{t(selectedItem.info)}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default GalleryDetails;
