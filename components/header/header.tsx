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
                sx={{ marginTop: "25%" }}
                // sx={{ borderBottom: 1, borderColor: 'divider' }}
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
            {/* <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                <Link
                    color="inherit"
                    noWrap
                    key="1"
                    variant="body2"
                    href="/"
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    posts
                </Link>
                <Link
                    color="inherit"
                    noWrap
                    key="2"
                    variant="body2"
                    href="/"
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    me
                </Link>
                <Link
                    color="inherit"
                    noWrap
                    key="3"
                    variant="body2"
                    href="/"
                    sx={{ p: 1, flexShrink: 0 }}
                >
                    work
                </Link>
            </Toolbar> */}
        </Box>
    );
}