import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Sidebar, Videos } from './';
// importing from ./ as we are already in the components
// box is a wrapper component, similar to div
// Typography is used for text, instead of <h1> tags <p> 

import { fetchFromAPI } from '../utils/fetchFromAPI';


const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState([])

    // useEffect is a lifehook which gets called as soon as the component loads 
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
            .then((data) => setVideos(data.items))
    }, [selectedCategory])

    return (
        <Stack sx={{
            flexDirection: {
                sx: "column", md: "row" // normally columns like mobile devices and on medium devices and larger row flex means abilty to grow or shrink
            } // md in that box was 92 earlier
        }}>
            <Box sx={{ height: { sx: 'auto', md: '105vh' }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 } }}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                {/* px is padding horizontal  */}
                <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>
                    Copyright 2023 @Recce
                </Typography>
            </Box>

            <Box p={2} sx={{ overFlowY: 'auto', minHeight: '90vh', flex: 2 }}>
                <Typography variant='h4' fontWeight="bold" mb={2} sx={{ color: 'white' }}>
                    {selectedCategory}
                    <span style={{ color: '#FC2503' }}>
                        {' Videos'}
                    </span>
                </Typography>

                <Videos videos={videos} />
            </Box>
        </Stack >
    )
}

export default Feed