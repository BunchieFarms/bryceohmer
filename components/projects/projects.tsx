import { useState } from 'react';
import styles from './Projects.module.css';
import { Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, Typography } from "@mui/material";

export default function Projects() {
    const [expandedA, setExpandedA] = useState(false);
    const [expandedB, setExpandedB] = useState(false);
    const [expandedC, setExpandedC] = useState(false);
    const [expandedD, setExpandedD] = useState(false);

    const handleExpandClickA = () => {
        setExpandedA(!expandedA);
    };

    const handleExpandClickB = () => {
        setExpandedB(!expandedB);
    };

    const handleExpandClickC = () => {
        setExpandedC(!expandedC);
    };

    const handleExpandClickD = () => {
        setExpandedD(!expandedD);
    };

    return (
        <div>
            <Card variant="outlined" sx={{marginBottom: 3}}>
                <CardMedia
                    component="img"
                    src={require('../../public/weathered.JPG')}
                    title="weathered"
                    sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
                />
                <CardContent>
                    <Typography variant="h5" component="div" className={styles.center}>
                        Weathered
                    </Typography>
                </CardContent>
                <CardActions className={styles.center}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Button size='large' target="_blank" rel='noreferrer' href="http://weathered.bryceohmer.com">Visit</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button size='large' sx={{ marginLeft: 'auto' }} target="_blank" rel='noreferrer' href="https://github.com/BunchieFarms/Weathered">GitHub</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button size="large" sx={{ marginLeft: 'auto' }} onClick={handleExpandClickC}>{expandedC ? 'Less' : 'More'}</Button>
                        </Grid>
                    </Grid>
                </CardActions>

                <Collapse in={expandedC} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h6">Why?</Typography>
                        <Typography paragraph>
                            Sometimes, when I want to go mountain biking, the trail is out of town. Oftentimes, trails are closed when it has rained recently and the trails are wet. So, I want to know what the weather was like recently in that area so I can determine if the trail will be good to ride.
                        </Typography>
                        <Typography paragraph>
                            However, it is somewhat difficult to find accurate historical weather!
                        </Typography>
                        <Typography paragraph>
                            Why is it is challenging to get recent actual weather?
                        </Typography>
                        <Typography paragraph>
                            A few years ago, I wanted to make this app. I was using a weather API that would give me the current weather in any location. So, in order to not go over my usage limits, I only had a couple locations that I would search for.
                        </Typography>
                        <Typography paragraph>
                            Every 30 minutes, my script would call this API and record the current weather. If it was raining, it would tell me so, so at the end of every day I could add all the rainfall up and get a total rainfall for the day.
                        </Typography>
                        <Typography paragraph>
                            But I started noticing that the past day&apos;s weather would not reflect reality! How could this be?
                        </Typography>
                        <Typography paragraph>
                            Apparently, what I was actually requesting was a time interval&apos;s FORECAST, not the actual data. I searched and searched, but I could not find a weather data API that fit all my needs.
                        </Typography>
                        <Typography paragraph>
                            I became interested in this project again in December 2023, when a friend wanted to go mountain biking, but we didn&apos;t know if it had rained at that location recently, which would close the trail.
                        </Typography>
                        <Typography paragraph>
                            During research, I learned that the reason I couldn&apos;t find what I was looking for was because of how this weather data works.
                        </Typography>
                        <Typography paragraph>
                            Weather data comes from STATIONS, and these stations are real, physical things that report their weather data to different agencies. They are not magic, and they take time to report their data.
                        </Typography>
                        <Typography paragraph>
                            I learned about the NOAA&apos;s (National Oceanic and Atmospheric Administration) GSOD (Global Daily Summary of the Day) Dataset. This dataset contains over 13,000 stations all over the world that report their daily weather summaries.
                        </Typography>
                        <Typography paragraph>
                            They also have an easy-to-use API that I tried to use, but I kept noticing that the data would be a few days behind, if not more. This wouldn&apos;t work!
                        </Typography>
                        <Typography paragraph>
                            So I had to use the datasets directly! Look below at the GSOD Data Processor project for how I did that, it was fun!
                        </Typography>
                        <Typography variant="h6">How?</Typography>
                        <Typography paragraph>
                            Anyway, this app is simple, and it was my first time using Blazor.
                        </Typography>
                        <Typography paragraph>
                            When you search for a location, the app makes a request to the Google Maps Geocoding API in order to get the Latitude and Longitude. I then query my database, which is populated by my data processor, to get a group of nearby stations. I then do a little calculation to get the nearest station.
                        </Typography>
                        <Typography paragraph>
                            A lot of times, unfortunately, yesterday&apos;s weather data hasn&apos;t been posted by the station. In this case, I do the next best thing, and get whatever missing past day&apos;s forecast, which should be a decent approximate until the data comes in.
                        </Typography>
                        <Typography paragraph>
                            The result is the past 6 days of weather data, and I mark which ones are predictions and which are actuals.
                        </Typography>
                        <Typography variant="h6">With what?</Typography>
                        <Typography paragraph>
                            Blazor Server
                        </Typography>
                        <Typography paragraph>
                            Google Maps API (Geocoding, Time Zone), Pirate Weather API, NOAA GSOD Dataset
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            <Card variant="outlined" sx={{marginBottom: 3}}>
                <CardMedia
                    component="img"
                    src={require('../../public/GSOD.JPG')}
                    title="GSOD"
                    sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
                />
                <CardContent>
                    <Typography variant="h5" component="div" className={styles.center}>
                        GSOD Data Processor
                    </Typography>
                </CardContent>
                <CardActions className={styles.center}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Button size='large' sx={{ marginLeft: 'auto' }} target="_blank" rel='noreferrer' href="https://github.com/BunchieFarms/GSOD-DataProcessor">GitHub</Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button size="large" sx={{ marginLeft: 'auto' }} onClick={handleExpandClickD}>{expandedD ? 'Less' : 'More'}</Button>
                        </Grid>
                    </Grid>
                </CardActions>

                <Collapse in={expandedD} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h6">Why?</Typography>
                        <Typography paragraph>
                            If you read the word salad above for Weathered, you know the motivation for the project. But the reason I wanted to make this data processor was to solve a different problem and learn some new things.
                        </Typography>
                        <Typography paragraph>
                            The NOAA keeps the GSOD dataset on a public file share. Each station gets its own CSV file, named after each station&apos;s Station ID, and each row of that file is a different day of the year. There are over 13,000 stations at the time of writing, and each of those station&apos;s CSV files are placed in a folder named after the year the data was recorded in.
                        </Typography>
                        <Typography paragraph>
                            There are also GZipped Tar archives of each year of data, updated whenever updates come, I suppose. I need to get those and parse the CSVs for all that sweet, sweet data.
                        </Typography>
                        <Typography variant="h6">How?</Typography>
                        <Typography paragraph>
                            Every hour, my server has a cron job that runs this program. This program first parses the HTML data on the file share, and checks to see if the current year&apos;s GZipped Tar archive&apos;s update date/time is newer than the check from the last hour. If not, we&apos;re done!
                        </Typography>
                        <Typography paragraph>
                            If there is an updated file available, this program downloads that file, decompresses it, then parses through each CSV file in the archive. The data from, at latest, 8 days ago from each file gets put into memory. I then query the database for records that do not have yesterday&apos;s data and update what is available.
                        </Typography>
                        <Typography paragraph>
                            There are definitely performance improvements that can and should be made, but I just wanted to get this done fairly quickly. I want to optimize it as much as I can, then rewrite it in another language for fun.
                        </Typography>
                        <Typography variant="h6">With what?</Typography>
                        <Typography paragraph>
                            .Net 7.0, SharpZipLib, HtmlAgilityPack, TinyCsvParser, PostgresQL
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            <Card variant="outlined" sx={{marginBottom: 3}}>
                <CardMedia
                    component="img"
                    src={require('../../public/TH.JPG')}
                    title="targeted homes"
                    sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
                />
                <CardContent>
                    <Typography variant="h5" component="div" className={styles.center}>
                        Targeted Homes
                    </Typography>
                </CardContent>
                <CardActions className={styles.center}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Button size='large' target="_blank" rel='noreferrer' href="http://th.bryceohmer.com">Visit</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button size='large' sx={{ marginLeft: 'auto' }} target="_blank" rel='noreferrer' href="https://github.com/BunchieFarms/TargetedHomes">GitHub</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button size="large" sx={{ marginLeft: 'auto' }} onClick={handleExpandClickA}>{expandedA ? 'Less' : 'More'}</Button>
                        </Grid>
                    </Grid>
                </CardActions>

                <Collapse in={expandedA} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h6">Why?</Typography>
                        <Typography paragraph>
                            My wife and I are planning on moving to a new house, and her only two location requirements are being somewhere in NC, and within 20 minutes of a Target store.
                        </Typography>
                        <Typography variant="h6">How?</Typography>
                        <Typography paragraph>
                            I have the locations of all the Targets in North Carolina in a database. On page load, we get all those locations and put them on the map.
                        </Typography>
                        <Typography paragraph>
                            When an address is entered in the search bar, we send that to my API, which sends a request to another API to geocode the address.
                        </Typography>
                        <Typography paragraph>
                            We are using the Google Maps Route Matrix API to get the nearest Target to that address. This API only supports 50 destination points, but there are 53 Targets in NC.
                        </Typography>
                        <Typography paragraph>
                            Make a circle &plusmn;0.5 lat/lon around the starting point, and check if there are any Targets in this circle. Try that a few times, adding 1 degree lat/lon each time.
                        </Typography>
                        <Typography paragraph>
                            We&apos;ll probably get a few Targets in that circle, so get the one with the shortest driving duration, and send the encoded polyline, along with other route and address information back to client.
                        </Typography>
                        <Typography paragraph>
                            The client then draws the route on the map, showing the user the closest Target, the distance, and driving duration to it.
                        </Typography>
                        <Typography variant="h6">With what?</Typography>
                        <Typography paragraph>
                            Angular 17, .Net 7.0 Web API, PostgresQL database
                        </Typography>
                        <Typography paragraph>
                            Google Maps API (Maps, Geocoding, Routes)
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>

            <Card variant="outlined">
                <CardMedia
                    component="img"
                    src={require('../../public/bryceohmer.JPG')}
                    title="targeted homes"
                    sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
                />
                <CardContent>
                    <Typography variant="h5" component="div" className={styles.center}>
                        BryceOhmer.com
                    </Typography>
                </CardContent>
                <CardActions className={styles.center}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Button size='large' target="_blank" rel='noreferrer' href="http://bryceohmer.com">Visit</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button size='large' sx={{ marginLeft: 'auto' }} target="_blank" rel='noreferrer' href="https://github.com/BunchieFarms/bryceohmer">GitHub</Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Button size="large" sx={{ marginLeft: 'auto' }} onClick={handleExpandClickB}>{expandedB ? 'Less' : 'More'}</Button>
                        </Grid>
                    </Grid>
                </CardActions>

                <Collapse in={expandedB} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography variant="h6">Why?</Typography>
                        <Typography paragraph>
                            Everyone needs a website!
                        </Typography>
                        <Typography variant="h6">How?</Typography>
                        <Typography paragraph>
                            I wanted to learn React and Next.JS, so I used React and Next.JS to create this static webpage.
                        </Typography>
                        <Typography paragraph>
                            Running &apos;npm run build&apos; will create a static site, then I just transfer it to my VPS.
                        </Typography>
                        <Typography variant="h6">With what?</Typography>
                        <Typography paragraph>
                            React, Next.JS, Hosted on Ubuntu VPS with Nginx
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </div>
            )
}