import styled from "styled-components";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import PricingBlock from "../components/PricingBlock";
import { getPrice } from "../db";
import { useParams } from "react-router-dom";

const HomeImg = styled.img`
  max-height: 200px;
  margin: 12px auto;
  margin-top: 60px;
`;

const PricingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default function Pricing() {
  let { name } = useParams();

  const [price, setPrice] = useState("");

  useEffect(() => {
    console.log(name);
    getPrice(name).then((snap) => {
      console.log(snap);
      setPrice(snap.val());
    });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <PricingWrapper>
        {price != "" ? (
          <PricingBlock
            price={price}
            name={
              name[0].toUpperCase() +
              name.slice(
                1,
                name.indexOf(name.match(/\d/)) == -1
                  ? name.length
                  : name.indexOf(name.match(/\d/))
              )
            }
          />
        ) : null}
      </PricingWrapper>
    </div>
  );
}
