import { Dislike, Like } from "assets";
import styled from "styled-components";
import { colors } from "styles/colors";

export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  margin: 0 auto;
  height: fit-content;
  padding: 40px;
  background-color: ${colors.primary};
`
export const ButtonFlex = styled.div`
  display: flex;
  align-items: center;
`
export const ButtonWrap = styled.div`
  button {
    height: 67px;
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    background: rgba(255,255,255, .25);
    border: 1px solid rgba(255,255,255, .75) ;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
export const Quantity = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.white};
  margin: 10px;
  min-width: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`