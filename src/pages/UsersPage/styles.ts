import styled from "styled-components";


export const UsersPageContainer = styled.div`
width: 100%;
max-width: 1200px;
margin: 0 auto;
font-family: Arial, Helvetica, sans-serif;
`
export const UsersPageFlex = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0 -15px;
    flex-wrap: wrap;
    box-sizing: border-box;
`
export const UsersPageCard = styled.div`
    width: calc(25% - 30px); 
    padding: 15px;
    margin: 15px;
    border: 1px solid gray;
    border-radius: 10px;
    flex-basis: 275px;
    min-height: 300px;
    background: cornflowerblue;
`
export const UsersPageH2 = styled.h2`
    font-size: 36px;
    margin-bottom: 25px;
`
export const UsersPageP = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 10px;
    color: white;
    font-weight: 700;
    word-wrap: break-word;
    span {
        color: #010101;
        font-weight: 400;
    }
`
