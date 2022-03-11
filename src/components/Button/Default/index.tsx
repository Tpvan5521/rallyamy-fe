import React from "react";
import styled from "styled-components";
import borderedButton from "assets/images/bordered_button.png";

const StyledWrapper = styled.div`
  width: 168px;
  height: 46px;
  background-repeat: no-repeat;
  background-size: contain;
  background: url(${(props: { imgUrl: any }) => props.imgUrl});
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DefaultButton = ({ content }: { content: string }) => {
  return (
    <StyledWrapper imgUrl={borderedButton} style={{ backgroundPosition: "50% 43%" }}>
      <div>{content}</div>
    </StyledWrapper>
  );
};

export default DefaultButton;
