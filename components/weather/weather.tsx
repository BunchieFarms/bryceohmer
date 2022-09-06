import { Box, Grid, MenuItem, Select, Typography } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import styles from './Weather.module.css';
import WeatherGrid from "../weatherGrid/weatherGrid";
import { convertKelvinToFahrenheit, convertMMtoInch } from "../../commonLogic/commonLogic";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useEffect, useState } from "react";

function Weather(props: any) {
    const [selectedLocation, setSelectedLocation] = useLocalStorage('location', null);
    const [currentWeather, setCurrentWeather] = useState(props.currentWeather[0]);
    const [forecast, setForecast] = useState(props.weatherForecast[0]);
    const [pastWeather, setPastWeather] = useState(props.pastWeather);

    if (!props.currentWeather[0])
        return <p>loading weather...</p>;
    
    useEffect(() => {
        const filteredCurrentWeather = props.currentWeather.find((item: any) => item.zip === parseInt(selectedLocation))
        const filteredForecast = props.weatherForecast.find((item: any) => item.zip === parseInt(selectedLocation))
        const filteredPastWeather = props.pastWeather.filter((item: any) => item.zip === parseInt(selectedLocation))
        setCurrentWeather(filteredCurrentWeather);
        setForecast(filteredForecast);
        setPastWeather(filteredPastWeather)
    }, [selectedLocation])

    return (
        <Box mt={2}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Card className={styles.marged} variant="outlined">
                        <CardContent>
                            <Typography sx={{ fontSize: 20 }} gutterBottom>
                                This is the current, future, and past weather and rainfall for
                            </Typography>
                            <Select
                                labelId="location-select-label"
                                id="location-select-id"
                                value={selectedLocation}
                                onChange={e => setSelectedLocation(e.target.value)}
                            >
                                {props.locations.map((location: any) => (
                                    <MenuItem value={location.zip}>{location.city}</MenuItem>
                                ))}
                            </Select>
                            <Typography>
                                <img
                                    src={currentWeather.weather[0].iconUrl}
                                    alt={currentWeather.weather[0].icon}
                                    width={100}
                                    height={100}
                                />
                            </Typography>
                            <Typography sx={{ fontSize: 14 }} gutterBottom>
                                ({currentWeather.weather[0].description})<br />
                                {convertKelvinToFahrenheit(currentWeather.main.temp)}<br />
                                {convertKelvinToFahrenheit(forecast.daily[0].temp.max) + ' / ' + convertKelvinToFahrenheit(forecast.daily[0].temp.min)}<br />
                                {convertMMtoInch(pastWeather[0].cumRain) + ' (so far)'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xl={6} xs={12} >
                    <WeatherGrid header={'Forecast'} weatherItems={forecast.daily} />
                </Grid>

                <Grid item xl={6} xs={12} >
                    <WeatherGrid header={'Past Rainfall'} weatherItems={pastWeather} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default Weather;