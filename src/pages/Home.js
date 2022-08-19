import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Divider, Typography } from '@mui/material';
import OurProductLines from '../components/OurProductLines';
import HomeBanner from '../components/banners/HomeBanner';
import Footer from '../components/layout/Footer';
import AppAppBar from '../components/layout/AppAppBar';
import banner from '../config/banners/homebanner';
import OurBusiness from '../components/OurBusiness';

const theme = createTheme();

const titleButton = {
  p: 1,
  '&:hover': {
    backgroundColor: '#5AB9D1',
    color: '#FFFFFF'
  }
}

const titleButtonFinder = {
  color: '#00aee3',
  '&:hover': {
    backgroundColor: '#5AB9D1',
    color: '#FFFFFF',
    border: '1px solid transparent'
  }
}

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar />
      </Container>
      <main>
        <HomeBanner banner={banner}/>
        <Container maxWidth="lg" >
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
          <Grid container spacing={4} sx={{ mb: 9 }} >
            <OurBusiness/>
          </Grid>
          <Container disableGutters component="main" sx={{ pt: 8, pb: 5 }}>
            <Divider/>
          </Container>
          <Grid container spacing={5} sx={{ mb: 9, display: 'flex', alignItems: 'center' }}>
            <Grid container item xs={12} lg={6}>
              <Typography
                component="h1"
                variant="h4"
                align="left"
                color="text.secondary"
                gutterBottom
                sx={titleButton}
              >
                Our Product Line
              </Typography>
              <Typography variant="body1" align="left" color="text.secondary" component="p"
                sx={{ pb: 3 }}
              >
                TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.
              </Typography>
              <Button variant="outlined" href="/products"
                size="large"
                sx={titleButtonFinder}
              >PRODUCT FINDER</Button>
            </Grid>
            <Grid container item xs={12} lg={6} spacing={2} sx={{ mt: 3, mb: 9 }}>
              <OurProductLines />
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