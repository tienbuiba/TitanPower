import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Background from '../assets/images/new/banner.jpg';

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



function NewsBanner(props) {
  const { banner } = props;


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
            <Typography variant="h4" color="inherit" gutterBottom>
              {banner.title}
            </Typography>
            <Typography color="inherit" paragraph sx={title}>
              {banner.description}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

NewsBanner.propTypes = {
  banner: PropTypes.shape({
    description: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsBanner;