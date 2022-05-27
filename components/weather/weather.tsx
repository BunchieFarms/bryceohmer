import { Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Weather.module.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function Weather(props: any) {
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
                        Here is the current and future weather, and past rainfall.
                    </Typography>
                    <Typography>
                        <img
                            src={props.currentWeather.weather[0].iconUrl}
                            alt={props.currentWeather.weather[0].icon}
                            width={100}
                            height={100}
                        />
                    </Typography>
                    <Typography sx={{ fontSize: 14 }} gutterBottom>
                        ({props.currentWeather.weather[0].description})<br />
                        {convertKelvinToFahrenheit(props.currentWeather.main.temp)}<br />
                        {convertKelvinToFahrenheit(props.weatherForecast.daily[0].temp.max) + ' / ' + convertKelvinToFahrenheit(props.weatherForecast.daily[0].temp.min)}<br />
                        {'Rain so far: ' + convertMMtoInch(props.pastWeather[0].cumRain) + ' in'}
                    </Typography>
                </CardContent>
            </Card>

            <Typography sx={{ fontSize: 16 }} gutterBottom>
                Forecast
            </Typography>
            <List sx={{ display: 'inline-block' }}>
                {props.weatherForecast.daily.slice(1, 4).map((weather: any) => {
                    return (
                        <ListItem key={weather.dt}>
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
                            <ListItemText primary={getDate(weather.dt)} secondary={
                                <span>
                                    <span>{convertKelvinToFahrenheit(weather.temp.max)} / {convertKelvinToFahrenheit(weather.temp.min)}</span><br />
                                    <span>Rain: {convertMMtoInch(weather.rain)} in</span>
                                </span>
                            } />
                        </ListItem>
                    )
                })}
            </List>
            <List sx={{ display: 'inline-block' }}>
                {props.weatherForecast.daily.slice(4, 7).map((weather: any) => {
                    return (
                        <ListItem key={weather.dt}>
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
                            <ListItemText primary={getDate(weather.dt)} secondary={
                                <span>
                                    <span>{convertKelvinToFahrenheit(weather.temp.max)} / {convertKelvinToFahrenheit(weather.temp.min)}</span><br />
                                    <span>Rain: {convertMMtoInch(weather.rain)} in</span>
                                </span>
                            } />
                        </ListItem>
                    )
                })}
            </List>

            <Typography sx={{ fontSize: 16 }} gutterBottom>
                Past Rainfall
            </Typography>
            <List sx={{ display: 'inline-block' }}>
                {props.pastWeather.slice(1, 4).map((weather: any) => {
                    return (
                        <ListItem key={weather.date}>
                            <ListItemAvatar>
                                <Avatar>
                                    <img
                                        src={weather.iconUrl}
                                        alt={weather.iconUrl}
                                        width={100}
                                        height={100}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={getDate(weather.date)} secondary={`Rain: ${convertMMtoInch(weather.cumRain)} in`} />
                        </ListItem>
                    )
                })}
            </List>
            <List sx={{ display: 'inline-block' }}>
                {props.pastWeather.slice(4, 7).map((weather: any) => {
                    return (
                        <ListItem key={weather.date}>
                            <ListItemAvatar>
                                <Avatar>
                                    <img
                                        src={weather.iconUrl}
                                        alt={weather.iconUrl}
                                        width={100}
                                        height={100}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={getDate(weather.date)} secondary={`Rain: ${convertMMtoInch(weather.cumRain)} in`} />
                        </ListItem>
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

function convertKelvinToFahrenheit(temp: number) {
    const convTemp = (temp - 273.15) * (9 / 5) + 32;
    return `${convTemp.toString().split('.')[0]}\xB0F`;
}

function convertMMtoInch(mm: number) {
    if (mm === undefined) {
        return 0;
    } else {
        const conversion = (mm / 25.4).toFixed(2);
        if (mm > 0 && parseFloat(conversion) < 0.5) {
            return '< 0.5'
        } else {
            return conversion;
        }
    }
}

export default Weather;