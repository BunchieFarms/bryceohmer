import { useEffect, useState } from 'react';
import { WeatherResponse } from '../../interfaces/weather/weatherResponse';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Weather.module.css';

function Weather() {
    const [weather, setWeather] = useState(new WeatherResponse());
    const [weatherIconUrl, setWeatherIconUrl]= useState('null');

    useEffect(() => {
        fetch('http://api.openweathermap.org/data/2.5/weather?zip=28461&appid=12a6b20d756c5b22ec58b419b759d177')
        .then((res) => res.json())
        .then((data: WeatherResponse) => {
            setWeather(data);
        })
    }, []);

    useEffect(() => {
        if (weather.weather[0].icon !== '') {
            setWeatherIconUrl(`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`);
        }
    }, [weather])

    return (
        <Card className={styles.marged} variant="outlined">
            <CardContent>
                <Typography sx={{ fontSize: 20 }}>
                    I live in <b>Southport, NC</b>.
                </Typography>
                <Typography sx={{ fontSize: 16 }} gutterBottom>
                    This is the weather as of<br />
                    {getCurrentTime(weather.dt || 0)}
                </Typography>
                <Typography>
                    <img
                        src={weatherIconUrl}
                        alt={weather.weather[0].icon}
                        width={100}
                        height={100}
                    />
                </Typography>
                <Typography sx={{ fontSize: 16 }} gutterBottom>
                    ({weather.weather[0].description})<br />
                    {convertKelvinToFahrenheit(weather.main.temp)}&deg;F
                </Typography>
            </CardContent>
        </Card>
    )
}

function getCurrentTime(dt: number) {
    const time = new Date(dt * 1000).toLocaleTimeString();
    const meridiem = time.slice(-2);
    const splitTime = time.split(':');
    splitTime.pop();
    return `${splitTime.join(':')} ${meridiem}`;
}

function convertKelvinToFahrenheit(temp: number) {
    const convTemp = (temp - 273.15) * (9/5) + 32;
    return convTemp.toString().split('.')[0];
}

export default Weather;