import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function CopyRight() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
      {'Copyright ©'}
      {new Date().getFullYear()}
      <Link color="primary" href="">
      {' Titanpower'}
      </Link>{' '}
      . All Rights Reserved.
    </Typography>
  );
}

export default CopyRight;