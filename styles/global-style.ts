import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
export const GlobalStyle = createGlobalStyle`
    ${normalize}
    *{
        box-sizing: border-box;
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
`;
