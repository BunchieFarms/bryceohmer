import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from './Header.module.css';
import Face from '../face/face';
import { Link } from '@mui/material';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Toolbar
                className={styles.toolbar}
                sx={{ borderBottom: 1, borderColor: 'divider' }}
            >
                <div className={styles.half}>
                    <Face></Face>
                    <Typography
                        variant="h6"
                        component="div"
                        align="center"
                        sx={{ flexGrow: 1 }}
                        className={styles.half}
                    >
                        bryce ohmer
                    </Typography>
                </div>
            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-evenly', overflowX: 'auto' }}
            >
                <a href="https://github.com/BunchieFarms">
                    github
                </a>
                <a href="https://www.linkedin.com/in/bryceohmer/">
                    linkedin
                </a>
                {/* <Link
                    color="inherit"
                    noWrap
                    key="3"
                    variant="body2"
                    href="/"
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    work
                </Link> */}
            </Toolbar>
        </Box>
    );
}