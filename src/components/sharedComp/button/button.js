import React from 'react'
import styled,{css} from 'styled-components' 


const StyledButton=styled.button`
-webkit-appearance: none;
background:transparent;
-moz-appearance: none;
text-decoration: none;
border: 2px solid #031465;
border-radius: 2px;
padding:5px; 
display: inline-block;
align-items: center;
margin-left: 10px;
width: 220px;
font-size:100%;
font-family: Work Sans;
color: #ef5455;
transition: background-color .3s ease-in-out;
cursor:pointer;
&:active{
    transform: scale(0.99);
};
&:focus{
    outline: 1px solid #fff;
    outline-offset: -4px;
};
&:hover{
    background-color:${({disable})=>disable?'none': '#031465'};
    ${({disable})=>{
        if(disable) return css`
        &::after{
            content: 'Sorry! This is not avaialble at the moment 🤓';
            position: absolute;
            width:100%;
            height: 100%;
            font-size: 12px;
            top:0;
            left:0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: #031465;
            text-align: center;
            line-height: 12px
        }
        ` }}
};

${({disable})=>{
    if(disable) return css`
    cursor: not-allowed;
    opacity:.5;
    position: relative;
    `
}}
`

const button =({children,click,disable,type})=>{

    return(
            <StyledButton type={type?type:null} disable={disable} onClick={click}>
            {children}
            </StyledButton>
    )
}


export default button