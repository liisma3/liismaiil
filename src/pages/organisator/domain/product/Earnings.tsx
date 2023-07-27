import React from 'react';
import { Card, Typography, StatsIcon, LinearProgress } from '@/components/shared/styled/product.styled';
import { DollarSign } from 'react-feather';
import { CardContent, Box } from '@mui/material';

export default function Earnings() {
  return (
    <Box position="relative">
      <Card>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">$ 2.405</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            Total Earnings
          </Typography>

          <StatsIcon>
            <DollarSign />
          </StatsIcon>
          <LinearProgress variant="determinate" value={75} color="secondary" />
        </CardContent>
      </Card>
    </Box>
  );
}
