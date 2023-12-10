import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Container, Stack } from '@mui/material';
import { openCoins } from '../services/handyServices';

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false); // State for tracking image load

    const handleScroll = () => {
        if (window.scrollY > 0 && !scrolled) {
            setScrolled(true);
        } else if (window.scrollY === 0 && scrolled) {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    // Function to handle image load
    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (
        <Box sx={{ textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <Container maxWidth="md">
                <Stack direction={'column'} gap={1} mt={4} mb={4}>
                    <Typography textAlign={'center'} maxWidth='1000px' margin={'auto'} variant="h1">
                        <span className="animated-gradient"> Introducing Coins</span>
                    </Typography>
                    <Typography textAlign={'center'} maxWidth='1000px' margin={'auto'} variant="h1">
                        Master your finances
                    </Typography>
                </Stack>
                <Typography maxWidth='580px' margin={'auto'} variant="body2" textAlign='center' paragraph marginBottom={4}>
                    Dive into precise financial management with Cocowah Coins. From single grocery items to major investments, track every expense with unparalleled detail and control.
                </Typography>
                <Box sx={{ '& > button': { margin: 1 } }}>
                    <Button variant="contained" color="primary" onClick={openCoins}>
                        Start with Coins
                    </Button>
                    <Button variant="outlined" color="primary">
                        Learn how coins work
                    </Button>
                </Box>
            </Container>
            <Box
                sx={{
                    width: scrolled ? '100%' : '140%',
                    height: 'auto',
                    position: 'relative',
                    marginTop: '16px',
                    top: scrolled ? '0px' : '0px',
                    opacity: imageLoaded ? 1 : 0, // Use imageLoaded state for opacity transition
                    transition: 'opacity 1s ease-out, top 0.5s ease-out, width 0.5s ease-out',
                    alignSelf: 'center',
                    minHeight: '500px', // Set an initial height for the image container
                }}
            >
                <img
                    style={{ width: '100%', height: 'auto' }}
                    src="https://onedrive.live.com/embed?resid=1656BB0C87C6BA8%21253989&authkey=%21ALLFb4K9blgBahU&width=1390&height=849"
                    alt="Descriptive Alt Text"
                    onLoad={handleImageLoad} // Handle image load
                />
            </Box>
        </Box>
    );
};

export default Hero;
