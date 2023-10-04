"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import type { PortfolioProject } from "~/core/portfolio";

const Project = ({
  thumbnail,
  thumbnailStyle,
  title,
  description,
  url,
  cta,
}: PortfolioProject) => (
  <Card className="portfolio-project h-100">
    <Card.Img variant="top" src={thumbnail} style={{ objectFit: thumbnailStyle }} />
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Button href={url} target="_blank" variant="primary">{cta}</Button>
    </Card.Body>
  </Card>
);

export default Project;
