import React from "react";
import styled from "styled-components";

const StyledItem = styled.li`
  color: #bdbdbd;
  margin: 8px 44px 8px 0;
`;

const FooterMenuItem = ({ content, key }: { content: string; key: number }) => {
  return <StyledItem key={key}>{content}</StyledItem>;
};

export default FooterMenuItem;
