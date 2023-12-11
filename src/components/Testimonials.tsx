import React from 'react';
import { Typography, Avatar, Grid, Paper, Box, Stack } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import colorPalette from '../theme/colorPalette';

const testimonials = [
    {
        img: 'https://example.com/avatar1.jpg',
        name: 'Raj Patel',
        designation: 'Entrepreneur, Mumbai',
        quote: 'This app has transformed how I manage my business finances. Tracking expenses and income is now a breeze!'
    },
    {
        img: 'https://example.com/avatar2.jpg',
        name: 'Emily Thompson',
        designation: 'HR Manager, Toronto',
        quote: 'Budgeting and expense tracking has never been easier. This app is a game-changer for personal finance!'
    },
    {
        img: 'https://example.com/avatar3.jpg',
        name: 'Arun Kumar',
        designation: 'Software Developer, Bengaluru',
        quote: 'The granular transaction insights are phenomenal, especially when scanning receipts and invoices.'
    },
    {
        img: 'https://example.com/avatar4.jpg',
        name: 'Sophie Lévesque',
        designation: 'Freelance Writer, Montreal',
        quote: 'I love how this app simplifies budgeting. It’s perfect for freelancers like me who need to keep a close eye on earnings and expenses.'
    },
    {
        img: 'https://example.com/avatar5.jpg',
        name: 'Ananya Singh',
        designation: 'Digital Marketing Specialist, New Delhi',
        quote: 'Fantastic for managing personal finances, especially for those who dislike dealing with numbers. Highly intuitive!'
    },
    {
        img: 'https://example.com/avatar6.jpg',
        name: 'Michael Brown',
        designation: 'Restaurant Owner, Vancouver',
        quote: 'The ease of tracking daily transactions and managing budgets has been a great help in running my business more efficiently.'
    },
    {
        img: 'https://example.com/avatar7.jpg',
        name: 'Deepika Mehta',
        designation: 'Yoga Instructor, Pune',
        quote: 'As someone who’s not very tech-savvy, I find this app incredibly user-friendly and helpful in managing my personal finances.'
    },
    {
        img: 'https://example.com/avatar8.jpg',
        name: 'Laura McKenzie',
        designation: 'Graphic Designer, Calgary',
        quote: 'The detailed insights into my spending patterns have helped me save more than I ever thought possible!'
    },
    // Add more testimonials as needed
];

const settings = {
    dots: true,
    infinite: true,
    speed: 500, // Increase this value for a smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    centerMode: true,
    centerPadding: '0px',
    cssEase: 'linear' // You can also experiment with different easing functions
};

const Testimonials = () => {
    return (
        <Box sx={{ background: colorPalette.Cyan_200 }} p='48px 0'>
            <Typography variant="h2" align="center">
                Testimonials
            </Typography>
            <Typography variant="body1" textAlign='center' style={{ marginBottom: '20px', color: colorPalette.white }}>
                Our customers love us! ❤️
            </Typography>

            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <Box key={index}>
                        <Box style={{ display: 'flex', alignItems: 'center' }}>
                            <Paper style={{ padding: '20px', textAlign: 'center', maxWidth: '480px', margin: 'auto' }}>
                                <Stack direction={'column'} gap={2}>
                                    <Typography variant="body1" style={{ fontStyle: 'italic' }}>
                                        "{testimonial.quote}"
                                    </Typography>
                                    <Stack direction={'row'} justifyContent={'left'}>
                                        <Avatar src={testimonial.img} alt={testimonial.name} />
                                        <Box ml={2}>
                                            <Typography variant="h6">{testimonial.name}</Typography>
                                            <Typography variant="body2">{testimonial.designation}</Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Paper>
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default Testimonials;