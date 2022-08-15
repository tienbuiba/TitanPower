import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(function (theme) {
  return {
    link: {
      '&:hover': {
        backgroundColor: '#5AB9D1',
        display: 'block',
        width: '100%',
        height: '100%',
        color: '#FFFFFF',
      }
    }

  }
})

function Sidebar(props) {
  const { archives } = props;
  const classes = useStyles()
  return (
    <Grid >
      <Paper elevation={0} sx={{ p: 1, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }} color="text.secondary">
          Category        </Typography>
      </Paper>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title} sx={{ mb: 1, p: 2, fontSize: '14px', textDecoration: 'none' }}
          className={classes.link}
        >
          {archive.title}
        </Link>
      ))}
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired
};

export default Sidebar;