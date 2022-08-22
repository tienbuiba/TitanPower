import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Background from '../../assets/images/banners/productbanner.jpg';


const bannerr = {
  height: '400px',
  position: 'relative',
  color: '#fff',
  mb: 6,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundImage: `url(${Background})`

}



function ProductBanner(props) {

  return (
    <Paper
      sx={bannerr}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container >
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography variant="h4" color="inherit" gutterBottom >
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}



export default ProductBanner;