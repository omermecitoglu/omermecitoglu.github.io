"use client";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons/faFolderOpen";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import { findMostVisibleSection } from "~/core/section";

const Navigation = () => {
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setHash("#" + findMostVisibleSection().id);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-100 w-100 py-3 d-flex justify-content-center align-items-center">
      <Nav activeKey="" className="d-flex flex-column gap-4">
        <Nav.Item>
          <Nav.Link href="#home" className={classNames("text-decoration-none", hash === "#home" ? "link-light" : "link-secondary")}>
            <FontAwesomeIcon icon={faHome} size="lg" className="fa-fw" />
            <span className="ms-2 me-4">Home</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about" className={classNames("text-decoration-none", hash === "#about" ? "link-light" : "link-secondary")}>
            <FontAwesomeIcon icon={faUser} size="lg" className="fa-fw" />
            <span className="ms-2 me-4">About</span>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#portfolio" className={classNames("text-decoration-none", hash === "#portfolio" ? "link-light" : "link-secondary")}>
            <FontAwesomeIcon icon={faFolderOpen} size="lg" className="fa-fw" />
            <span className="ms-2 me-4">Portfolio</span>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navigation;
