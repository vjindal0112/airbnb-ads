import styled from "styled-components";
import { OnboardingTagline, Subtitle, Button } from "../styles";
import Navbar from "../components/Navbar";

export default function Salesforce() {
  return (
    <>
      <Navbar />
      <OnboardingTagline>Connect Salesforce</OnboardingTagline>
      <Subtitle>Get recommendations specific to <i>your</i> customers</Subtitle>
      <Button to="/mailchimp">Connect</Button>
    </>
  );
}
