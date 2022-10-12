import Link from "next/link";
import styled, { css } from "styled-components";
import { Stack, Inline, Split, Cover, Frame } from "@bedrock-layout/primitives";

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  border: 2px solid white;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
  ${(props) =>
    props.primary &&
    css`
      background: white;
      color: black;
    `}
`;

const reading = {
  "Average Read Time": 95,
  "Total Read Time": 912,
  "Min Read Time": 3,
  "Max Read Time": 20,
};

const compile = {
  "Average Read Time": 95,
  "Total Read Time": 912,
  "Min Read Time": 3,
  "Max Read Time": 20,
};

export default function Nutrition(props) {
  return (
    <Stack>
      <h3>Consumption Facts</h3>
      <h4>Alphanumeric</h4>
      <Stack>
        {Object.keys(reading).map((key, i) => {
          return (
            <Inline key={i} gutter="sm" minItemWidth={50} stretch={"start"}>
              <div>{key}:</div>
              <div>{reading[key]}</div>
            </Inline>
          );
        })}
      </Stack>
      <h4>Compilation</h4>
      <Stack>
        {Object.keys(reading).map((key, i) => {
          return (
            <Inline key={i} gutter="sm" minItemWidth={50} stretch={"start"}>
              <div>{key}:</div>
              <div>{reading[key]}</div>
            </Inline>
          );
        })}
      </Stack>
    </Stack>
  );
}
