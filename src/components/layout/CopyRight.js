import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function CopyRight() {
  return (
    <Typography color="text.secondary" align="center" sx={{ mt: 1, fontSize: '13px' }}>
      {'Copyright ©'}
      {new Date().getFullYear()}
      <Link color="primary" href="#" sx={{ textDecoration: 'none' }}>
        {' Titanpower'}
      </Link>{' '}
      . All Rights Reserved.
    </Typography>
  );
}

export default CopyRight;