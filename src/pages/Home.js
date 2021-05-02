import styled from "styled-components";
import { Tagline, Subtitle, ButtonA } from "../styles";
import Navbar from "../components/Navbar";
import HomePricingBlock from "../components/HomePricingBlock";
import Footer from "../components/Footer";
import DirectBlock from "../components/DirectBlock";

const HomeImg = styled.img`
  height: 200px;
  margin: 12px auto;
  margin-top: 60px;
  @media (max-width: 1024px) {
    height: 300px;
  }
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const MyRow = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 280px) {
    max-width: 276px;
  }
`;

const MyCol = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  flex: ${(props) => props.xl};
  @media (max-width: 992px) {
    flex: ${(props) => props.lg};
  }
  @media (max-width: 768px) {
    flex: ${(props) => props.md};
  }
  padding: ${(props) => (props.padding ? props.padding : "0px")};

  @media (max-width: 280px) {
    max-width: 276px;
  }
`;

const Section = styled.section`
  padding: ${(props) => props.padding};
  color: #333;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  @media (max-width: 768px) {
    padding: 0 4px;
  }
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
        <ButtonA href="mailto:sjforman4@gmail.com">Contact</ButtonA>
        <HomeImg src="/undraw_connection.svg"></HomeImg>
      </GradientWrapper>
      <Section padding="0 8%" backgroundColor="#fafafa">
        <MyRow>
          <MyCol xl={3}>
            <DirectBlock
              numberText="1"
              beginText="Send us an email describing the traveler experience you offer"
              imageText="./mail_sent.svg"
            />
          </MyCol>
          <MyCol xl={3}>
            <DirectBlock
              numberText="2"
              beginText="We'll find you an Airbnb host with locations near your experience"
              imageText="./map.svg"
            />
          </MyCol>
          <MyCol xl={3}>
            <DirectBlock
              numberText="3"
              beginText="The Airbnb host will send guests your way!"
              imageText="./send_guests.svg"
              endText=""
            />
          </MyCol>
        </MyRow>
        <br />
        <br />
      </Section>
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
