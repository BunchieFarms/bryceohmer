import styles from './Homebody.module.css';
import { Grid } from "@mui/material";
import Box from '@mui/material/Box';

export default function Homebody(props: any) {
    return (
        <div className={styles.center}>       
            <Box>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12}>
                        {/* content */}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}