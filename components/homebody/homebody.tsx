import {Grid, Tab, Tabs } from "@mui/material";
import Box from '@mui/material/Box';
import { useState } from 'react';
import Projects from '../projects/projects';
import About from "../about/about";
import Work from "../work/work";

export default function Homebody() {
    const [tabIndex, setTabIndex] = useState(1);

    const changeTab = (event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
    };

    return (
        <div>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={1}>
                    <Grid item md={3} xs={12}></Grid>
                    <Grid item md={6} xs={12} sx={{ margin: 1 }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs variant="fullWidth" value={tabIndex} onChange={changeTab} aria-label="basic tabs example">
                                <Tab label="Projects" {...a11yProps(0)} />
                                <Tab label="About Me" {...a11yProps(1)} />
                                <Tab label="Work" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <CustomTabPanel value={tabIndex} index={0}>
                            <Projects />
                        </CustomTabPanel>
                        <CustomTabPanel value={tabIndex} index={1}>
                            <About />
                        </CustomTabPanel>
                        <CustomTabPanel value={tabIndex} index={2}>
                            <Work />
                        </CustomTabPanel>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

function a11yProps(index: number) {
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{marginTop: 5}}
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}