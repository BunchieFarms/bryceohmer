import styles from './Homebody.module.css';
import Weather from '../weather/weather';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';

export default function Homebody(props: any) {
    return (
        <div className={styles.center}>       
            <Box mt={2}>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        <Weather currentWeather={props.currentWeather} weatherForecast={props.weatherForecast} pastWeather={props.pastWeather} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}