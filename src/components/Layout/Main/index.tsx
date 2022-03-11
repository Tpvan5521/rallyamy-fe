import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.div`
  background-color: #201e28;
  color: white;
`;

const Main = () => {
  return (
    <StyledMain className="mb-auto">
      <div className="container mx-auto">
        <Outlet />
      </div>
    </StyledMain>
  );
};

export default Main;
