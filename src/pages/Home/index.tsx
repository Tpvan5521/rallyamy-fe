import React from "react";
import styled from "styled-components";
import { Title, HighLightTitle } from "components/Text/Title";
import { Content, StrongContent } from "components/Text/Paragraph";
import PrimaryButton from "components/Button/Primary";
import DefaultButton from "components/Button/Default";
import Timeline from "components/Timeline";
import logo_big from "assets/images/logo_big.png";
import feet from "assets/images/feet.png";
import img_0 from "assets/images/img_0.png";
import img_1 from "assets/images/img_1.png";

const StyledWidth = styled.div`
  max-width: ${(props: { maxWidth: string }) => props.maxWidth};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  margin: 3rem 0;
  & > div {
    margin-right: 1rem;
  }
`;

const StyledBox = styled.div`
  background: #27252f;
  box-shadow: 0px 4px 25px rgba(14, 18, 28, 0.15);
`;

const StyledBlueBox = styled.div`
  background-color: #272abf;
  color: white;
`;

function HomePage() {
  return (
    <>
      <div className="container" style={{ marginBottom: "460px" }}>
        <div className="mx-auto flex">
          <div className="flex-auto" style={{ marginTop: "200px" }}>
            <StyledWidth maxWidth="450px">
              <p className="font-bold mb-4">
                <Title text="Anyone can be a" fontSize="64px" /> <HighLightTitle text="Trader" fontSize="64px" />
              </p>
              <StrongContent text="The first version of Rallyamy is ready to use. Start to earning tokens right now. Come and get it!" />
              <ButtonsWrapper>
                <PrimaryButton content="Join now" />
                <DefaultButton content="Whitepaper" />
              </ButtonsWrapper>
            </StyledWidth>
          </div>
          <img src={logo_big} alt="Big logo" style={{ marginTop: "-68px" }} />
        </div>
        <div className="mx-auto flex flex-col justify-center items-center text-center" style={{ marginTop: "-130px" }}>
          <div className="my-4 font-bold">
            <Title text="What is Rallyamy?" fontSize="36px" />
          </div>
          <StrongContent
            maxWidth="455px"
            text="Know our team by sight. We have tried on this project to create for you a unique tool for earning tokens."
          />
        </div>
        <div className="mx-auto flex">
          <StyledBox>
            <Title text="We search" fontSize="24px" />
            <Content text="Rallyamy looks for new airdrops for you and analyzes which ones will be the most profitable" maxWidth="241px" />
          </StyledBox>
          <StyledBox>
            <Title text="Automatic participation" fontSize="24px" />
            <Content text="You don't have to choose which airdrop to practicipate in. Our systerm will do it for you." maxWidth="241px" />
          </StyledBox>
        </div>
        <div className="mx-auto">
          <StyledBox>
            <div className="flex">
              <div>
                <Title text="You get tokens" fontSize="24px" />
                <Content
                  text="Becoming a crypto trader is easy! And you don't need to spend hours researching the market and building strategies"
                  maxWidth="375px"
                />
              </div>
              <img src={feet} alt="foot" />
            </div>
          </StyledBox>
        </div>
        <div className="mx-auto flex">
          <img src={img_0} alt="img" />
          <div className="flex-auto">
            <Title text="About Rallyamy number?" fontSize="36px" />
            <div>
              <RallyamyNumber
                number="24"
                title="Only 24 cent per token"
                content="This is your lucky day, buy tokens at 24 cents apiece in the first airdrop"
              />
              <RallyamyNumber
                number="60%"
                title="60% discounts for influencers"
                content="if you csn offer us something interesting,  buy tokens for 10 cents."
              />
              <RallyamyNumber number="100 milion" title="Limited token supply" content="100 milion token is waiting for you" />
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col justify-center items-center text-center">
          <div className="my-4 font-bold">
            <Title text="How to start?" fontSize="36px" />
          </div>
          <StrongContent
            maxWidth="455px"
            text="There are alot of airdrop happening in the crypto sphere and milions of people have to spend a lot of time lookinng for them. We 've created a simple tool that makes this process sompler"
          />
        </div>
        <div className="mx-auto flex">
          <div className="flex-auto">
            <Timeline />
          </div>
          <img src={img_1} alt="img" />
        </div>
        <div className="mx-auto">
          <StyledBlueBox>
            <Title text="Get started" fontSize="36px" />
            <Content
              text="Rallyamy is a non-custodian wallet that helps you find the best opportunities in the crypto world."
              maxWidth="456px"
            />
            <DefaultButton content="Join now" />
          </StyledBlueBox>
        </div>
      </div>
    </>
  );
}

const RallyamyNumber = ({ number, title, content }: { number: string; title: string; content: string }) => {
  return (
    <div>
      <div style={{ color: "#bdbdbd", fontSize: "72px", opacity: "0.4" }} className="font-bold">
        {number}
      </div>
      <Title text={title} fontSize="24px" />
      <Content text={content} maxWidth="360px" />
    </div>
  );
};

export default HomePage;
