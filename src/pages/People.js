import styled from "styled-components";
import { OnboardingTagline, Button } from "../styles";
import Navbar from "../components/Navbar";
import Person from "../components/Person";
import { Secondary } from "../constants";

const Table = styled.table`
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  thead tr {
    background-color: ${Secondary};
    color: #ffffff;
    text-align: left;
  }
  th,
  td {
    padding: 12px 15px;
  }
  tbody tr {
    border-bottom: 1px solid #dddddd;
  }
  tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  tbody tr:last-of-type {
    border-bottom: 2px solid ${Secondary};
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 0 auto;
`;

const persons = [
  { name: "Marc Anthony", email: "marc@gmail.com", openRate: "56" },
  { name: "Anne Lee", email: "annelee@gmail.com", openRate: "34" },
  { name: "Marie Isabella", email: "marie223@gmail.com", openRate: "76" },
  { name: "Michelle Anderson", email: "andersonm22@gmail.com", openRate: "64" },
  { name: "Sammie Eaton", email: "seaton32@gmail.com", openRate: "32" },
  { name: "Margaret Eaton", email: "margareteaton@gmail.com", openRate: "46" },
  { name: "Grace Liu", email: "liugrace@gmail.com", openRate: "24" },
  { name: "Olivia Ander", email: "olivander@gmail.com", openRate: "35" },
  { name: "Emma Forman", email: "foreman@gmail.com", openRate: "62" },
  { name: "Sophia Peterson", email: "sophpeterson@gmail.com", openRate: "15" },
  { name: "Grace Liu", email: "liugrace@gmail.com", openRate: "24" },
  { name: "Olivia Ander", email: "olivander@gmail.com", openRate: "35" },
  { name: "Emma Forman", email: "foreman@gmail.com", openRate: "62" },
  { name: "Sophia Peterson", email: "sophpeterson@gmail.com", openRate: "15" },
  { name: "Grace Liu", email: "liugrace@gmail.com", openRate: "24" },
];

export default function People() {
  return (
    <>
      <Navbar />
      <OnboardingTagline>Optimized Email List</OnboardingTagline>
      <Wrapper>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Open Rate</th>
            </tr>
          </thead>
          <tbody>
            {persons.map((val, index) => (
              <Person
                key={index}
                name={val.name}
                email={val.email}
                openRate={val.openRate}
              ></Person>
            ))}
          </tbody>
        </Table>
        <Button to="/sent">Send</Button>
        <br />
        <br />
        <br />
        <br />
      </Wrapper>
    </>
  );
}
