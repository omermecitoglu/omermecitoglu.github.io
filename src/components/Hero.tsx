import React from "react";
import Typing from "./Typing";

type HeroProps = {
  backgroundURL: string,
};

const Hero = ({
  backgroundURL,
}: HeroProps) => (
  <section id="home" className="min-vh-100" style={{ backgroundImage: `url(${backgroundURL})` }}>
    <div className="container">
      <div className="vh-100 px-3 px-sm-5 mx-0 mx-sm-5 d-flex flex-column justify-content-center text-light">
        <div>
          <h1 className="">{process.env.PROFILE_NAME}</h1>
        </div>
        <p className="fs-2">I'm <Typing strings={["Developer", "Designer", "System Architect", "a History Buff"]} /></p>
      </div>
    </div>
  </section>
);

export default Hero;
