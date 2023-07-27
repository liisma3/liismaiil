import React from 'react';
import DashboardLayout from '@/components/layouts/Dashboard';
import { Card, Typography, Spacer, Centered, Avatar, Button } from '@/components/shared/styled/profile.styled';

import { Box, CardContent } from '@mui/material';

export default function Viewers() {
  return (
    <DashboardLayout>
      <Card >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Profile Details
          </Typography>
          <Spacer />
          <Centered>
            <Avatar alt="Lucy Lavender" src="/static/img/avatars/avatar-1.jpg" />
            <Typography variant="body2" component="div" gutterBottom>
              <Box fontWeight="fontWeightMedium">Lucy Lavender</Box>
              <Box fontWeight="fontWeightRegular">Lead Developer</Box>
            </Typography>
            <Button  variant="contained" size="small">
              Follow
            </Button>
            <Button  variant="contained" color="primary" size="small">
              Message
            </Button>
          </Centered>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
