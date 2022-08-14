import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import { Button, Typography } from '@mui/material';
import CopyRight from './CopyRight';
import Logo from './Logo';


export default function Footer() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#F2F2F2', pt: 3 }}
    >
      <Container >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Button style={{ width: '30%' }} href="/" sx={{ mb: 1 }}>
              <Logo />
            </Button>
            <Typography sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>Excelpoint Systems (Pte) Ltd has achieved ISO 9001:2015 certification</Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom style={{ fontSize: '16px' }}>
              About Us
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>Corporate Overview</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>Corporate Governance</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>Whistle-Blowing Policy</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom style={{ fontSize: '16px' }}>
              Contact Us
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>Information</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>Contact</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>Products Material Download</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" marked="left" gutterBottom style={{ fontSize: '16px' }}>
              Our Solutions
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>All Solutions</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>IoT | Dev Kit</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/terms/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>IoT | In-Building</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="/premium-themes/onepirate/privacy/" sx={{ color: '#858585', textDecoration: 'none', fontSize: '14px' }}>IoT | Infrastructure</Link>
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