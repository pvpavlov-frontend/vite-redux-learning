import styled from "styled-components";

interface InputComponentProps {
  $error: string | undefined;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  color: black;
`;

export const InputComponent = styled.input<InputComponentProps>`
  width: 100%;
  height: 50px;
  padding: 20px 15px;
  border: ${({ $error }) => (!!$error ? "1px solid red" : "1px solid black")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
  outline: none;
  font-size: 18px;
  border-radius: 8px;
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: 15px;
  color: red;
`;
