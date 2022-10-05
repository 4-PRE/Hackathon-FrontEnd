import { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        font-family: 'HallymGothic-Regular';
    }  
    html {    
        font-size: 20px;    
        min-width: 320px;  
        ::-webkit-scrollbar{
            display:none;
        }
    }  
    a { 
        cursor: pointer; 
        text-decoration: none; 
    }
    @font-face {
    font-family: 'HallymGothic-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2204@1.0/HallymGothic-Regular.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;
}
`;
