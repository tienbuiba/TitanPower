import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Main from '../components/Main';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer';
import { Divider, Typography } from '@mui/material';
import sections from '.././config/sections'
import sidebar from '.././config/sidebar'
import AppAppBar from '../components/AppAppBar';

const theme = createTheme();

export default function Product() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
        <Divider />
      </Container>
      <main>
        <Container maxWidth="lg" >
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              PRODUCTS
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" component="p">
              Quickly build an effective pricing table for your potential customers with
              this layout.
            </Typography>
          </Container>
          <Grid container spacing={2} sx={{ mt: 3, mb: 9, display: 'flex', alignItems: 'stretch' }}>
            <Grid item xs={4} lg={3}>
              <Sidebar
                archives={sidebar.archives}
              />
            </Grid>
            <Grid container item xs={8} lg={9} spacing={2} sx={{ mt: 3, mb: 9 }}>
              <Main title="" />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer
        title="Footer"
      />
    </ThemeProvider>
  );
}