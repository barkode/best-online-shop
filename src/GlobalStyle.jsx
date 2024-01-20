import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
*,
::before,
::after {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: Mulish;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}

ul,
ol {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

li {
  list-style-type: none;
}

button {
  cursor: pointer;
  padding: 0;
  font-family: inherit;
}

a {
  color: inherit;
  text-decoration: inherit;
}

a:visited {
  color: none;
}

`;

export default GlobalStyles;
