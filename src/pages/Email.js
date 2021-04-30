import React, { useState } from "react";
import styled from "styled-components";
import { OnboardingTagline, Subtitle, Button, ButtonLogo } from "../styles";
import Navbar from "../components/Navbar";
import TextareaAutosize from "react-textarea-autosize";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import { Power } from "../constants";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
`;

const TextArea = styled(TextareaAutosize)`
  resize: none;
  padding: 12px;
  outline: none;
  margin-top: 20px;
  font-size: 16px;
  min-height: 120px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 5;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function Email() {
  let history = useHistory();

  const [loading, setLoading] = useState(false);

  function navigate() {
    setLoading(false);
    history.push("/people");
  }

  function startLoad() {
    setLoading(true);
    setTimeout(navigate, 3000);
  }

  return (
    <>
      {loading ? (
        <Overlay>
          {" "}
          <Subtitle>Analyzing...</Subtitle>
          <br />
          <Loader type="Circles" color={Power} height={80} width={80} />
        </Overlay>
      ) : null}
      <Navbar />
      <OnboardingTagline>Enter your email</OnboardingTagline>
      <Subtitle>
        We'll analyze it and find exactly who should receive your marketing
        email
      </Subtitle>
      <Wrapper>
        <TextArea placeholder="Enter your marketing email" autoFocus />
        <Button onClick={startLoad}>Analyze</Button>
      </Wrapper>
    </>
  );
}
