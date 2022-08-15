import { Grid, Typography } from '@mui/material';
import React from 'react';

const ContractUs = () => {
  return (


    <Grid item xs={12} md={4}>
      <Typography variant="h6" gutterBottom sx={{ mt: 9 }}>
        Social
      </Typography>
      {/* {social.map((network) => (
        <LinkIn
          display="block"
          variant="body1"
          href="#"
          key={network.name}
          sx={{ mb: 1 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <network.icon />
            <span>{network.name}</span>
          </Stack>
        </LinkIn>
      ))} */}


    </Grid>

  );
};

export default ContractUs;

