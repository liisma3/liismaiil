import React from 'react';
import { Card, Chip, Centered, Typography, Spacer } from '@/components/shared/styled/product.styled';
import { CardContent } from '@mui/material';

export default function Skills() {
  return (
    <Card >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Skills
        </Typography>

        <Spacer  />

        <Centered>
          <Chip size="small"  label="HTML" color="secondary" />
          <Chip size="small"  label="JavaScript" />
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
  );
}
