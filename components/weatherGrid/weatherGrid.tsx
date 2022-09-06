import { Typography } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { convertKelvinToFahrenheit, convertMMtoInch, parseDate } from "../../commonLogic/commonLogic";

const WeatherGrid = (props: any) => {
    const { header, weatherItems } = props;
    return (
        <>
            <Typography sx={{ fontSize: 16 }} gutterBottom>
                {header}
            </Typography>
            <List sx={{ display: 'inline-block' }}>
                {weatherItems.slice(1, 4).map((weather: any) => {
                    return (
                        <ListItem key={weather.dt || weather.date}>
                            <ListItemAvatar>
                                <Avatar>
                                    <img
                                        src={weather.weather ? weather.weather[0].iconUrl : weather.iconUrl}
                                        alt={weather.weather ? weather.weather[0].icon : weather.icon}
                                        width={100}
                                        height={100}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={parseDate(weather.dt || weather.date)} secondary={
                                <span>
                                {/* {weather.temp &&
                                    <span>{convertKelvinToFahrenheit(weather.temp.max)} / {convertKelvinToFahrenheit(weather.temp.min)}<br /></span>
                                }                                     */}
                                <span>{convertMMtoInch(weather.rain ? weather.rain : weather.cumRain)}</span>
                            </span>
                            } />
                        </ListItem>
                    )
                })}
            </List>
            <List sx={{ display: 'inline-block' }}>
                {weatherItems.slice(4, 7).map((weather: any) => {
                    return (
                        <ListItem key={weather.dt || weather.date}>
                            <ListItemAvatar>
                                <Avatar>
                                    <img
                                        src={weather.weather ? weather.weather[0].iconUrl : weather.iconUrl}
                                        alt={weather.weather ? weather.weather[0].icon : weather.icon}
                                        width={100}
                                        height={100}
                                    />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={parseDate(weather.dt || weather.date)} secondary={
                                <span>
                                    {/* {weather.temp &&
                                        <span>{convertKelvinToFahrenheit(weather.temp.max)} / {convertKelvinToFahrenheit(weather.temp.min)}<br /></span>
                                    }                                     */}
                                    <span>{convertMMtoInch(weather.rain ? weather.rain : weather.cumRain)}</span>
                                </span>
                            } />
                        </ListItem>
                    )
                })}
            </List>
        </>
    )
}

export default WeatherGrid;