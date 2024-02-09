import { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Collapse, Grid, Typography } from "@mui/material";
import ProjectsJson from "../../public/static/projects.json";

const projects = ProjectsJson['Projects'];
const projectsArr = new Array(projects.length).fill(false);

export default function Projects() {

    const [expanded, setExpanded] = useState(projectsArr);

    const handleExpandClick = (index: number) => {
        let newArr = [...expanded];
        console.log(newArr)
        newArr[index] = !newArr[index];
        setExpanded(newArr);
    };

    return (
        <div>
            {
                projects.map((project, i) => (
                    <Card variant="outlined" sx={{marginBottom: 3}} key={i}>
                        <CardMedia
                            component="img"
                            image={project.image}
                            title={project.imageAlt}
                            sx={{ borderBottom: "1px solid rgba(0, 0, 0, 0.12)" }}
                        />
                        <CardContent>
                            <Typography variant="h5" component="div" sx={{textAlign: 'center'}}>
                                {project.title}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{textAlign: 'center'}}>
                            <Grid container spacing={2}>
                                {
                                    project.links.map((link, j) => (
                                        <Grid item xs={(12 / (project.links.length + 1))} key={j}>
                                            <Button size='large' target="_blank" rel='noreferrer' href={link.url}>{link.label}</Button>
                                        </Grid>
                                    ))
                                }
                                <Grid item xs={4}>
                                    <Button size="large" sx={{ marginLeft: 'auto' }} onClick={() => handleExpandClick(i)}>{expanded[i] ? 'Less' : 'More'}</Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                        <Collapse in={expanded[i]} timeout="auto" unmountOnExit>
                            <CardContent>
                                {
                                    project.content.map((item, k) => (
                                        <div key={item.sectionHeader}>
                                            <Typography variant="h6" key={k}>{item.sectionHeader}</Typography>
                                            {
                                                item.text.map((textItem, z) => (
                                                    <Typography paragraph key={z}>
                                                        {textItem}
                                                    </Typography>
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </CardContent>
                        </Collapse>
                    </Card>
                ))
            }
        </div>
            )
}