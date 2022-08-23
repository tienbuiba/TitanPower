import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, Divider, Typography } from '@mui/material';
import sections from '.././config/sections'
import Footer from '../components/layout/Footer';
import AppAppBar from '../components/layout/AppAppBar';
import AboutUsBanner from '../components/banners/AboutUsBanner';
import banner from '../config/banners/aboutusbanner';

const theme = createTheme();

const title = {
  wordSpacing: '2px ',
  fontSize: '32px ',
  fontWeight: 'bold ',
  marginBottom: '8px '
}

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
      </Container>
      <main>
        <AboutUsBanner banner={banner} />
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 3, pb: 3 }}>
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            ABOUT US
          </Typography>
        </Container>
        <Container maxWidth="lg" sx={{ mb: 8 }} >
          <Grid container spacing={4} sx={{ display: 'flex', alignItems: 'stretch', px: 1 }}>
            <Grid item xs={12} lg={6} sx={{ mt: 3 }}>
              <img src={require('../assets/images/aboutUs/imageaboutus.jpg')} style={{ width: '100%', height: '80%', display: 'block', borderRadius: ' 5px' }} alt="b" />
            </Grid>
            <Grid container item xs={12} lg={6} sx={{ mt: 3, mb: 9, display: 'flex' }}>
              <div style={{ textAlign: 'left' }} >
                <Typography align="left" color="text.secondary" sx={title}>
                  Leading  Electronics Components Distributor
                </Typography>
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ wordSpacing: '2px', lineHeight: '1.7' }}>

                  The basic mission of our company is to build higher competitiveness of the small and medium-sized enterprises (SMEs) on the market, because they create sustainable economic playground for generations. Therefore we provide bespoke solutions. By us solution follows request™, so our customers are able to fully concentrate on activities in the field of production and development of high-technology products and printed circuit boards assembly. Our role is to provide quality electronic components and logistics.
                  <br></br>
                  <br></br>
                  Resulting from years of persistent work is a reliable international supplier network that allows us to flexibly respond to diverse needs and offer a full range of electronic parts with an emphasis on semiconductors.
                  <br></br>
                  <br></br>
                  We are a proud partner of Vietnam customers thanks to the smart distribution model we utilize. We supply to SMEs and our flexibility allows us to avert the shortages many multinational companies face. We also support both technical universities and young innovative companies - start-ups.
                  As a conservative family business, we highly appreciate long-term relationships based on mutual trust. We strive to be your relevant, responsive and personal partner for the digitized industrial revolution.
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={0} sx={{ px: 1, mb: 8 }}>
            <img src={require('../assets/images/aboutUs/image3.jpg')} style={{ width: '100%', height: '80%', display: 'block', borderRadius: ' 10px' }} alt="a" />
          </Grid>

          <Grid container spacing={4} sx={{ px: 1, textAlign: 'center', mb: 3 }}>
            <Grid item lg={2}></Grid>
            <Grid item xs={12} lg={8} sx={{ px: 1, textAlign: 'center' }} >
              <div style={{ textAlign: 'center', backgroundColor: '#203864', color: '#fff', padding: '10px', borderRadius: ' 10px' }} >
                <Typography align="center" sx={title} >
                  6 reasons why to use our services
                </Typography>
                <Typography variant="body1" align="left" component="p" sx={{ wordSpacing: '2px', lineHeight: '1.7' }}>
                  1) Customer first
                  <br></br>
                  2) 100% authentic products
                  <br></br>
                  3) Flexible and very quick action
                  <br></br>
                  4) Cutting lead times by allocated parts
                  <br></br>
                  5) Hard-to-find parts
                  <br></br>
                  6) Cooperation with global manufacturers and franchised distributors
                </Typography>
              </div>
            </Grid>
            <Grid item lg={2}></Grid>
          </Grid>
          <Grid container spacing={4} sx={{ mb: 9, display: 'flex', alignItems: 'stretch', px: 1 }}>

            <Grid container item xs={12} lg={12} sx={{ mt: 3, mb: 9, display: 'flex' }}>
              <div style={{ textAlign: 'left' }} >
                <Typography align="left" color="text.secondary" sx={title}>
                  FLEXIBILITY

                </Typography>
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ wordSpacing: '2px', lineHeight: '1.7' }}>
                  Flexibility is the byword of our company. Solution follows request.
                  A fully flexible pricing policy along with a deep knowledge of international supplier networks facilitates choosing the lowest price on the global market with the highest quality of high-tech components from USA, EU, Japan, Taiwan, Korea, China, Vietnam.
                  We daily monitor developments in the electronic components market while following the foreign exchange market in the context of purchasing power parity.
                  We shorten standard delivery times. Allocated and other hard to find electronic components can be delivered immediately.
                  Our knowledge helps us successfully deal with unprecedented cases. Each team member is a creative professional.
                  Our international partnership warehouse enables us to deliver goods to the customer's plant within a few days.
                  We minimize the term MOQ.
                  We offer suitable alternatives & complementary products and support design-in.
                </Typography>
              </div>
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