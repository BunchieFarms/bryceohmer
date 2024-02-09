import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';
import Face from '../face/face';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar sx={{ padding: "1rem" }} >
                <div style={{margin: "0px auto", textAlign: "center"}}>
                    <Face />
                    <Typography
                        variant="h6"
                        component="div"
                        align="center"
                        sx={{ flexGrow: 1, margin: "0px auto", textAlign: "center" }}
                    >
                        bryce ohmer
                    </Typography>
                </div>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-evenly', overflowX: 'auto', borderBottom: 1, borderColor: 'divider' }}
            >
                <a target="_blank" rel='noreferrer' href="https://github.com/BunchieFarms">
                    <img
                        src={require('../../public/GitHub_Logo.png')}
                        alt="GitHub Link"
                        aria-label='GitHub Link'
                        className={styles.gh_link} />
                </a>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/bryceohmer/">
                    <img
                        src={require('../../public/LI-Logo.png')}
                        alt="LinkedIn Link"
                        aria-label='LinkedIn Link'
                        className={styles.li_link} />
                </a>
            </Toolbar>
        </Box>
    );
}