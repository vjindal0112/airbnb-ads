import styled from "styled-components";
import { Subtitle, Button } from "../styles";
import Navbar from "../components/Navbar";

const SentImg = styled.img`
  max-height: 120px;
  margin: 12px auto;
`;

export default function Sent() {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <SentImg src="/sent_email.svg" />
      <Subtitle>Your emails were sent perfectly</Subtitle>
      <Button to="/email">Send More</Button>
    </div>
  );
}
