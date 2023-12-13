import { useState } from 'react';
import axios from 'axios';
import {
    CityInput,
    ErrorDesc,
    ErrorTitle,
    Header,
    InfoCity,
    InfoFlex,
    InfoItem,
    InfoTemp,
    Load,
    Main,
    MainWrapper,
    SearchButton,
    SearchWrapper,
    WeatherErrorContainer,
    WeatherInfoContainer
} from './styles';
import { loader } from '../../assets';

const API_KEY = 'eea75aae6dbe00233ac1efadf2d99a2a';

interface WeatherData {
    weather: {
        icon: string;
        description: string;

    }[];
    main: {
        temp: number;
    };
    name: string;
}

function Weather() {
    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleGetWeather = async () => {
        if (!city) {
            alert('Введите название города');
            return;
        }

        setLoading(true);
        setWeatherData(null);
        setError('');

        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
            console.log(response.data);
            setWeatherData(response.data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <MainWrapper>
            <Header>
                <h1>Weather App</h1>
            </Header>
            <Main>
                <SearchWrapper>
                    <CityInput type="text" value={city} onChange={(e) => setCity(e.target.value)} />
                    <SearchButton onClick={handleGetWeather}>Получить погоду</SearchButton>
                </SearchWrapper>

                {loading && (
                    <>
                        <Load>
                            <img src={loader} alt="Погодная иконка" />
                        </Load>
                    </>
                )}
                {weatherData && (
                    <WeatherInfoContainer>
                        <InfoFlex>
                            <InfoItem>
                                <InfoTemp>{(weatherData.main.temp - 273.15).toFixed() + "º"} </InfoTemp>
                                <InfoCity>{weatherData.name}</InfoCity>
                            </InfoItem>
                            <InfoItem>
                                <InfoTemp>
                                    <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Погодная иконка" />
                                </InfoTemp>
                                <InfoCity>
                                    {weatherData.weather[0].description}
                                </InfoCity>
                            </InfoItem>
                        </InfoFlex>
                    </WeatherInfoContainer>
                )}
                {error &&
                    <WeatherErrorContainer>
                        <ErrorTitle>
                            API Error
                        </ErrorTitle>
                        <ErrorDesc>
                            {error}
                        </ErrorDesc>
                    </WeatherErrorContainer>
                }

            </Main>

        </MainWrapper>
    );
};

export default Weather;
