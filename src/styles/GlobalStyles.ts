// Импортируем функцию createGlobalStyle из пакета styled-components
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
}

html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

#root {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
}

ul,ol, li, h1, h2, h3,h4,h5,h6, p {
    margin:0;
    padding:0;
}

ul, ol, li {
    list-style: none;
}
`;

export default GlobalStyles;
