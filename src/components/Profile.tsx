import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons/faXTwitter";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import Image from "next/image";
import React from "react";
import SocialLink from "./SocialLink";

const Profile = () => (
  <div className="d-flex flex-column align-items-center py-4 gap-3">
    <Image
      src={process.env.PROFILE_PICTURE || "https://picsum.photos/id/1/120/120"}
      alt="Profile Picture"
      width={0}
      height={0}
      style={{ width: "7.5rem", height: "7.5rem" }}
      className="border-secondary" />
    <h1 className="fs-3 text-light m-0">
      {process.env.PROFILE_NAME}
    </h1>
    <div className="d-flex gap-2">
      {process.env.FACEBOOK_PROFILE_URL &&
        <SocialLink icon={faFacebookF} url={process.env.FACEBOOK_PROFILE_URL} />}
      {process.env.TWITTER_PROFILE_URL &&
        <SocialLink icon={faXTwitter} url={process.env.TWITTER_PROFILE_URL} />}
      {process.env.INSTAGRAM_PROFILE_URL &&
        <SocialLink icon={faInstagram} url={process.env.INSTAGRAM_PROFILE_URL} />}
      {process.env.PROFILE_GITHUB_URL &&
        <SocialLink icon={faGithub} url={process.env.PROFILE_GITHUB_URL} />}
      {process.env.LINKEDIN_PROFILE_URL &&
        <SocialLink icon={faLinkedinIn} url={process.env.LINKEDIN_PROFILE_URL} />}
      {process.env.PROFILE_EMAIL &&
        <SocialLink icon={faEnvelope} url={"mailto:" + process.env.PROFILE_EMAIL} />}
    </div>
  </div>
);

export default Profile;
