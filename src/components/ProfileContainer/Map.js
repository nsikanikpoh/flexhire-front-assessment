import React from 'react'
import {Box} from '@mui/material';
import useStyles from '../../styles/styles';

const Map = React.memo( function Map({locationLongitude, locationLatitude}){
    const classes = useStyles();

    React.useEffect(()=>{
        let mapboxgl = window.mapboxgl
        mapboxgl.accessToken = 'pk.eyJ1IjoibnNzbHkiLCJhIjoiY2xoZDkwaDJzMGYzYjNsbzJmdDFldmhpMiJ9.vRjlNSUxYQOiweRNDGYSIA';
        const lng = locationLongitude ||  12.550343
        const lat = locationLatitude ||  55.665957
    
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng , lng + 1],
            zoom: 6
        });
 
        const marker1 = new mapboxgl.Marker({ color: 'red', rotation: 45 })
            .setLngLat([lat, lat])
            .addTo(map);
    
      },[locationLatitude, locationLongitude]);

  return (
    <React.Fragment>
        <Box sx={{flexGrow: 1}} className={classes.mapCover}>
            <div id="map" data-cy="user-map" ></div>
       </Box>       
    </React.Fragment>
        
  )
})

export default Map;