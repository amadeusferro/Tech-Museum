//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./FullTestimonials.css";
import img1 from "../img/testimonials/testimonials-1.jpg";
import img2 from "../img/testimonials/testimonials-2.jpg";
import img3 from "../img/testimonials/testimonials-3.jpg";

import { FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const testimonialsData = [
  {
    id: 1,
    image: img1,
    nameKey: "testimonials.visitors.0.name",
    occupationKey: "testimonials.visitors.0.occupation",
    messageKey: "testimonials.visitors.0.message",
  },
  {
    id: 2,
    image: img2,
    nameKey: "testimonials.visitors.1.name",
    occupationKey: "testimonials.visitors.1.occupation",
    messageKey: "testimonials.visitors.1.message",
  },
  {
    id: 3,
    image: img3,
    nameKey: "testimonials.visitors.2.name",
    occupationKey: "testimonials.visitors.2.occupation",
    messageKey: "testimonials.visitors.2.message",
  },
  {
    id: 2,
    image: img2,
    nameKey: "testimonials.visitors.1.name",
    occupationKey: "testimonials.visitors.1.occupation",
    messageKey: "testimonials.visitors.1.message",
  },
  {
    id: 3,
    image: img3,
    nameKey: "testimonials.visitors.2.name",
    occupationKey: "testimonials.visitors.2.occupation",
    messageKey: "testimonials.visitors.2.message",
  },
  {
    id: 1,
    image: img1,
    nameKey: "testimonials.visitors.0.name",
    occupationKey: "testimonials.visitors.0.occupation",
    messageKey: "testimonials.visitors.0.message",
  },
  {
    id: 3,
    image: img3,
    nameKey: "testimonials.visitors.2.name",
    occupationKey: "testimonials.visitors.2.occupation",
    messageKey: "testimonials.visitors.2.message",
  },
  {
    id: 2,
    image: img2,
    nameKey: "testimonials.visitors.1.name",
    occupationKey: "testimonials.visitors.1.occupation",
    messageKey: "testimonials.visitors.1.message",
  },
  {
    id: 1,
    image: img1,
    nameKey: "testimonials.visitors.0.name",
    occupationKey: "testimonials.visitors.0.occupation",
    messageKey: "testimonials.visitors.0.message",
  },
];

function FullTestimonials() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("page_titles.testimonials")}</title>
      </Helmet>
      <div className="container" data-aos="fade-up">
        <div className="row g-2">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="col-md-4">
              <div className="card p-3 text-center px-4">
                <div className="user-image">
                  <img
                    src={testimonial.image}
                    className="rounded-circle"
                    width="80"
                    alt={t(testimonial.nameKey)}
                  />
                </div>
                <div className="user-content">
                  <h5 className="mb-0">{t(testimonial.nameKey)}</h5>
                  <span>{t(testimonial.occupationKey)}</span>
                  <p>{t(testimonial.messageKey)}</p>
                </div>
                <div className="ratings">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} className="star" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FullTestimonials;
