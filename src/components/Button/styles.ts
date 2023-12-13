import styled from "styled-components";

interface ButtonComponetProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponetProps>`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    border-radius: 50px;
    background: ${({ disabled }) => (disabled ? "grey" : "linear-gradient(0deg, #3678B4 0%, #3678B4 100%), linear-gradient(270deg, #362A84 0.23%, #5936B4 94.2%), #4A319F")};
    color: ${({ $isRedFont }) => ($isRedFont ? "red" : "white")};
    padding: 13px 40px;
    border: none;
    cursor: pointer;
    &:hover {
        background-color: deepskyblue;
    }
`;
