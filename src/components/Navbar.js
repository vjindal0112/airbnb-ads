import styled from "styled-components";
import { Link } from "react-router-dom";

const Bar = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 12px;
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Logo = styled.img`
  height: 100%;
  margin: 4px 12px;
  float: left;
  @media (max-width: 768px) {
    margin: 4px 8px;
    float: left;
  }
`;

const NavName = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  font-size: 28px;
`;

const Spacer = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  width: 10%;
`;

export default function Navbar() {
  return (
    <Bar>
      <Spacer></Spacer>
      <Logo src="/logo.png" />
      <Link to="/" style={{ textDecoration: "none", color: "black" }}>
        <NavName>MarketFlash</NavName>
      </Link>
    </Bar>
  );
}
