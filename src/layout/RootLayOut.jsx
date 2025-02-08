import React from "react";
import { Outlet } from "react-router-dom";
import Side from "../components/Side";
import Container from "../components/Container";
import Nav from "../components/Nav";


const RootLayout = () => {
  return (
    <div>
      <Container>
        <div className="md:flex">
          <div>
          <Nav className="block md:hidden" />
          <Side className="hidden md:block" />
          </div>
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default RootLayout;
