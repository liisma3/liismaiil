import React from 'react';
import { Card, Typography, Centered, Spacer, Button } from '@/components/shared/styled/product.styled';
import { CardContent, Box } from '@mui/material';
import useProf from '@/store/hooks/useProf';
export default function Details({ apply, sendMessage }: { apply: any; sendMessage: any }) {
  const { prof } = useProf();

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Profile Details
        </Typography>

        <Spacer />

        <Centered>
          <Typography variant="body2" component="div" gutterBottom>
            <Box fontWeight="fontWeightMedium">{prof?.login}</Box>
            <Box fontWeight="fontWeightRegular">{prof?.role}</Box>
          </Typography>

          <Button variant="contained" size="small" onClick={() => apply(prof.id)}>
            Apply
          </Button>
          <Button variant="contained" color="primary" size="small" onClick={() => sendMessage(prof.id)}>
            Message
          </Button>
        </Centered>
      </CardContent>
    </Card>
  );
}
