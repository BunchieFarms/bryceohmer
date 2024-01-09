import { useState } from 'react';
import styles from './Projects.module.css';
import { Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, Typography } from "@mui/material";

export default function Projects() {
    const [expandedA, setExpandedA] = useState(false);
    const [expandedB, setExpandedB] = useState(false);

    const handleExpandClickA = () => {
        setExpandedA(!expandedA);
    };

    const handleExpandClickB = () => {
        setExpandedB(!expandedB);
    };

    return (
        <div>
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