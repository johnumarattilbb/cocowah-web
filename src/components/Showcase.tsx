import React, { useState, useEffect } from 'react';
import { Grid, Typography, Box, Stack } from '@mui/material';

// Define an interface for the component props
interface ShowcaseProps {
    viewMode?: 'left' | 'right' | 'column';
    title: string;
    desc: string;
    imgUrl: string;
}

const Showcase: React.FC<ShowcaseProps> = ({ viewMode = 'left', title, desc, imgUrl }) => {

    const [scrollY, setScrollY] = useState(0);
    const [animationDuration, setAnimationDuration] = useState(Math.random() * 2 + 3); // Between 3 and 5 seconds
    const [animationDelay, setAnimationDelay] = useState(Math.random() * 2); // Up to 2 seconds delay
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isColumnMode = viewMode === 'column';

    const renderTitleDescription = () => (
        <Grid item xs={12} md={isColumnMode ? 12 : 5}>
            <Typography maxWidth='580px' margin={'auto'} marginBottom={4} textAlign={isColumnMode ? 'center' : 'left'} variant="h2">{title}</Typography>
            <Typography variant='body2' maxWidth='580px' textAlign={isColumnMode ? 'center' : 'left'} margin={'auto'}>
                {desc}
            </Typography>
        </Grid>
    );

    const renderShowcases = () => (
        <Grid item xs={12} md={isColumnMode ? 12 : 6}>
            <Box display={isColumnMode ? 'flex' : 'block'} justifyContent="center" >
                <img src={imgUrl} alt="Showcase"
                    style={{
                        width: '100%',
                        height: 'auto',
                        animation: `wavyAnimation ${animationDuration}s ease-in-out infinite`,
                        animationDelay: `${animationDelay}s`,
                        borderRadius: '8px'
                    }} />
            </Box>
        </Grid>
    );

    return (
        <Grid container spacing={2} paddingTop={16} paddingBottom={16} display={isColumnMode ? 'block' : 'flex'} direction={isColumnMode ? 'column' : 'row'}>
            {viewMode === 'left' && (
                <Stack direction={'row'} gap={4} flexWrap={'wrap'}>
                    {renderTitleDescription()}
                    {renderShowcases()}
                </Stack>
            )}
            {viewMode === 'right' && (
                <Stack direction={'row'} gap={4} flexWrap={'wrap'}>
                    {renderShowcases()}
                    {renderTitleDescription()}
                </Stack>
            )}
            {isColumnMode && (
                <Stack direction={'column'} gap={4} >
                    {renderTitleDescription()}
                    {renderShowcases()}
                </Stack>
            )}
        </Grid>
    );
};

export default Showcase;
