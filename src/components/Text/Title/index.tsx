import React from "react";
import styled from "styled-components";

const StyledNormal = styled.span`
  color: #fff;
  padding-right: 0.5rem;
`;

const StyledHighLight = styled.span`
  color: #fff;
  background: rgb(39, 42, 191, 0.7);
  text-shadow: 5px 2px rgb(24, 160, 251);
  padding: 0 0.5rem 0 0.25rem;
  letter-spacing: 3px;
`;

export const Title = ({ text, fontSize }: { text: string; fontSize?: string }) => {
  if (fontSize) {
    return (
      <span style={{ fontSize: fontSize }}>
        <StyledNormal>{text}</StyledNormal>
      </span>
    );
  }
  return <StyledNormal>{text}</StyledNormal>;
};

export const HighLightTitle = ({ text, fontSize }: { text: string; fontSize?: string }) => {
  if (fontSize) {
    return (
      <span style={{ fontSize: fontSize }}>
        <StyledHighLight>{text}</StyledHighLight>
      </span>
    );
  }
  return <StyledHighLight>{text} </StyledHighLight>;
};
