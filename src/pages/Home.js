import styled from 'styled-components'
import { Tagline, Subtitle, Button } from '../styles'
import Navbar from '../components/Navbar'
import DirectBlock from '../components/DirectBlock'

const HomeImg = styled.img`
  max-height: 200px;
  margin: 12px auto;
  margin-top: 60px;
`

const MyRow = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
`

const MyCol = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  flex: ${(props) => props.xl};
  @media (max-width: 992px) {
    flex: ${(props) => props.lg};
  }
  @media (max-width: 768px) {
    flex: ${(props) => props.md};
  }
  padding: ${(props) => (props.padding ? props.padding : '0px')};
`

const Section = styled.section`
  padding: ${(props) => props.padding};
  color: #333;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
  text-align: ${(props) => props.textAlign};
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  @media (max-width: 768px) {
    padding: 0 4px;
  }
`

export default function Home() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <Navbar />
        <Tagline>Connecting Airbnb hosts to experiences</Tagline>
        <Subtitle>Increase your experience conversions</Subtitle>
        <a style={{ textDecoration: 'none' }} href="mailto:formans@umich.edu">
          <Button>Contact</Button>
        </a>
        <HomeImg src="/undraw_connection.svg"></HomeImg>
      </div>
      <div></div>
      <div></div>
      <Section padding="0 8%" backgroundColor="#fafafa">
        <MyRow>
          <MyCol xl={3}>
            <DirectBlock
              numberText="1"
              beginText="Send us an email describing the traveler experience you offer"
              imageText="./mail_sent.svg"
            />
          </MyCol>
          <MyCol xl={3}>
            <DirectBlock
              numberText="2"
              beginText="We'll find you an Airbnb host with locations near your experience"
              imageText="./map.svg"
            />
          </MyCol>
          <MyCol xl={3}>
            <DirectBlock
              numberText="3"
              beginText="The Airbnb host will send guests your way!"
              imageText="./send_guests.svg"
              endText=""
            />
          </MyCol>
        </MyRow>
        <br />
        <br />
      </Section>
    </>
  )
}
