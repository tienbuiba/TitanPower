import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';
import { Button, Divider, Typography } from '@mui/material';
import AppAppBar from '../components/AppAppBar';
import banner from '../config/bannner';
import About from '../components/About';
import OurProductLines from '../components/OurProductLines';
import HomeBanner from '../components/HomeBanner';


const theme = createTheme();

const Manufacturers = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar />
      </Container>
      <main>
        <HomeBanner banner={banner} />
        <Container maxWidth="lg" >
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
            </Typography>
            <Typography variant="h6" align="center" color="text.secondary" component="p">
            </Typography>
          </Container>
        </Container>
      </main>
      <Footer
        title="Footer"
      />
    </ThemeProvider>
  );
};

export default Manufacturers;