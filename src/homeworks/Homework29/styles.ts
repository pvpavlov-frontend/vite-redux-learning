
import { WeatherImage } from "../../assets";
import styled from "styled-components";

export const BgMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: url(${WeatherImage}) no-repeat top center / cover;   
`;
export const InputWrapper = styled.div`
    width: 100%;
    max-width: 500px;
    margin: 100px auto;
`;
export const EnteredData = styled.p`
    margin-top: 30px;
    padding: 20px;
    background: #fff;
`;