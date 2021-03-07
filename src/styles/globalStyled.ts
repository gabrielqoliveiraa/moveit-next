import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}

:root {
  --white: ${props=>props.theme.colors.white};
  --background: ${props=>props.theme.colors.background};
  --grayLine: ${props=>props.theme.colors.grayLine};
  --text: ${props=>props.theme.colors.text};
  --textHighlight: ${props=>props.theme.colors.textHighlight};
  --title: ${props=>props.theme.colors.title};
  --red: ${props=>props.theme.colors.red};
  --green: ${props=>props.theme.colors.green};
  --blue: ${props=>props.theme.colors.blue};
  --blueDark: ${props=>props.theme.colors.blueDark}
  --blueTwitter: ${props=>props.theme.colors.blueTwitter};
  
  
}
@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}
@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: ${props=>props.theme.colors.background};
  color: ${props=>props.theme.colors.text};
}
body,
input,
textarea,
button {
  font: 400 1rem 'inter', sans-serif;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: inherit;
}
.experience-bar {
  display: flex;
  align-items: center;
}
.experience-bar span {
  font-size: 1rem;
}
.experience-bar > div {
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background-color: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;
}
.experience-bar > div > div {
  height: 4px;
  border-radius: 4px;
  background: var(--green);
}
span.current-experience {
  position: absolute;
  top: 12px;
  transform: translate(-50%);
}
`