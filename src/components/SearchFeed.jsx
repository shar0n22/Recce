import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { Videos } from './';
// importing from ./ as we are already in the components
// box is a wrapper component, similar to div
// Typography is used for text, instead of <h1> tags <p> 

import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {
    const [videos, setVideos] = useState([])
    const { searchTerm } = useParams();
    // this will get populated to whatever we will enter in the url bar after /search

    // useEffect is a lifehook which gets called as soon as the component loads 
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`) // whatever we will get from the url after the /search we will pass it here as the searchTerm 
            .then((data) => setVideos(data.items))
    }, [searchTerm]);

    return ( // height was 90vh earlier
        <Box p={2} sx={{ overFlowY: 'auto', minHeight: '105vh', flex: 2, marginLeft: 12 }}>
            <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                {'Search Results for: '}
                <span style={{ color: '#FC2503' }}>
                    {searchTerm}
                </span> videos
            </Typography>
            <Videos videos={videos} />
        </Box>
    )
}

export default SearchFeed