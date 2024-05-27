//Developed by Amadeus Ferrp (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);
//Translated by Amadeus Ferro (https://www.linkedin.com/in/amadeusferro) / (https://github.com/amadeusferro) / (https://www.instagram.com/amadeus.ferro/) / (contact.amadeusferro@gmail.com);

import "./FullTeam.css";
import jesmmerIMG from "../img/team/jesmmer_alves.jpeg";
import leilaIMG from "../img/team/leila_roling.jpeg";
import genericIMG from "../img/team/generic.jpg";
import amadeusIMG from "../img/team/amadeus_ferro.jpg";
import joaoIMG from "../img/team/joao_victor_guidi.jpeg";
import matheusIMG from "../img/team/matheus_ribeiro.jpeg";
import thallesIMG from "../img/team/thalles_eduardo.jpeg";
import brunoRodriguesIMG from "../img/team/bruno_rodrigues.jpeg";
import carlosIMG from "../img/team/carlos_eduardo.jpeg";
import brunoFagnerIMG from "../img/team/bruno_fagner.jpeg";
import lilianyIMG from "../img/team/liliany_nunes.jpeg";
import ericIMG from "../img/team/eric_vinicius.jpeg";
import iannyIMG from "../img/team/ianny_correia.jpeg";
import lyandraIMG from "../img/team/lyandra_fernandes.jpeg";
import marcellaIMG from "../img/team/marcella_rodrigues.jpeg";
import mariaIMG from "../img/team/maria_clara.jpeg";
import larahIMG from "../img/team/larah_beatriz.jpeg";
import guilhermeIMG from "../img/team/guilherme_correia.jpeg";
import eduardoIMG from "../img/team/eduardo_de_melo.jpeg";

import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Helmet } from "react-helmet";

const FullTeam = () => {
  const { t } = useTranslation();

  const [teamMembers] = useState([
    {
      name: "team.members.jesmmer_alves.name",
      position: "team.members.jesmmer_alves.position",
      image: jesmmerIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.leila_roling.name",
      position: "team.members.leila_roling.position",
      image: leilaIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.amadeus_ferro.name",
      position: "team.members.amadeus_ferro.position",
      image: amadeusIMG,
      github: "https://github.com/amadeusferro",
      instagram: "https://www.instagram.com/amadeus.ferro/",
      linkedin: "https://www.linkedin.com/in/amadeusferro/",
    },
    {
      name: "team.members.joao_lima.name",
      position: "team.members.joao_lima.position",
      image: joaoIMG,
      github: "",
      instagram: "https://www.instagram.com/jvglima03/",
      linkedin: "https://www.linkedin.com/in/jo%C3%A3o-lima-8b5122220/",
    },
    {
      name: "team.members.matheus_ribeiro.name",
      position: "team.members.matheus_ribeiro.position",
      image: matheusIMG,
      github: "",
      instagram: "https://www.instagram.com/utheuz_/",
      linkedin: "https://www.linkedin.com/in/utheuz-ribeiro/",
    },
    {
      name: "team.members.thalles_eduardo.name",
      position: "team.members.thalles_eduardo.position",
      image: thallesIMG,
      github: "https://github.com/Thalles-Eduardo",
      instagram: "https://www.instagram.com/zzthalleszz/",
      linkedin: "https://www.linkedin.com/in/thalles-eduardo-7297a6237/",
    },
    {
      name: "team.members.bruno_rodrigues.name",
      position: "team.members.bruno_rodrigues.position",
      image: brunoRodriguesIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.carlos_eduardo.name",
      position: "team.members.carlos_eduardo.position",
      image: carlosIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.eduardo_de_melo.name",
      position: "team.members.eduardo_de_melo.position",
      image: eduardoIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.eric_vinicius.name",
      position: "team.members.eric_vinicius.position",
      image: ericIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.gilmar_custodio.name",
      position: "team.members.gilmar_custodio.position",
      image: genericIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.guilherme_correia.name",
      position: "team.members.guilherme_correia.position",
      image: guilhermeIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.ianny_correia.name",
      position: "team.members.ianny_correia.position",
      image: iannyIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.bruno_fagner.name",
      position: "team.members.bruno_fagner.position",
      image: brunoFagnerIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.larah_beatriz.name",
      position: "team.members.larah_beatriz.position",
      image: larahIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.leonardo_faustino.name",
      position: "team.members.leonardo_faustino.position",
      image: genericIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.lyandra_fernandes.name",
      position: "team.members.lyandra_fernandes.position",
      image: lyandraIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.maria_clara.name",
      position: "team.members.maria_clara.position",
      image: mariaIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.emily_carla.name",
      position: "team.members.emily_carla.position",
      image: genericIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.liliany_nunes.name",
      position: "team.members.liliany_nunes.position",
      image: lilianyIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.marcella_rodrigues.name",
      position: "team.members.marcella_rodrigues.position",
      image: marcellaIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
    {
      name: "team.members.leonardo_felipe.name",
      position: "team.members.leonardo_felipe.position",
      image: genericIMG,
      github: "",
      instagram: "",
      linkedin: "",
    },
  ]);

  return (
    <>
      <Helmet>
        <title>{t("page_titles.team")}</title>
      </Helmet>
      <section id="team" className="team full-team">
        <div className="container mobile-container" data-aos="fade-up">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 d-flex align-items-stretch eachMember"
              >
                <div
                  className="member"
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div className="member-img">
                    <img src={member.image} className="img-fluid" alt="" />
                    <div className="social">
                      <a href={member.github} target="blank">
                        <i className="bi bi-github"></i>
                      </a>
                      <a href={member.instagram} target="blank">
                        <i className="bi bi-instagram"></i>
                      </a>
                      <a href={member.linkedin} target="blank">
                        <i className="bi bi-linkedin"></i>
                      </a>
                    </div>
                  </div>
                  <div className="member-info">
                    <h4>{t(member.name)}</h4>
                    <span>{t(member.position)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FullTeam;
