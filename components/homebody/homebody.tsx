import styles from './Homebody.module.css';
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';

export default function Homebody(props: any) {
    return (
        <div className={styles.center}>
            <Box>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12} sx={{ margin: 5 }}>
                        {/* <Typography sx={{ fontSize: 20, marginTop: 10 }} gutterBottom>
                            There isn't much here yet, unfortunately.
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                            I'll keep updating this as I continue to add my projects to this site.
                        </Typography>
                        <Typography sx={{ fontSize: 20 }} gutterBottom>
                            Here's what I have so far. Everything is a work in progress.
                        </Typography> */}
                        <a style={{fontSize: 20}} href="http://th.bryceohmer.com">Targeted Homes. Where's the closest Target?</a>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}