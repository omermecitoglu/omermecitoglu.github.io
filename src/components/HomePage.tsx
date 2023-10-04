import "~/styles/home.scss";
import React from "react";
import AboutMe from "./AboutMe";
import Hero from "./Hero";
import Portfolio from "./Portfolio";

const HomePage = () => (
  <>
    <Hero backgroundURL={process.env.HERO_BACKGROUND_URL || "https://picsum.photos/id/1/1920/1280"} />
    <AboutMe />
    <Portfolio />
  </>
);

export default HomePage;
