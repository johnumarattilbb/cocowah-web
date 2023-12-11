import React from 'react';
import { Box, Container, Grid, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ color: 'text.secondary', py: 6 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body2" color="inherit">
              Coins by Cocowah is a cutting-edge financial tool offering detailed transaction tracking, intuitive budgeting, and smart spending insights, empowering users to master their personal finances with ease.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="inherit" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="inherit">
              <strong>Email:</strong> support@cocowah.com<br />
            </Typography>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="inherit" align="center">
            &copy; {new Date().getFullYear()} cocowah.com | Designed by Cocowah Team
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
