import styled from "styled-components";
import { Subtitle, Button } from "../styles";

const Block = styled.div`
  border-radius: 8px;
  background-color: #fff;
  height: 400px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: 12px;
  text-align: center;
  min-width: 360px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 8px;
  @media (max-width: 768px) {
    min-width: 280px;
    max-width: 281px;
  }
  @media (max-width: 280px) {
    min-width: 260px;
    max-width: 261px;
  }
`;

const TextWrapper = styled.div`
  text-align: left;
  width: 60%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export default function HomePricingBlock({
  basePrice,
  percent,
  subText,
  boxShadowSize,
}) {
  return (
    <Block
      style={
        boxShadowSize
          ? {
              boxShadow: `${boxShadowSize}px ${boxShadowSize}px ${boxShadowSize}px rgba(0,0,0,0.2)`,
            }
          : null
      }
    >
      <h1>
        ${basePrice} + {percent}%
      </h1>
      <Subtitle>{subText}</Subtitle>
      <TextWrapper>
        <p>Step 1: Send us an email</p>
        <p>Step 2: We find you a host</p>
        <p>Step 3: The host sends guests your way</p>
      </TextWrapper>
      <Button href="mailto:sjforman4@gmail.com" style={{ marginTop: "auto", marginBottom: "24px" }}>
        Match now
      </Button>
    </Block>
  );
}
