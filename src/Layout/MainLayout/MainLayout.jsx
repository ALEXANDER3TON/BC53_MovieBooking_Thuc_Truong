import React from "react";

import Footer from "../../Components/Footer";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;