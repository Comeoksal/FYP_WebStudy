// style.js
import styled from "@emotion/styled";

export const Layout = styled.div`
    display: flex;
    flex-direction: column;
    background-color:grey;
    width:100%;   
    height:100%;
    color:Black;
`;

export const MainTextWrapper = styled.div`
    margin-top:50px;
`
export const MainText = styled.div`
    font-size: 50px;
    text-align: center;
`;

export const MainAddWrapper = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:100px;
    align-items:center;
    gap:20px;
`

export const Line = styled.hr`
    width:80%;
`

export const MainAdd = styled.input`
    width:60%;
    height:50px;
    border: 3px solid #fff;
    font-size:30px;
`