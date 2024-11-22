import { createGlobalStyle } from "styled-components";
import "sanitize.css";
<<<<<<< HEAD

export const GlobalStyle = createGlobalStyle`
    body {
        padding : 0;
        margin : 0;
    }

    h1 {
        margin : 0;
    }
`;
=======
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    padding: 0;
    margin: 0;
    background-color: ${(props) => (props.themeName === "light" ? "white" : "black")};
  }

  h1 {
    margin: 0;
  }

  * {
    color: ${(props) => (props.themeName === "light" ? "black" : "white")};
  }
`;
>>>>>>> 067a098 (Final)
