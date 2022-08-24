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
import Logo from '../../assets/images/Logo/logo.png'

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
            <Button href="/" sx={{ mb: 1, width: '30%' }}>
              <img src={Logo} alt="Apollo" width="100%" height="80px"
                style={{
                  opacity: '1',
                  transition: 'opacity .4s',
                  display: 'block'
                }} />
            </Button>
            <Typography sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px', mb: 1 }}>Titan Power Co.,Ltd</Typography>
            <div sx={{ marginTop: '16px' }}>
              <a href="https://www.facebook.com/Titanpowerstore/" style={{ color: '#000' }}>
                <FacebookIcon sx={linkicon} size="small" />
              </a>

              <InstagramIcon sx={linkicon} size="small" />
              <a href="https://www.linkedin.com/company/82785234/admin/" style={{ color: '#000' }}>

                <LinkedInIcon sx={linkicon} size="small" />
              </a>
              <TwitterIcon sx={linkicon} size="small" />
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom style={{ fontSize: '16px' }}>

              Information
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/aboutus" sx={link}>About us</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/products" sx={link}>Product</Link>
              </Box>

              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/manufacturers" sx={link}>Manufacturers</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom sx={{ fontSize: '16px' }}>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/contact" sx={link}>Contact</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/aboutus" sx={link}>Information</Link>
              </Box>

              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/policy" sx={link}>Policy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom sx={{ fontSize: '16px' }}>
              Our Business
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5, textTransform: 'capitalize' }}>
                <Link href="/ourbusiness-detail/1" sx={link}>Authorized distributor</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5, textTransform: 'capitalize' }}>
                <Link href="/ourbusiness-detail/2" sx={link}>Global sourcing</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5, textTransform: 'capitalize' }}>
                <Link href="/ourbusiness-detail/3" sx={link}>R&D support</Link>
              </Box>
            </Box>
          </Grid>
          <Grid container spacing={1} item xs={12} sx={{ mb: 2 }}>
            <div style={{ border: '0.1px solid #e0e0e0', width: '100%', marginBottom: '16px' }} />
            <Grid item xs={12} md={4}>
              <Typography color="text.secondary" align="center" sx={{ fontSize: '13px' }}>
                Tel：+84-966-198-246
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography color="text.secondary" align="center" sx={{ fontSize: '13px' }}>
                Add： 3F., No. 84, Duy Tan Dist., Ha Noi City 10000, VietNam
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography color="text.secondary" align="center" sx={{ fontSize: '13px' }}>
                E-mail：sales@titanpower.com.vn
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <CopyRight></CopyRight>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}