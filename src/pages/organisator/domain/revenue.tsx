import React from 'react';
import { StatsIcon, Card, Typography, LinearProgress } from '@/components/shared/styled/profile.styled';
import { CardContent, Box } from '@mui/material';
import { DollarSign } from 'react-feather';

export default function Revenue() {
  return (
    <Box position="relative">
      <Card >
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">$ 1.224</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            Total Revenue
          </Typography>

          <StatsIcon >
            <DollarSign />
          </StatsIcon>
          <LinearProgress variant="determinate" value={50} color="secondary" />
        </CardContent>
      </Card>
    </Box>
  );
}
