import React, { useState, useEffect } from 'react';
import { Box, Button, Chip, Typography, Container, Stack, TextField } from '@mui/material';
import { openCoins, joinWaitlist } from '../services/handyServices';

const Hero = () => {
    const [scrolled, setScrolled] = useState(false);
    const [email, setEmail] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);
    const [animateCard1, setAnimateCard1] = useState(false);
    const [animateCard2, setAnimateCard2] = useState(false);
    const [animateDetails, setAnimateDetails] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY >= 8) {
                if (!animateCard1) setAnimateCard1(true);
                if (!animateCard2) setAnimateCard2(true);
                if (!animateDetails) setAnimateDetails(true);
            } else {
                setAnimateCard1(false);
                setAnimateCard2(false);
                setAnimateDetails(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        const joinedCocowahWaitlist = localStorage.getItem('joinedCocowahWaitlist') === 'true';
        setIsSuccess(joinedCocowahWaitlist);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [animateCard1, animateCard2, animateDetails]);


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
            <Stack direction={'column'} spacing={1} justifyContent="center" alignItems="center" marginBottom={4}>
                <Chip label="New" color="secondary" />
                <Typography maxWidth='720px' textAlign={'center'} variant="body2">
                Step into the future of personal finance with Cocowah Coins – your go-to solution for managing daily expenses, from grocery receipts to leisure splurges. Launching mid-2024 – sign up now to become an early bird and gain early access to a world of smarter spending. Join us in redefining personal finance! 🌟📊🚀
                </Typography>
            </Stack>
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
            <Stack direction={{ xs: 'column', md: 'row' }} gap={2} marginTop={4}>
                <Stack direction={'column'} gap={2}>
                    <Stack
                        sx={{
                            opacity: animateCard1 ? 1 : 0.2,
                            transform: animateCard1 ? 'translateY(0) rotate(0deg)' : 'translateX(50px) rotate(-4deg)',
                            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                            // Additional styles can be added here
                        }}
                    >
                        <img src="https://onedrive.live.com/embed?resid=1656BB0C87C6BA8%21254014&authkey=%21AN5W9WQ3NRgvwac&width=364&height=116" alt="Card 1" />
                    </Stack>
                    <Stack
                        sx={{
                            opacity: animateCard2 ? 1 : 0.2,
                            transform: animateCard2 ? 'translateY(0) rotate(0deg)' : 'translateX(50px) rotate(4deg)',
                            transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                            // Additional styles can be added here
                        }}
                    >
                        <img src="https://onedrive.live.com/embed?resid=1656BB0C87C6BA8%21254015&authkey=%21AIb6Hfq1OHuj-Iw&width=362&height=112" alt="Card 2" />
                    </Stack>
                </Stack>
                <Stack
                    sx={{
                        opacity: animateCard2 ? 1 : 0.2,
                        transform: animateCard2 ? 'translateY(0)  rotate(0deg)' : 'translateX(80px)  rotate(4deg)',
                        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                        // Additional styles can be added here
                    }}
                >
                    <img src="https://onedrive.live.com/embed?resid=1656BB0C87C6BA8%21254016&authkey=%21AGdqI58w319aMmU&width=775&height=792" alt="Card Details" />
                </Stack>
            </Stack>
        </Box>
    );
};

export default Hero;
