import { Stack, Inline, Split, Cover, Frame } from "@bedrock-layout/primitives";
import "/public/fonts.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Topbar from "../components/Topbar";
import Nutrition from "../components/Nutrition";

const theme = {
  text: "rgb(4, 7, 6)",
  link: "rgb(40, 75, 64)",
  lightgreen: "rgb(161, 180, 135)",
  beige: "rgb(109, 91, 91)",
  brown: "rgb(87, 67, 60)",
  gray: "rgb(229, 227, 219)",
  lightgray: "rgb(194, 205, 196)",
};

const GlobalStyle = createGlobalStyle`

  .text-input:focus {
    outline: 1px solid #aaa;
  }
  button:focus,
  select:focus {
    outline: none;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    background: ${(props) => props.theme.gray};
    color: ${(props) => props.theme.text};
    overflow-x:hidden;
    font-size: 1.6rem;
    font-family: 'At Hauss Aero Retina',sans-serif;
    -webkit-tap-highlight-color: ${(props) => props.theme.lightgreen};
    -webkit-touch-callout: none;
    *&::selection { color: ${(props) => props.theme.beige}; }

  }
  hr {
    margin: 3rem auto;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.link};
    background: ${(props) => props.theme.lightgray};
    font-family: 'At Hauss Aero',sans-serif;
  }
  h1, h2, h3 {
    font-family: 'At Amiga',sans-serif;
  
    color: ${(props) => props.theme.brown};
    letter-spacing: 0;
    &.center {
      text-align: center;
    }
  }

  .pixel {
    font-family: 'At Amiga',sans-serif;
  }

`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Stack gutter="md">
        <Topbar />
        <Split
          gutter="md"
          fraction="3/4"
          minItemWidth="100px"
          maxItemWidth="600px"
        >
          <Component {...pageProps} />
          <Nutrition />
        </Split>
      </Stack>
    </ThemeProvider>
  );
}

export default MyApp;
