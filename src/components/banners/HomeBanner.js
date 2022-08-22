import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, useMediaQuery } from '@mui/material';
import Background from '../../assets/images/banners/banner4.jpg';
import { useTheme } from '@mui/system';


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

const title = {
  fontSize: '14px',
  marginBottom: '30px',
}
const titleButton = {
  color: '#337ab7 ',
  backgroundColor: '#fff ',
  '&:hover': {
    backgroundColor: '#5AB9D1',
    color: '#FFFFFF'
  }
}

function HomeBanner(props) {
  const { banner } = props;
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('md'));


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
              {banner.title}
            </Typography>
            <Typography color="inherit" paragraph sx={title}>
              {banner.description}
            </Typography>
            <Button size={`${matchDownMD ? 'large' : 'large'}`} variant="contained" sx={titleButton} href="/Manufacturers">
              {banner.titleButton}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}



export default HomeBanner;