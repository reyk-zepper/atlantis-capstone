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
    max-width: 100vw;
    overflow-x: hidden;
    font-family: Roboto, Arial;
  }

  body {
    height: 100vh;
    color: rgb(var(--foreground-rgb));
    background: rgb(var(--background-rgb));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: hotpink;
    text-decoration: underline;
  }

  header {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  footer {
    width: 100%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  footer div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
    gap: 1rem;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
  }
`;

export default createGlobalStyle`${globalStyles}`;
