import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import FooterMenuList from "components/Menu/Footer/FooterMenuList";
import { IoMdPaperPlane } from "react-icons/io";
import { FiTwitter, FiFacebook } from "react-icons/fi";
import logo from "assets/images/logo_40x40.png";
import rallyamyContent from "assets/images/Rallyamy.png";

const StyledFooter = styled.div`
  background-color: #302e35;
  color: white;
`;

const StyledButton = styled.div`
  background-color: #272abf;
  color: white;
  font-size: 24px;
  line-height: 28px;
  font-family: "Ubuntu";
  font-weight: 700;
  width: 60%;
  height: 120px;
  margin: -3.75rem auto 3.75rem auto;
  box-shadow: 0px 4px 25px rgba(14, 18, 28, 0.15);
  border-radius: 63px;
`;

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div className="container mx-auto">
          <StyledButton className="flex items-center justify-center">Want to be aware of all the update?</StyledButton>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2">
              <Link to="/">
                <div className="flex items-center">
                  <img src={logo} alt="Rallyamy logo" className="mr-4" />
                  <img src={rallyamyContent} alt="Rallyamy logo" />
                </div>
              </Link>
            </div>
            <FooterMenuList title="About" listContent={["Rallyamy in numbers", "Team"]} />
            <FooterMenuList title="How to start?" listContent={["FAQ"]} />
          </div>
        </div>
      </StyledFooter>
      <StyledFooter>
        <div className="container mx-auto mt-14 mb-6">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-2">
              <p>Copyright 2022 Rallyamy. All Rights Reserved</p>
            </div>
            <div>
              <ul className="flex">
                <li className="mr-8 text-2xl">
                  <IoMdPaperPlane />
                </li>
                <li className="mr-7 text-2xl">
                  <FiTwitter />
                </li>
                <li className="mr-8 text-2xl">
                  <FiFacebook />
                </li>
              </ul>
            </div>
            <FooterMenuList title="" listContent={["Privacy", "Term&Conditions"]} className="flex" />
          </div>
        </div>
      </StyledFooter>
    </>
  );
};

export default Footer;
