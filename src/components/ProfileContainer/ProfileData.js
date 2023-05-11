import React from 'react'
import {Typography, Avatar} from '@mui/material';
import person from '../../assets/person.png'
import { isEmpty } from '../../utils/utilities';
import useStyles from '../../styles/styles';

export default function ProfileData({name, avatarUrl, profile}){
  const classes = useStyles();

  return (
    <React.Fragment>
        <Avatar
                alt="Remy Sharp"
                src={isEmpty(avatarUrl) ? person : avatarUrl}
                sx={{ mb:1, width: 120, height: 120, bgcolor:'#fff', borderRadius:'50%', border: '5px solid #ECECEC',
                      boxShadow:5 }}
              />
              <Typography variant='h5' className={classes.subtitle} data-cy="profile-user-name">
                    {name} . {profile?.freelancerType?.name}
                </Typography> 

                <Typography color={'#333'} sx={{mb:1}} data-cy="profile-freelancer-rate">
                    {profile?.jobTypes?.map((jobTyp)=>
                          jobTyp.charAt(0).toUpperCase() + jobTyp.slice(1)).join(' or ')} 
                    {' from '} 
                    <strong>
                      {profile?.freelancerRate?.value}{profile?.freelancerRate?.currency?.symbol}{'/'}
                      {profile?.rateMode} 
                    </strong>
                    {' . '}
                    { profile?.totalExperience } {' years experience'}
                </Typography> 
                <Typography color={'#666'} textAlign={'center'} 
                        data-cy="profile-introduction"
                    sx={{lineHeight:'1.5em', letterSpacing:'1px', fontSize:'18px', color:'#8E97A3'}}
                    >
                    {profile?.textIntroduction }
                </Typography>
    </React.Fragment>
        
  )
}
