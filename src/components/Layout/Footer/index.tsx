import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: #201e28;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container mx-auto">
        <ul className="flex">
          <li>hi</li>
          <li>hi</li>
        </ul>
      </div>
    </StyledFooter>
  );
};

export default Footer;
