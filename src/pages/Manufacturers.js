import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Footer from '../components/layout/Footer';
import AppAppBar from '../components/layout/AppAppBar';
import MainManufacture from '../components/main/MainManufacture';
import ManufactureBanner from '../components/banners/ManufactureBanner';
import manufacturerbanner from '../config/banners/manufacturebanner';


const theme = createTheme();

const Manufacturers = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar />
      </Container>
      <main>
        <ManufactureBanner banner={manufacturerbanner} />
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