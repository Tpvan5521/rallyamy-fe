import React from "react";
import styled from "styled-components";

const StyledNormal = styled.p`
  color: #bdbdbd;
`;

const StyledStrong = styled.p`
  color: #e0e0e0;
  font-weight: 500;
  font-size: 18px;
`;

export const Content = ({ text, maxWidth }: { text: string; maxWidth?: string }) => {
  if (maxWidth) {
    return (
      <div style={{ maxWidth: maxWidth }}>
        <StyledNormal>{text}</StyledNormal>
      </div>
    );
  }
  return <StyledNormal>{text}</StyledNormal>;
};

export const StrongContent = ({ text, maxWidth }: { text: string; maxWidth?: string }) => {
  if (maxWidth) {
    return (
      <div style={{ maxWidth: maxWidth }}>
        <StyledStrong>{text}</StyledStrong>
      </div>
    );
  }
  return <StyledStrong>{text}</StyledStrong>;
};
