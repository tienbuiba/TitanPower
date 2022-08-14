import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Sidebar(props) {
  const { archives} = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2}}>
          PRODUCT
        </Typography>
      </Paper>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title} sx={{ mb: 1, mt: 1 }}
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