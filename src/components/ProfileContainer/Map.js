import React from 'react'
import {Box} from '@mui/material';
import useStyles from '../../styles/styles';

export default function Map({profile}){
    const classes = useStyles();

    React.useEffect(()=>{
        let mapboxgl = window.mapboxgl
        mapboxgl.accessToken = 'pk.eyJ1IjoibnNzbHkiLCJhIjoiY2xoZDkwaDJzMGYzYjNsbzJmdDFldmhpMiJ9.vRjlNSUxYQOiweRNDGYSIA';
        const locationLongitude = profile?.locationLongitude ||  12.550343
        const locationLatitude = profile?.locationLatitude ||  55.665957
    
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [locationLongitude , locationLongitude + 1],
            zoom: 6
        });
 
        const marker1 = new mapboxgl.Marker({ color: 'red', rotation: 45 })
            .setLngLat([locationLongitude, locationLatitude])
            .addTo(map);
    
      },[profile]);

  return (
    <React.Fragment>
        <Box sx={{flexGrow: 1}} className={classes.mapCover}>
            <div id="map" data-cy="user-map" ></div>
       </Box>       
    </React.Fragment>
        
  )
}
