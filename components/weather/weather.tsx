import { useEffect, useState } from 'react';
import { WeatherResponse } from '../../interfaces/weather/weatherResponse';
import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Weather.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';

function Weather(props: any) {
    // const [weather, setWeather] = useState(new WeatherResponse());
    // const [forecast, setForecast] = useState(null);

    // useEffect(() => {
    //     fetch('/api/currentWeather')
    //     .then((res) => res.json())
    //     .then((data: WeatherResponse) => {
    //         setWeather(data);
    //     })
    // }, []);

    // useEffect(() => {
    //     fetch('/api/weatherForecast')
    //     .then((res) => res.json())
    //     .then((data) => {
    //         setForecast(data);
    //         console.log(data)
    //     });
    // }, []);

    var test = [1, 2, 3, 4, 5];

    if (props.currentWeather.weather[0].iconUrl === '')
        return <p>loading weather...</p>;
    return (
        <div>
            <Card className={styles.marged} variant="outlined">
                <CardContent>
                    <Typography sx={{ fontSize: 20 }}>
                        I live in <b>Southport, NC</b>.
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} gutterBottom>
                        This is the weather as of<br />
                        {getCurrentTime(props.currentWeather.dt || 0)}
                    </Typography>
                    <Typography>
                        <img
                            src={props.currentWeather.weather[0].iconUrl}
                            alt={props.currentWeather.weather[0].icon}
                            width={100}
                            height={100}
                        />
                    </Typography>
                    <Typography sx={{ fontSize: 16 }} gutterBottom>
                        ({props.currentWeather.weather[0].description})<br />
                        {convertKelvinToFahrenheit(props.currentWeather.main.temp)}<br />
                        {convertKelvinToFahrenheit(props.weatherForecast.daily[0].temp.max) + ' / ' + convertKelvinToFahrenheit(props.weatherForecast.daily[0].temp.min)}
                    </Typography>
                </CardContent>
            </Card>

            <List sx={{ display: 'inline-block' }}>
                {props.weatherForecast.daily.slice(1, 4).map((weather: any) => {
                    return (
                        <div>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img
                                            src={weather.weather[0].iconUrl}
                                            alt={weather.weather[0].icon}
                                            width={100}
                                            height={100}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={getDate(weather.dt)} secondary={`${convertKelvinToFahrenheit(weather.temp.max)} / ${convertKelvinToFahrenheit(weather.temp.min)}`} />
                            </ListItem>
                        </div>
                    )
                })}
            </List>
            <List sx={{ display: 'inline-block' }}>
                {props.weatherForecast.daily.slice(4, 7).map((weather: any) => {
                    return (
                        <div>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <img
                                            src={weather.weather[0].iconUrl}
                                            alt={weather.weather[0].icon}
                                            width={100}
                                            height={100}
                                        />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={getDate(weather.dt)} secondary={`${convertKelvinToFahrenheit(weather.temp.max)} / ${convertKelvinToFahrenheit(weather.temp.min)}`} />
                            </ListItem>
                        </div>
                    )
                })}
            </List>
        </div>
    )
}

function getDate(dt: number) {
    const splitDate = new Date(dt * 1000).toDateString().split(' ').slice(0, 3);
    splitDate[2] = parseInt(splitDate[2]).toString();
    return splitDate.join(' ');
}

function getCurrentTime(dt: number) {
    const time = new Date(dt * 1000).toLocaleTimeString();
    const meridiem = time.slice(-2);
    const splitTime = time.split(':');
    splitTime.pop();
    return `${splitTime.join(':')} ${meridiem}`;
}

function convertKelvinToFahrenheit(temp: number) {
    const convTemp = (temp - 273.15) * (9 / 5) + 32;
    return `${convTemp.toString().split('.')[0]}\xB0F`;
}

export default Weather;