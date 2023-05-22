import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    console.log(channelDetail, videos);

    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`)
            .then((data) => setChannelDetail(data?.items[0]));
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then((data) => setVideos(data?.items));
    }, [id])
    // use effect loads as soon as the component loads
    // it rerenders whenever the id changes

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background: 'linear-gradient(90deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
                        zIndex: 10, // to keep it above the profile image of the channel
                        height: '300px'
                    }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop='-110px' />
            </Box>
            <Box display="flex" p="2">
                <Box sx={{ mr: { sm: '100px' } }} />
                {/* style applies to only small devices and larger but not on extra small */}
                <Videos videos={videos} />

            </Box>
        </Box >
    )
}

export default ChannelDetail