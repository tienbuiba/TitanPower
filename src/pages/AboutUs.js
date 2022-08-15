import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';
import { Typography } from '@mui/material';
import sections from '.././config/sections'
import AppAppBar from '../components/AppAppBar';
import AboutUsBanner from '../components/AboutUsBanner';
import aboutus from '../config/aboutus';
import SidebarAboutUs from '../components/SideBarAboutUs';

const theme = createTheme();

const sidebar = {

  archives: [
    { title: 'Corporate Profile', url: '#' },
    { title: 'Company Structure', url: '#' },

  ]
};


export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
      </Container>
      <main>
        <AboutUsBanner post={aboutus} />
        <Container maxWidth="lg" sx={{ mb: 12 }} >

          <Grid container spacing={2} sx={{ mb: 9, display: 'flex', alignItems: 'stretch' }}>
            <Grid item xs={4} lg={3} sx={{ mt: 2 }}>
              <SidebarAboutUs
                archives={sidebar.archives}
              />
            </Grid>
            <Grid container item xs={8} lg={9} spacing={2} sx={{ mt: 3, mb: 9, display: 'flex', alignItems: 'stretch !important' }}>
              <Container sx={{ textAlign: 'left' }} >
                <Typography variant="h3" align="left" color="text.secondary" component="p" sx={{ mb: 3, wordSpacing: '2px' }}>
                  Leading Regional Electronics Components Distributor
                </Typography>
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ wordSpacing: '2px', lineHeight: '1.7' }}>
                  TitanPower Technology Ltd. (the “Company”) and its subsidiaries (TitanPower or the “Group”) are one of the leading regional business-to-business (“B2B”) platforms providing quality electronic components, engineering design services and supply chain management to original equipment manufacturers (“OEMs”), original design manufacturers (“ODMs”) and electronics manufacturing services (“EMS”) in the Asia South region.
                  <br></br>
                  <br></br>


                  TitanPower Technology Ltd. has been recognised in the Top 250 Global Electronics Distributors and Top Global Distributors lists by EBN (a premier online community for global supply chain professionals) and EPSNews (a US premier news, information and data portal and resource centre for electronics and supply chain industries) respectively.
                  <br></br>
                  <br></br>


                  TitanPower works closely with its principals to create innovative solutions to complement its customers’ products and solutions. Aimed at improving its customers’ operational efficiency and cost competitiveness, the Group has set up research and development (“R&D”) centres in Singapore, China and Vietnam that are helmed by its dedicated team of professional engineers.

                  Established in 2012 and headquartered in VietNam.
                </Typography>
              </Container>
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