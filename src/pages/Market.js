import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';
import { Divider, Typography } from '@mui/material';
import sections from '.././config/sections'
import AppAppBar from '../components/AppAppBar';
import About from '../components/About';

const theme = createTheme();

export default function Market() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
        <Divider />
      </Container>
      <main>
        <Container maxWidth="lg" sx={{ mt: 3, mb: 12, }}>
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              OUR BUSINESS
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" component="p">
              Quickly build an effective pricing table for your potential customers with
              this layout.
            </Typography>
          </Container>
          <Grid container spacing={4} >
            <About />
          </Grid>
        </Container>
      </main>
      <Footer
        title="Footer"
      />
    </ThemeProvider>
  );
}