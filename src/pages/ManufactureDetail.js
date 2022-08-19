import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme, Divider, Typography } from '@mui/material';
import sections from '.././config/sections'
import AppAppBar from '../components/layout/AppAppBar';
import Footer from '../components/layout/Footer';
import { useParams } from 'react-router-dom';
import product1 from '../assets/images/ourProducts/image1.jpg'
import product2 from '../assets/images/ourProducts/image2.jpg'
import product3 from '../assets/images/ourProducts/image3.jpg'


const manufacturers = [
  {
    id: 1,
    src: product1,
    altText: 'CapX',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'
  },
  {
    id: 2,
    src: product2,
    altText: 'Slide 2',
    title: 'Slide 1',
    description: 'TitanPower works closely with its principals to create innovative solutions to complement its customers’ products and solutions. Aimed at improving its customers’ operational efficiency and cost competitiveness, the Group has set up research and development (“R&D”) centres in Singapore, China and Vietnam that are helmed by its dedicated team of professional engineers. Established in 2012 and headquartered in VietNam.'

  }, {
    id: 3,
    src: product3,
    altText: 'Slide 3',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  }, {
    id: 4,
    src: product1,
    altText: 'Slide 3',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  },
  {
    id: 5,
    src: product2,
    altText: 'Slide 3',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  },
  {
    id: 6,
    src: product3,
    altText: 'Slide 3',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  },
  {
    id: 7,
    src: product1,
    altText: 'CapX',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  },
  {
    id: 8,
    src: product2,
    altText: 'Slide 2',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  }, {
    id: 9,
    src: product3,
    altText: 'Slide 3',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  }, {
    id: 10,
    src: product1,
    altText: 'Slide 3',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  },
  {
    id: 11,
    src: product2,
    altText: 'Slide 3',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  },
  {
    id: 12,
    src: product3,
    altText: 'Slide 3',
    title: 'Slide 1',
    description: 'TitanPower is a leading regional electronics components distributor providing quality components, engineering design services. Use the product search tools to help find the right product for your next design.'

  },

];
const theme = createTheme();


const title = {
  wordSpacing: '2px ',
  fontSize: '32px ',
  fontWeight: 'bold ',
  marginBottom: '8px '
}


export default function ManufactureDetail() {

  const { id } = useParams();
  const result = manufacturers.find((item) => item.id === parseInt(id));
  console.log(result)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
        <Divider />
      </Container>
      <main>
        <Container maxWidth="lg" sx={{ mb: 12 }}>
          <Grid container spacing={2} sx={{ mb: 9, display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} sm={4} lg={6} >
              <img src={result.src} style={{ display: 'block', width: '100%', height: '100%' }}></img>
            </Grid>
            <Grid container item xs={12} sm={8} lg={6} spacing={2} sx={{ mt: 3, mb: 9, display: 'flex', alignItems: 'stretch !important' }}>
              <Container sx={{ textAlign: 'left' }}>
                <Typography align="left" color="text.secondary" sx={title}>
                  {result.title}
                </Typography>
                <Typography variant="body1" align="left" color="text.secondary" component="p" sx={{ wordSpacing: '2px', lineHeight: '1.7' }}>
                  {result.description}
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