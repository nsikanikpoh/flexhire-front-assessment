import React, { useState, useEffect } from 'react'
import { Grid, CardMedia, Typography } from '@mui/material';
import { listToMatrix } from '../../utils/utilities';
import useStyles from '../../styles/styles';
import Answer from './Answer';

export default function Answers({answers}){
    const classes = useStyles();
    console.log('answers', answers);
    const [answerTiles, setAnswerTiles] = useState([])
    useEffect(()=>{
        if(answers.length > 0){
            const matrixes = listToMatrix(answers, 2);
            setAnswerTiles(matrixes);
          }else{
            setAnswerTiles([]);
          }
    },[answers])

  return (
    <React.Fragment>
            {answerTiles.map((tiles, ind) => {
                return (
                    <Grid container key={ind} spacing={3}>
                    {tiles.map((answer) => (
                        <Answer answer={answer} key={answer.id}/>
                    ))}
                    </Grid>
                );
            })}
    </React.Fragment>
  )
}
