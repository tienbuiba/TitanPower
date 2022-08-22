import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider, Typography } from '@mui/material';
import sections from '.././config/sections'
import sidebar from '.././config/sidebar'
import Footer from '../components/layout/Footer';
import Sidebar from '../components/layout/sideBar/SideBar';
import AppAppBar from '../components/layout/AppAppBar';
import MainProduct from '../components/main/MainProduct';
import ProductBanner from '../components/banners/ProductBanner';
import productbanner from '../config/banners/productbanner';

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
      <ProductBanner banner={productbanner}/>
        <Container maxWidth="lg" >
          <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 3, pb: 3 }}>
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
            Leading regional electronics components distributor providing quality components, engineering design services
            </Typography>
          </Container>
          <Grid container spacing={2} sx={{ mt: 3, mb: 9, display: 'flex' }}>
            <Grid item xs={4} lg={3} >
              <Sidebar
                archives={sidebar.archives}
              />
            </Grid>
            <Grid container item xs={8} lg={9} spacing={2} sx={{  mb: 9 }}>
              <MainProduct  />
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