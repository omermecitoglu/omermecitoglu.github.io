import "~/styles/custom-bootstrap.scss";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import React, { type ReactNode } from "react";
import Header from "./Header";

config.autoAddCss = false;

type AppLayoutProps = {
  children: ReactNode,
};

const AppLayout = ({
  children,
}: AppLayoutProps) => (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
);

export default AppLayout;
