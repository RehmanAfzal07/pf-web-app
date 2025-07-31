import { createGlobalStyle } from 'styled-components';

const lightTheme = {
    body: '#ffffff',
};
  
const darkTheme = {
    body: 'rgba(0,0,0,0.095)',
};
  
const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.body};
        /* Add other global styles here */
    }
`;

export { lightTheme, darkTheme, GlobalStyles };
