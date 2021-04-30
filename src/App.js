import "./App.css";
import Home from "./pages/Home";
import styled from "styled-components";

const GradientWrapper = styled.div`
  background-image: linear-gradient(#f6cdc0, #ee9c82);
  min-height: 100vh;
`;

function App() {
  return (
    <GradientWrapper>
      <Home />
    </GradientWrapper>
  );
}
export default App;
