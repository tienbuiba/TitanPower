import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import CopyRight from './CopyRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


const link = {
  color: '#858585',
  textDecoration: 'none',
  fontSize: '14px',
  '&:hover': {
    color: '#ff3366',
    cursor: 'pointer'
  }
}

const linkicon = {
  m: 1,
  '&:hover': {
    color: '#ff3366',
    cursor: 'pointer'
  }
}

export default function Footer() {

  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#F2F2F2', pt: 3 }}
    >
      <Container >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Button href="/" sx={{ mb: 1,width: '30%' }}>
            {/* <img src={require('./../assets/images/logo/logo.png')} alt="Apollo" width="100%" height="60px" 
        style={{
            opacity: '1',
            transition: 'opacity .4s'
        }} /> */}
            </Button>
            <Typography sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px', mb: 1 }}>TitanPower Systems (Pte) Ltd has achieved ISO 9001:2015 certification</Typography>
            <div sx={{ marginTop: '16px' }}>
              <a href="https://www.facebook.com/Titanpowerstore/" style={{ color: '#000' }}>
                <FacebookIcon sx={linkicon} size="small" />
              </a>
              <InstagramIcon sx={linkicon} size="small" />
              <LinkedInIcon sx={linkicon} size="small" />
              <TwitterIcon sx={linkicon} size="small" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom style={{ fontSize: '16px' }}>
              About Us
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>Corporate Overview</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>Corporate Governance</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>Whistle-Blowing Policy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom sx={{ fontSize: '16px' }}>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>Information</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>Contact</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>Products Material Download</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom sx={{ fontSize: '16px' }}>
              Our Solutions
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>All Solutions</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>IoT | Dev Kit</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>IoT | In-Building</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#" sx={link}>IoT | Infrastructure</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <div style={{ border: '0.1px solid #e0e0e0', width: '100%' }} />
            <CopyRight></CopyRight>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}