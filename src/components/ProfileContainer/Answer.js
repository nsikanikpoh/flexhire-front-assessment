import React from 'react'
import { Grid, CardMedia, Typography } from '@mui/material';
import useStyles from '../../styles/styles';

export default function Answers({answer}){
    const classes = useStyles();

  return (
    <React.Fragment>
                <Grid className={classes.answerBox} item md={6} xs={'auto'} key={answer.id}>
                
                    <CardMedia
                        width="500"
                        height="280"
                        className={classes.answerVideo}
                        src={answer.optimizedUrl}
                        controls
                        poster={answer.posterUrl}
                        component={'video'}
                    />

                <Typography className={classes.questionTitle}> 
                    {answer.question.title}
                </Typography>
            </Grid>
    </React.Fragment>
  )
  }