import React from "react";
import styled from "styled-components";
import { Title } from "components/Text/Title";
import { Content } from "components/Text/Paragraph";

const StyledDot = styled.span`
  height: 24px;
  width: 24px;
  background: #bdbdbd;
  border-radius: 50%;
`;

const TimelineItem = ({ title, content }: { title: string; content: string }) => {
  return (
    <li style={{ marginBottom: "132px" }}>
      <div className="flex items-center">
        <StyledDot />
        <p className="ml-6">
          <Title text={title} fontSize="24px" />
        </p>
      </div>
      <div className="ml-12">
        <Content text={content} maxWidth="360px" />
      </div>
    </li>
  );
};

export default TimelineItem;
