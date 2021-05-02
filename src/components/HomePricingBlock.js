import styled from "styled-components";
import { Subtitle, Button } from "../styles";

const Block = styled.div`
  border-radius: 8px;
  background-color: #fff;
  height: 400px;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  width: 500px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

const TextWrapper = styled.div`
  text-align: left;
  max-width: 60%;
  margin: 0 auto;
`;

export default function HomePricingBlock({ basePrice, percent, subText }) {
  return (
    <Block>
      <h1>${basePrice} + {percent}%</h1>
      <Subtitle>{subText}</Subtitle>
      <TextWrapper>
        <p>Step 1: Match with Airbnb Hosts</p>
        <p>Step 2: Hosts tell interested guests</p>
        <p>Step 3: Get new clients</p>
      </TextWrapper>
      <Button style={{"marginTop": "auto", "marginBottom": "24px"}}>Match now</Button>
    </Block>
  );
}
