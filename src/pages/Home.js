import styled from "styled-components";
import { Tagline, Subtitle, Button } from "../styles";
import Navbar from "../components/Navbar";

const HomeImg = styled.img`
  max-height: 200px;
  margin: 12px auto;
  margin-top: 60px;
`;

export default function Home() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <Tagline>Connecting Airbnb hosts to experiences</Tagline>
        <Subtitle>Increase your experience conversions</Subtitle>
        <a style={{ textDecoration: "none" }} href="mailto:formans@umich.edu">
          <Button>Contact</Button>
        </a>
        <HomeImg src="/undraw_connection.svg"></HomeImg>
      </div>
      <div></div>
      <div></div>
    </>
  );
}
