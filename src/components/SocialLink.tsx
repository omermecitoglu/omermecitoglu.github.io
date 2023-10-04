import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

type SocialLinkProps = {
  icon: IconProp,
  url: string,
};

const SocialLink = ({
  icon,
  url,
}: SocialLinkProps) => (
  <a href={url} target="_blank" className="btn btn-secondary rounded-circle p-1">
    <FontAwesomeIcon icon={icon} size="lg" className="fa-fw" />
  </a>
);

export default SocialLink;
