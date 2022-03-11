import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledItem = styled.li`
  color: #bdbdbd;
  margin: 0 60px;
  font-family: "Ubuntu";
`;

const HeaderMenuItem = ({ path, content }: { path: string; content: string }) => {
  return (
    <StyledItem>
      <Link to={path}>{content}</Link>
    </StyledItem>
  );
};

export default HeaderMenuItem;
