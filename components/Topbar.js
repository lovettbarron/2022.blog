import Link from "next/link";
import styled, { css } from "styled-components";
import { Stack, Inline, Split, Cover, Frame } from "@bedrock-layout/primitives";

const Logo = styled.h2`
  position: relative;
  display: inline-block;
  line-height: 2rem;
  font-size: 2rem;
  max-width: 360px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -15px;
    /* Remove display: inline-block if not required to be on the same line as text etc */
    display: inline-block;
    background-color: #606060;
    vertical-align: top;
    width: 10px;
    /* Set height to the line height of .text */
    height: 2rem;
    /* 
  Animation paramaters:
  blink = animation-name, 
  1s = animation-duration, 
  step-end = animation-timing-function,
  infinite = animation-iteration-count
  */
    -webkit-animation: blink 1s step-end infinite;
    animation: blink 1s step-end infinite;
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 0.1;
    }
    5% {
      opacity: 0.6;
    }
    10% {
      opacity: 0.1;
    }
    15% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.1;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0.1;
    }
    5% {
      opacity: 0.6;
    }
    10% {
      opacity: 0.1;
    }
    15% {
      opacity: 1;
    }
    50% {
      opacity: 0.1;
    }
    100% {
      opacity: 0.1;
    }
  }
`;

export default function Topbar() {
  return (
    <Split gutter="lg" fraction="1/4">
      <div>
        <Link href="/" passHref>
          <Logo>andrewlb</Logo>
        </Link>
      </div>
    </Split>
  );
}
