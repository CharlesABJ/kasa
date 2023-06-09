import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import "../styles/pages/Error404.css";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div>
      <Header />
      <Banner
        imgSrc="/assets/banner-home.png"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
      <Footer />
    </div>
  );
}

export default Home;
