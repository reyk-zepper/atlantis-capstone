import { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

const globalStyles = css`
  :root {
    --max-width: 1100px;
    --border-radius: 12px;
    --foreground-rgb: 0, 0, 0;
    --background-rgb: 214, 219, 220;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --foreground-rgb: 255, 255, 255;
      --background-rgb: 0, 0, 0;
    }
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    font-family: Roboto, Arial;
  }

  body {
    color: rgb(var(--foreground-rgb));
    background: rgb(var(--background-rgb));
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: hotpink;
    text-decoration: underline;
  }

  ul {
    list-style: none;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default createGlobalStyle`${globalStyles}`;
