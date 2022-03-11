import React from "react";
import styled from "styled-components";
import FooterMenuItem from "./FooterMenuItem";

const StyledTitle = styled.div`
  color: #f2f2f2;
  font-weight: 700;
  margin: 32px 0;
`;

const FooterMenuList = ({ title, listContent, className }: { title: string; listContent: string[]; className?: string }) => {
  return (
    <div>
      {title !== "" && <StyledTitle>{title}</StyledTitle>}
      <ul className={className}>
        {listContent.map((content: string, idx: number) => (
          <FooterMenuItem key={idx} content={content} />
        ))}
      </ul>
    </div>
  );
};

export default FooterMenuList;
