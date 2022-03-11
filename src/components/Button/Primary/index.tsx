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
  padding: 0.5rem 1.5rem;
  font-weight: 600;
`;

const PrimaryButton = ({ content }: { content: string }) => {
  return (
    <StyledWrapper>
      <StyledButton>{content}</StyledButton>
    </StyledWrapper>
  );
};

export default PrimaryButton;
