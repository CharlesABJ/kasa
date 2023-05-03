import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LogementBanner from "../components/LogementBanner";
import LogementTitle from "../components/LogementTitle";
import LogementHost from "../components/LogementHost";
import Tag from "../components/Tag";
import Rate from "../components/Rate";
import Collapse from "../components/Collapse";
import "../styles/pages/LogementProfile.css";
import { logementList } from "../datas/logementList";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";
import ArrowBanner from "../components/ArrowBanner";
function LogementProfile() {
  const { id } = useParams();
  const rates = [1, 2, 3, 4, 5];
  const [activeBanner, setActiveBanner] = useState(0);

  const logement = logementList.find((logement) => logement.id === id);
  if (!logement) {
    return <Error404 />;
  }

  const handleClickNextBanner = () => {
    if (activeBanner === logement.pictures.length - 1) {
      setActiveBanner(0);
    } else {
      setActiveBanner(activeBanner + 1);
    }
  };
  const handleClickPreviewBanner = () => {
    if (activeBanner === 0) {
      setActiveBanner(logement.pictures.length - 1);
    } else {
      setActiveBanner(activeBanner - 1);
    }
  };

  return (
    <div>
      <Header />
      <div className="logement-banner">
        <div className="arrows-banner-zone">
          <ArrowBanner
            onClick={handleClickPreviewBanner}
            className="arrow-banner arrow-left fa-solid fa-chevron-up  "
          />
          <ArrowBanner
            onClick={handleClickNextBanner}
            className="arrow-banner fa-solid fa-chevron-up"
          />
        </div>

        {logement.pictures.map((e, index) => (
          <LogementBanner
            className={`img-banner ${
              index === activeBanner ? "active-banner" : ""
            }`}
            key={index}
            imgSrc={e}
            title="Bannière"
          />
        ))}
      </div>
      <div className="description-zone">
        <div className="logement-title-and-description">
          <LogementTitle title={logement.title} location={logement.location} />{" "}
          <div className="tag-zone">
            {logement.tags.map((e, index) => (
              <Tag key={index} tag={e} />
            ))}
          </div>
        </div>
        <div className="logement-host-and-rates">
          <div className="host-zone">
            <LogementHost
              hostPicture={logement.host.picture}
              hostName={logement.host.name}
            />
          </div>
          <div className="rates-zone">
            {rates.map((e, index) => (
              <Rate
                key={index}
                color={parseInt(logement.rating) >= e ? "colored" : ""}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="collapses">
        <Collapse
          label="Description"
          description={logement.description}
          openByDefault="true"
        />
        <Collapse
          label="Équipements"
          description={logement.equipments.map((e, index) => (
            <span key={index}>{e}</span>
          ))}
          openByDefault="true"
        />
      </div>
      <Footer />
    </div>
  );
}

export default LogementProfile;
