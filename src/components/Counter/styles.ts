import styled from "styled-components"

import { colors } from "styles/colors"

export const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  max-width: 50%;
  height: fit-content;
  padding: 20px;
  background-color: ${colors.primary};
  .button-component{
    max-width: fit-content;
    min-width: 50px;
  }
`

export const Count = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: ${colors.white};
`
