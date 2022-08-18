import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import sections from '.././config/sections'
import NewsBanner from '../components/banners/NewsBanner';
import MainNews from '../components/main/MainNews';
import Footer from '../components/layout/Footer';
import AppAppBar from '../components/layout/AppAppBar';
import newsbanner from '../config/banners/newsbanner';

const theme = createTheme();

export default function News() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
      </Container>
      <main>
        <NewsBanner banner={newsbanner} />
        <Container maxWidth="lg" sx={{ mb: 12 }}>
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Company News & Events
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" component="p">
              Quickly build an effective pricing table for your potential customers with
              this layout.
            </Typography>
          </Container>
          <MainNews />
        </Container>
      </main>
      <Footer
        title="Footer"
      />
    </ThemeProvider>
  );
}