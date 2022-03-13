import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
`;

const StyledButton = styled.button`
  clip-path: polygon(5% 0%, 100% 0, 100% 80%, 95% 100%, 0 100%, 0% 20%);
  background-color: #272abf;
  border: none;
  color: #fff;
  font-weight: 600;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PrimaryButton = ({ content, width }: { content: string; width?: string }) => {
  return (
    <StyledWrapper>
      <StyledButton style={{ width: width ? width : "168px" }}>{content}</StyledButton>
    </StyledWrapper>
  );
};

export default PrimaryButton;
