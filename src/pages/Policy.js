import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, Typography } from '@mui/material';
import sections from '.././config/sections'
import Footer from '../components/layout/Footer';
import AppAppBar from '../components/layout/AppAppBar';


const theme = createTheme();

export default function Policy() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
      </Container>
      <main>
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            POLICY
          </Typography>
        </Container>
        <Container maxWidth="lg" sx={{ mb: 12 }} >

          <Grid container spacing={4} sx={{ mb: 9, display: 'flex', alignItems: 'center', px: 1 }}>
            <Grid container item xs={12} lg={8} sx={{ mt: 3, mb: 9, display: 'flex' }}>
              <div style={{ textAlign: 'left' }} >
                <Typography variant="h6" align="left" color="text.secondary" component="p" sx={{ wordSpacing: '2px', lineHeight: '1.7' }}>
                  We advocate integrity and transparency in all our business dealings, and trust that our staff, business partners, suppliers, vendors and agents uphold the same values. If you have an experience that speaks otherwise, please send an email to
                  <span style={{ color: '#1976d2', margin: '0 2px 0 4px' }}>sales@titanpower.com.vn</span>.
                  We appreciate your feedback, and please rest assured that your response will be treated in the strictest confidence.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} lg={4} sx={{ mt: 3 }}>
              <img src={require('../assets/images/policy/image.jpg')} style={{ width: '100%', height: '80%', display: 'block', borderRadius: ' 5px' }} />
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