import { createGlobalStyle } from 'styled-components'
import { defaultTheme } from "@/theme/default-theme";
const { secondary, gray, primary } = defaultTheme.colors;

export const GlobalStyle = createGlobalStyle`
  *,
  *:after,
  *:before {
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    background-color: ${secondary.darker};
  }

  
  body {
    position: relative;
    z-index: 0;
    margin: 0;
    padding: 0;
    min-height: 100%;
    color: ${gray.main};
    background-color: ${secondary.darker};
    font-size: 1.6rem;
    font-weight: 400;
    font-style: normal;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  
  button {
    background: none;
    outline: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    color: ${gray.main};
  }

  svg {
    path {
      transition: 0.3s ease-in-out;
    }
  }

  /* ===== Scrollbar CSS ===== */
  
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: ${primary.main} ${secondary.main};
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 0.5rem;
  }

  *::-webkit-scrollbar-track {
    background: ${secondary.main};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${primary.main};
    border-radius: 1rem;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: ${primary.darker};
    }
  }
`
