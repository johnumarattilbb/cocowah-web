import React from 'react';
import { Typography, Avatar, Grid, Paper, Box, Stack } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import colorPalette from '../theme/colorPalette';

const testimonials = [
    {
        img: 'https://example.com/avatar1.jpg',
        name: 'Jane Doe',
        designation: 'Marketing Director at ABC Corp',
        quote: 'This product has revolutionized our workflow!'
    },
    {
        img: 'https://example.com/avatar2.jpg',
        name: 'John Smith',
        designation: 'CEO of XYZ Inc.',
        quote: 'An incredible tool that has helped us grow our business.'
    },
    {
        img: 'https://example.com/avatar3.jpg',
        name: 'Alice Johnson',
        designation: 'Freelance Designer',
        quote: 'Simple, efficient, and powerful. It’s everything I need.'
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
    autoplaySpeed: 3000,
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