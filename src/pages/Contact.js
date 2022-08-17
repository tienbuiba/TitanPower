import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';
import sections from '.././config/sections'
import AppAppBar from '../components/AppAppBar';
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Map from '../components/Map';
import AboutUsBanner from '../components/AboutUsBanner';
import aboutus from '../config/aboutus';

const theme = createTheme();
export default function Contact() {
  const handleClick = (e) => {

    alert('submit success');
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
        <Divider />
      </Container>
      <main>
        <AboutUsBanner post={aboutus} />
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 9, mt: 3 }}>
            <Grid item xs={12} md={6}>
              <Typography component="h1" variant="h4" sx={{ fontWeight: "bold", wordSpacing: '0.1' }}>
                Feel free to contact us.
                We&apos;ll be glad to hear from you, buddy.
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2.8}>
                  <Grid item xs={12} >
                    <TextField
                      fullWidth
                      id="Name"
                      label="Name"
                      name="Name"
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="Subject"
                      label="Subject"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="Enter your message here"
                      label="Enter your message here"
                      type="text"
                    />
                  </Grid>
                  <Grid item>
                    <Button onClick={handleClick} variant="contained" size="large" sx={{ mt: 2 }}>
                      Submit Now
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
            <Map       
          />
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