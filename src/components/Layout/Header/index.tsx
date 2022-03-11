import React from "react";
import { Link } from "react-router-dom";
// import AuthStatus from "./AuthStatus";
import styled from "styled-components";
import MenuItem from "components/Menu/Header/HeaderMenuItem";
import PrimaryButton from "components/Button/Primary";
import logo from "assets/images/logo_40x40.png";
import rallyamyContent from "assets/images/Rallyamy.png";

const StyledHeader = styled.div`
  background-color: #201e28;
  color: white;
`;

const FirstItem = styled.li`
  color: #444bd8;
`;

const Header = () => {
  return (
    <StyledHeader>
      <div className="container mx-auto">
        {/* <AuthStatus useAuth={useAuth} /> check if user logged in*/}
        <ul className="flex my-3">
          <FirstItem>
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="Rallyamy logo" className="mr-4" />
                <img src={rallyamyContent} alt="Rallyamy logo" />
              </div>
            </Link>
          </FirstItem>
          <ul className="flex-1 flex items-center justify-center">
            <MenuItem path="/about" content="About" />
            <MenuItem path="/elonmoon" content="Elonmoon in numbers" />
            <MenuItem path="/team" content="Team" />
            <MenuItem path="/how-to-start" content="How to start?" />
            <MenuItem path="/faqs" content="FAQs" />
          </ul>
          {/* <MenuItem path="/profile" content="Profile" /> */}
          <PrimaryButton content="Connect Wallett" />
        </ul>
      </div>
    </StyledHeader>
  );
};

export default Header;
