import styled from "styled-components"
import { WeatherImage } from "assets"

export const Homework29Wrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 40px;
  justify-content: center;
  background: url(${WeatherImage});
  background-repeat: no-repeat;
  background-size: cover;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 300px;
  height: fit-content;
`
