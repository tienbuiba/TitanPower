import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import HomeBanner from '../components/banners/HomeBanner';
import Footer from '../components/layout/Footer';
import AppAppBar from '../components/layout/AppAppBar';
import banner from '../config/banners/homebanner';
import MainManufacture from '../components/main/MainManufacture';


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
          <Grid container item xs={12} spacing={2} sx={{ mt: 3, mb: 9 }}>
            <MainManufacture />
          </Grid>
        </Container>
      </main>
      <Footer
        title="Footer"
      />
    </ThemeProvider>
  );
};

export default Manufacturers;