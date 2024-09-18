import React from "react";
import { Outlet } from "react-router-dom";
import Side from "../components/Side";
import Container from "../components/Container";

const RootLayout = () => {
  return (
    <div>
      <Container>
        <div className="flex">
          <Side />
          <Outlet />
        </div>
      </Container>
    </div>
  );
};

export default RootLayout;
