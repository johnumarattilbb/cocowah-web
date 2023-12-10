import React from 'react';
import { Grid, Typography, Box, Paper, Stack } from '@mui/material';
import colorPalette from '../theme/colorPalette';

interface FeatureItem {
    icon: React.ReactNode;
    title: string;
    desc: string;
}


interface FeatureProps {
    viewMode?: 'left' | 'right' | 'column';
    features: FeatureItem[];
}




const Feature: React.FC<FeatureProps> = ({ viewMode = 'left', features }) => {
    const isColumnMode = viewMode === 'column';

    const renderTitleDescription = () => (
        <Grid item xs={12} md={isColumnMode ? 12 : 6}>
            <Typography maxWidth='580px' margin={'auto'} marginBottom={4} textAlign='center' variant="h2">Superpowered Cocowah Scanner Writes Everything For you</Typography>
            <Typography variant='body2' maxWidth='580px' margin={'auto'} textAlign={'center'}>
                Just drop in the receipt and our scanner does the job for you. Cocowah scanner goes through your receipt to find every detail with
                Best in the industry grade accuracy.
            </Typography>
        </Grid>
    );

    const renderFeatures = () => (
        <Grid item xs={12} md={isColumnMode ? 12 : 6}>
            <Stack direction={isColumnMode ? 'row' : 'column'} justifyContent="center"  flexWrap='wrap'>
                {features.map((feature, index) => (
                    <Paper key={index} elevation={2} sx={{
                        padding: 3,
                        marginBottom: 2,
                        marginRight: isColumnMode ? 2 : 0,
                        width: '320px',
                        transition: 'all 300ms ease-in-out', // Add transition to Paper
                        '&:hover': {
                            '.feature-icon': {
                                backgroundColor: colorPalette.Blue_050,
                                transition: 'all 300ms ease-in-out', // Smooth transition for icon
                            },
                            '.feature-text': {
                                color: colorPalette.gray_800,
                                transition: 'all 300ms ease-in-out', // Smooth transition for text
                            },
                        },
                    }}>
                        <Stack direction={'column'} gap={2} alignItems={'left'}>
                            <Stack className="feature-icon" sx={{ borderRadius: '50%', padding: '10px', justifyContent: 'left', width: '40px', height: '40px' }}>
                                {feature.icon}
                            </Stack>
                            <Typography variant="h3">{feature.title}</Typography>
                            <Typography variant="body2" className="feature-text" sx={{ color: colorPalette.gray_500 }}>{feature.desc}</Typography>
                        </Stack>
                    </Paper>
                ))}
            </Stack>
        </Grid>
    );

    return (
        <Grid container spacing={2} paddingTop={16} paddingBottom={16} direction={isColumnMode ? 'column' : 'row'}>
            {viewMode === 'left' && (
                <>
                    {renderTitleDescription()}
                    {renderFeatures()}
                </>
            )}
            {viewMode === 'right' && (
                <>
                    {renderFeatures()}
                    {renderTitleDescription()}
                </>
            )}
            {isColumnMode && (
                <>
                    {renderTitleDescription()}
                    <Grid item xs={12}>
                        <Box display="flex" justifyContent="center">
                            {renderFeatures()}
                        </Box>
                    </Grid>
                </>
            )}
        </Grid>
    );
};

export default Feature;
