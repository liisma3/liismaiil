import React from 'react';
import DashboardLayout from '@/components/layouts/Dashboard';
import { Chip, Card, Typography, Spacer, Centered } from '@/components/shared/styled/profile.styled';
import { CardContent } from '@mui/material';
export default function Cards() {
  return (
    <DashboardLayout >
      <Card >
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Cards
          </Typography>

          <Spacer  />

          <Centered>
            <Chip size="small" label="HTML" color="secondary" />
            <Chip size="small"label="JavaScript" />
            <Chip size="small"  label="Sass" />
            <Chip size="small"  label="React" />
            <Chip size="small"  label="Redux" />
            <Chip size="small"  label="Next.js" />
            <Chip size="small"  label="Material UI" />
            <Chip size="small"  label="UI" />
            <Chip size="small"  label="UX" />
          </Centered>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
