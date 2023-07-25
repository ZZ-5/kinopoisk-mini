import React from "react";
import "./index.scss";
import { Header } from "../Header";
import { Content } from "../Content";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <Content />
      <Footer />
    </div>
  );
};
