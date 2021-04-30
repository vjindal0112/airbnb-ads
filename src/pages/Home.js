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
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <Tagline>Find the perfect email targets</Tagline>
      <Subtitle>Hit your mark, increase conversions</Subtitle>
      <Button to="/salesforce">Let's get started</Button>
      <HomeImg src="/undraw_emails.svg"></HomeImg>
    </div>
  );
}
