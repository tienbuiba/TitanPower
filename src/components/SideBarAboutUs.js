import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { makeStyles } from '@mui/styles';
import { Divider } from '@mui/material';

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

function SidebarAboutUs(props) {
  const { archives } = props;
  const classes = useStyles()
  return (
    <Grid >  
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title} sx={{ mb: 1, p: 2, fontSize: '14px', textDecoration: 'none' }}
          className={classes.link}
        >
          {archive.title} 
          <Divider sx={{ mt:1,}}/>
        </Link>
      ))}
    </Grid>
  );
}

SidebarAboutUs.propTypes = {
  archives: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired
};

export default SidebarAboutUs;