import React from 'react';
import { Card, Typography, Centered, Avatar, Spacer, Button } from '@/components/shared/styled/product.styled';
import { CardContent, Box } from '@mui/material';

export default function Details() {
  return (
    <Card>
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

          <Button variant="contained" size="small">
            Follow
          </Button>
          <Button variant="contained" color="primary" size="small">
            Message
          </Button>
        </Centered>
      </CardContent>
    </Card>
  );
}
