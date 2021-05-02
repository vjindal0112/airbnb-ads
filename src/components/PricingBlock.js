import styled from "styled-components";
import { Subtitle, ButtonA } from "../styles";

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

export default function PricingBlock({ price, name }) {
  return (
    <Block>
      <h1>${price}</h1>
      <Subtitle>Increasing conversions for {name}</Subtitle>
      <TextWrapper>
        <p>Step 1: Match with Airbnb Hosts</p>
        <p>Step 2: Hosts tell interested guests</p>
        <p>Step 3: Get new clients</p>
      </TextWrapper>
      <ButtonA href="mailto:formans@umich.edu" style={{"marginTop": "auto", "marginBottom": "24px"}}>Match now</ButtonA>
    </Block>
  );
}
