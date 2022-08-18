import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Divider } from '@mui/material';


const link = {
  mb: 1, p: 2, fontSize: '14px', textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#5AB9D1',
    display: 'block',
    width: '100%',
    height: '100%',
    color: '#FFFFFF'
  }
}

function SidebarAboutUs(props) {
  const { archives } = props;
  return (
    <Grid >
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}
          sx={link}
        >
          {archive.title}
          <Divider sx={{ mt: 1 }} />
        </Link>
      ))}
    </Grid>
  );
}



export default SidebarAboutUs;