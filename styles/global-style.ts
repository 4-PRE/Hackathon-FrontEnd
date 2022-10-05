import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export const GlobalStyle = createGlobalStyle`
    ${normalize}  
    html {    
        box-sizing: border-box;
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
`;
