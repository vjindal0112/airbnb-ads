import styled from "styled-components";

const Bar = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 12px;
  font-size: 14px;
  background-color: #efefef;
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

const Spacer = styled.div`
  @media (max-width: 768px) {
    width: 4%;
  }
  width: 10%;
`;

export default function Footer() {
  return (
    <Bar>
      <Spacer></Spacer>
      <p>© Filavar LLC</p>
    </Bar>
  );
}
