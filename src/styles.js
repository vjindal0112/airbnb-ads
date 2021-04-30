import styled from "styled-components";
import { Link } from "react-router-dom";
import { Power, PowerHover } from "./constants";

export const Logo = styled.img`
  max-height: 30vh;
  margin-top: 18px;
`;

export const Texth1 = styled.h1`
  font-size: 32px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 32px;
    font-weight: 300;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  width: 220px;
  padding: 16px 8px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  background: ${Power};
  border-radius: 8px;
  color: #fff;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2%;
  display: block;
  transition: all 0.5s;
  &:hover {
    background: ${PowerHover};
  }
  @media (max-width: 768px) {
    margin-top: 5%;
  }
`;

export const List = styled.li`
  font-size: 20px;
  text-align: left;
`;

export const Wrapper = styled.div`
  margin: auto;
  max-width: 50%;
  width: 50%;
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const Tagline = styled.h1`
  @media (max-width: 796px) {
    font-size: 30px;
    width: 90%;
  }
  width: 60%;
  margin-top: 36px;
  margin-left: auto;
  margin-right: auto;
  font-family: Manrope, "sans-serif";
  font-weight: 800;
  font-size: 60px;
  text-align: center;
  color: #18191f;
  display: block;
`;

export const Subtitle = styled.h1`
  margin: 8px;
  padding: 0;
  color: #555;
  font-size: 18px;
  text-align: center;
`;

export const OnboardingTagline = styled(Tagline)`
  @media (min-width: 796px) {
    font-size: 48px;
    margin-bottom: 12px;
  }
`;
