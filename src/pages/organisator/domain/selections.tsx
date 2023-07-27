import React from 'react';
//import styled from 'styled-components/macro';
//import Link from '@/components/shared/Link';
import DashboardLayout from '@/components/layouts/Dashboard';
/* import { Breadcrumbs as MuiBreadcrumbs, Divider as MuiDivider, Typography } from '@mui/material';
import { spacing } from '@mui/system';
 */
//import { useRouter } from 'next/router';
//import Selections from '@/pages/selections';
/* const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);
 */
/* interface ButtonPropstype extends SpacingProps {
  component?: string;
}
 */
function EditPage() {
  // const { route } = useRouter();
  /*   const fini = route.toString().split('/')[1];
  const deb = route.toString().split('/')[2];
 */
  return (
    <DashboardLayout >
      {/*     <Selections />
       */}{' '}
    </DashboardLayout>
  );
}

export default React.memo(EditPage);
