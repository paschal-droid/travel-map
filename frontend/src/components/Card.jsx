import React from 'react'
import {Typography, Card, CardContent, CardMedia, CardActions, Button, Grid, Container} from "@material-ui/core"
import {format} from "timeago.js"

import useStyles from "./styles"

const Info = ({pin}) => {
    const classes = useStyles()
    return (
        <main>
    <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4} >
                <Grid key={pin._id} item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="Image title" />
                        <CardContent className={classes.cardContent}>
                            <Typography variant="h5" gutterBottom>{pin.title}</Typography>
                            <Typography gutterBottom>{pin.description}</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="secondary">More</Button>
                            <Typography variant="h6" color="secondary">created by {pin.username} <b>{format(pin.createdAt)}</b></Typography>
                        </CardActions>
                    </Card>
                </Grid>
                </Grid>
            </Container>
        </main>
    )}

export default Info;
