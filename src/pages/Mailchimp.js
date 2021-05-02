import { OnboardingTagline, Subtitle, Button } from "../styles";
import Navbar from "../components/Navbar";

export default function Mailchimp() {
  return (
    <>
      <Navbar />
      <OnboardingTagline>Connect Mailchimp</OnboardingTagline>
      <Subtitle>Send emails seamlessly through the platform</Subtitle>
      <Button to="/email">Connect</Button>
    </>
  );
}
