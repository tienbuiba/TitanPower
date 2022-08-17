import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Background from '../assets/images/new/banner.jpg';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  banner: {
    height: '400px',
    [theme.breakpoints.down('lg')]: {
      height: '370px',
    }
  },
  title: {
    fontSize: '14px',
    marginBottom: '30px',
    [theme.breakpoints.down('lg')]: {
      fontSize: '13px',
      marginBottom: '25px'
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '13px',
      marginBottom: '20px',
    }
  },
  titleButton: {
    color: '#337ab7 !important',
    backgroundColor: '#fff !important',
  }
}));


function NewsBanner(props) {
  const { banner } = props;
  const classes = useStyles();


  return (
    <Paper
      sx={{
        position: 'relative',
        color: '#fff',
        mb: 6,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${Background})`
      }}
      className={classes.banner}
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
            <Typography color="inherit" paragraph className={classes.title}>
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