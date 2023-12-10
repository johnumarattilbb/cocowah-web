import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, Container, Stack, TextField } from '@mui/material';
import { openCoins, joinWaitlist } from '../services/handyServices';

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        // Check local storage on mount
        const joinedCocowahWaitlist = localStorage.getItem('joinedCocowahWaitlist') === 'true';
        setIsSuccess(joinedCocowahWaitlist);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const handleScroll = () => {
        if (window.scrollY > 0 && !scrolled) {
            setScrolled(true);
        } else if (window.scrollY === 0 && scrolled) {
            setScrolled(false);
        }
    };

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    // localStorage.removeItem('joinedCocowahWaitlist')
    const handleSubmit = async () => {
        try {
            // Assuming joinWaitlist is an async function
            await joinWaitlist(email);
            setIsSuccess(true);
            localStorage.setItem('joinedCocowahWaitlist', 'true'); // Set flag in local storage
        } catch (error) {
            console.error("Failed to join waitlist", error);
            // Handle the error appropriately
            // For example, you might want to set an error message in the state and display it to the user
        }
    };


    return (
        <Box sx={{ textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column' }}>
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
                {!isSuccess ? (
                    <>
                        <TextField
                            label="Email Address"
                            variant="outlined"
                            value={email}
                            onChange={handleEmailChange}
                            color="primary"
                            sx={{ marginBottom: 2 }}
                        />
                        <Button variant="contained" color="primary" onClick={handleSubmit}>
                            Join the waitlist
                        </Button>
                    </>
                ) : (
                    <Typography variant="h6" color="primary" textAlign="center">
                        Thank you for joining!
                    </Typography>
                )}
            </Box>
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
