import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
box-sizing: border-box;
outline: none;
border: 0;
}

  body {
    background-color: ${props => props.theme.backGroundColor};
    font-family: "Roboto", sans;
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Roboto", sans;
    font-size: 5rem;
    color: ${props => props.theme.primaryText};
  }

  p {
    font-family: "Montserrat", serif;
    font-size: 1rem;
  }
  `