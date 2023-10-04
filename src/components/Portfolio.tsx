import "~/styles/portfolio.scss";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { getPortfolio } from "~/core/portfolio";
import Project from "./Project";

const Portfolio = async () => {
  const portfolio = await getPortfolio();
  return (
    <section id="portfolio" className="min-vh-100">
      <Container className="py-3">
        <h2>My Porfolio</h2>
        <hr />
        <Row>
          {portfolio.map(project =>
            <Col key={project.id} xs={12} sm={12} md={6} lg={6} xl={4} xxl={3} className="mb-4">
              <Project {...project} />
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
