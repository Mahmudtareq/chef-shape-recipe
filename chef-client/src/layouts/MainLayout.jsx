/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import { Container } from "@mantine/core";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      {/* <Container> */}
      <Outlet />
      {/* </Container> */}
      <Footer />
    </>
  );
};

export default MainLayout;
