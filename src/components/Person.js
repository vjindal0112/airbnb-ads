import styled from "styled-components";

const TableData = styled.td``;

export default function Person({ name, email, openRate }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{openRate}%</td>
    </tr>
  );
}
