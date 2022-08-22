import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';




const link = {
  mb: 1, p: 2, fontSize: '14px', textDecoration: 'none',
  '&:hover': {
    backgroundColor: '#5AB9D1',
    display: 'block',
    width: '100%',
    height: '100%',
    color: '#FFFFFF',
  }
}
function Sidebar(props) {
  const { archives } = props;
  return (
    <Grid >
      <Paper elevation={0} sx={{ p: 1, bgcolor: 'grey.200' }}>
        <Typography variant="h6" gutterBottom sx={{ mt: 2 }} color="text.secondary">
          Category
        </Typography>
      </Paper>
      {archives.map((archive) => (
        <Link display="block" variant="body1" href={archive.url} key={archive.title}
          sx={link}
        >
          {archive.title}
        </Link>
      ))}
    </Grid>
  );
}



export default Sidebar;