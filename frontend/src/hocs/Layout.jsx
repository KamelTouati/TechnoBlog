import React from "react";
import { Navbar, Footer, ScrollToTopButton } from "../components";

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTopButton />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
