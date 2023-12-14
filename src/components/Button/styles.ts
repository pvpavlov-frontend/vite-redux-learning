import styled from "styled-components";

interface ButtonComponetProps {
  $isRedFont?: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponetProps>`
  width: 100%;
  min-height: 50px;
  height: fit-content;
  margin: 0;
  padding: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  /* background-color: ${(props) => (props.disabled ? "grey" : "blue")}; */
  background-color: ${({ disabled }) => (disabled ? "grey" : "blue")};
  color: ${({ $isRedFont }) => ($isRedFont ? "red" : "white")};
  font-size: 20px;
  font-weight: bold;
`;
