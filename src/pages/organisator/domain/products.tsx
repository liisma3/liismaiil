import React from 'react';
import { Card, Typography, TableWrapper, ProductsChip } from '@/components/shared/styled/profile.styled';
import { CardContent, Table, TableHead, TableRow, TableBody, TableCell } from '@mui/material';
import { red, green, blue } from '@mui/material/colors';

export default function Products() {
  return (
    <Card >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Products
        </Typography>
        <TableWrapper >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Tech</TableCell>
                <TableCell>License</TableCell>
                <TableCell>Sales</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  AppStack
                </TableCell>
                <TableCell>
                  <ProductsChip  size="small" label="HTML" rgbcolor={blue[500]} />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>76</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Material App
                </TableCell>
                <TableCell>
                  <ProductsChip  size="small" label="React" rgbcolor={green[500]} />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>38</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Milo
                </TableCell>
                <TableCell>
                  <ProductsChip  size="small" label="HTML" rgbcolor={blue[500]} />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>43</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Robust UI Kit
                </TableCell>
                <TableCell>
                  <ProductsChip  size="small" label="Angular" rgbcolor={red[500]} />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>27</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Spark
                </TableCell>
                <TableCell>
                  <ProductsChip  size="small" label="React" rgbcolor={green[500]} />
                </TableCell>
                <TableCell>Single License</TableCell>
                <TableCell>12</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </CardContent>
    </Card>
  );
}
