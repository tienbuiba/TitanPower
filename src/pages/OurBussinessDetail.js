import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import { Button, createTheme, Divider, Typography } from '@mui/material';
import sections from '.././config/sections'
import AppAppBar from '../components/layout/AppAppBar';
import Footer from '../components/layout/Footer';
import { useParams } from 'react-router-dom';
import image1 from '../assets/images/ourProducts/image1.jpg'
import image2 from '../assets/images/ourProducts/image2.png'
import image3 from '../assets/images/ourProducts/image3.jpg'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const ourBusiness = [
  {
    id: 1,
    src: image1,
    altText: 'Slide 1',
    title: 'Authorized distribution',
    description: 'TITAN POWER, an independent electronic component distributor in Vietnam, was founded in 2018 as a distributor of sophisticated passive and semiconductor components. More than 5 years of hard work using the simple motto "one step a day" has helped us build special relationships with suppliers and customers. We strive to build something remarkable - we believe in the sustainable and long-term values, that´s why we continue with full commitment also in the second generation and we support small and medium-sized companies with their "hidden heroes", who are the backbone of any economy. The hidden heroes, innovators, purchasers and other hard workers, who make their work by heart.'

  },
  {
    id: 2,
    src: image2,
    altText: 'Slide 2',
    title: '  Global sourcing',
    description: 'Our commodity analysts and sourcing teams utilize tool and strategic supply partner relationships to identify needle-moving cost improvement opportunities on your BOM quickly. From procurement to global inspections and warehousing, we reduce the total cost of inventory ownership and the standard purchase price. Making sense of a confusing problem. We provide integrated, and custom strategic solutions for third-party procurement management, inspections, warehousing, logistics, and most importantly, our solutions are designed to integrate into your existing supply chain seamlessly. Our solutions are designed to reduce material procurement and administrative costs, increase inventory turns, improve cash to cash cycle times, and eliminate high costs associated with shortage and excess mitigation—always with our partners’ interests in mind.'

  }, {
    id: 3,
    src: image3,
    altText: 'Slide 3',
    title: 'R&D support',
    description: 'From years of persistent working with reliable international supplier network that allows us to flexibly respond to diverse needs and offer a full range of electronic parts. We are a proud partner of many customers in Vietnam, thanks to the smart distribution model we utilize. We supply to SMEs and our flexibility allows us to avert the shortages many multinational companies face. We Collaborate with customers and suppliers to design and deliver electronic component services and solutions that address comprehensive and end-to-end business needs. We also support both technical universities and young innovative companies - start-ups. '

  }

];
const theme = createTheme();


const title = {
  wordSpacing: '2px ',
  fontSize: '32px ',
  fontWeight: 'bold ',
  marginBottom: '8px '
}
const titleButtonFinder = {
  color: '#00aee3',
 float: 'left',
  '&:hover': {
    backgroundColor: '#5AB9D1',
    color: '#FFFFFF',
    border: '1px solid transparent'
  }
}

export default function OurBusinessDetail() {

  const { id } = useParams();

  const result = ourBusiness.find((item) => item.id === parseInt(id));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
        <Divider />
      </Container>
      <main>
        <Container maxWidth="lg" sx={{ mb: 12, mt: 9 }} >
        <Grid item>
        <Button variant="outlined" href="/"
            size="small"
            sx={titleButtonFinder}
            startIcon={<KeyboardBackspaceIcon/>
            }
          >back</Button>
        </Grid>
       
          <Grid container spacing={2} sx={{ mb: 9, display: 'flex', alignItems: 'center' }}>
            <Grid item xs={12} lg={4} sx={{ mt: 3 }}>
              <img src={result.src} style={{ display: 'block', width: '100%', height: '100%', borderRadius: '5px' }} alt={result.altText}></img>
            </Grid>
            <Grid container item xs={12} lg={8} spacing={2} sx={{ mt: 3, mb: 9, display: 'flex' }}>
              <Container sx={{ textAlign: 'left' }} >
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