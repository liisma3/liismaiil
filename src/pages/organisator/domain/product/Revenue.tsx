import React from 'react';
import { Card, Typography, StatsIcon, LinearProgress } from '@/components/shared/styled/product.styled';

import { DollarSign } from 'react-feather';
import { CardContent, Box } from '@mui/material';
export default function Revenue() {
  return (
    <Box position="relative">
      <Card>
        <CardContent>
          <Typography variant="h2" gutterBottom>
            <Box fontWeight="fontWeightRegular">$ 1.224</Box>
          </Typography>
          <Typography variant="body2" gutterBottom mt={3} mb={0}>
            Total Revenue
          </Typography>

          <StatsIcon>
            <DollarSign />
          </StatsIcon>
          <LinearProgress variant="determinate" value={50} color="secondary" />
        </CardContent>
      </Card>
    </Box>
  );
}
