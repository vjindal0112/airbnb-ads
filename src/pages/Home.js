import styled from "styled-components";
import { Tagline, Subtitle, ButtonA } from "../styles";
import Navbar from "../components/Navbar";
import HomePricingBlock from "../components/HomePricingBlock";
import Footer from "../components/Footer";

const HomeImg = styled.img`
  max-height: 200px;
  margin: 12px auto;
  margin-top: 60px;
`;

const GradientWrapper = styled.div`
  background-image: linear-gradient(#f6cdc0, #ee9c82);
  min-height: 90vh;
`;

const PricingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export default function Home() {
  return (
    <>
      <GradientWrapper style={{ textAlign: "center" }}>
        <Navbar />
        <Tagline>Connecting Airbnb hosts to experiences</Tagline>
        <Subtitle>Increase your experience conversions</Subtitle>
        <ButtonA href="mailto:formans@umich.edu">Contact</ButtonA>
        <HomeImg src="/undraw_connection.svg"></HomeImg>
      </GradientWrapper>
      <div></div>
      <div>
        <Tagline>Pricing</Tagline>
        <PricingWrapper>
          <HomePricingBlock
            basePrice="30"
            percent="20"
            subText="Host with 1 apartment"
          />
          <HomePricingBlock
            basePrice="50"
            percent="25"
            subText="Host with 5+ apartments"
            boxShadowSize="8"
          />
          <HomePricingBlock
            basePrice="100"
            percent="30"
            subText="Superhost with 15+ apartments"
          />
        </PricingWrapper>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </>
  );
}
