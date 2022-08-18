import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

function About() {
  return (
    <>
      <Grid item xs={12} sm={6} lg={4}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ p: 0, height: '60%' }}>
              <img
                src={require('../assets/images/ourProducts/image1.jpg')}
                style={{ width: '100%', height: '50%' }}
                alt="imagse"
              />
              <div style={{ padding: '16px' }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                  CAP-XX
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  CAP-XX is a world leader in the design and manufacture of thin, flat supercapacitors and energy management systems used in portable and small-scale electronic devices.                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ textAlign: 'start' }}>
                  www.cap-xx.com
                </Typography>
              </div>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>    <Grid item xs={12} sm={6} lg={4}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ p: 0, height: '60%' }}>
              <img
                src={require('../assets/images/ourProducts/image2.jpg')}
                style={{ width: '100%', height: '50%' }}
                alt="imsagses"

              />
              <div style={{ padding: '16px' }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                  Omron
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  Omron has been pursuing innovation driven by social needs for creating a better society. Omron’s four main businesses are Industrial Automation,
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ textAlign: 'start' }}>
                  https://components.omron.com/us-en/
                </Typography>
              </div>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid> 
         <Grid item xs={12} sm={6} lg={4}>
        <CardActionArea component="a" href="#">
          <Card sx={{ display: 'flex' }}>
            <CardContent sx={{ p: 0, height: '60%' }}>
              <img
                src={require('../assets/images/ourProducts/image3.jpg')}
                style={{ width: '100%', height: '50%' }}
                alt="simagses"

              />
              <div style={{ padding: '16px' }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                  ATP
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  ATP Electronics is the leading provider of “Industrial Only” NAND flash products and DRAM modules for demanding industrial/automotive
                </Typography>
                <Typography variant="subtitle1" color="primary" sx={{ textAlign: 'start' }}>
                  www.atpinc.com
                </Typography>
              </div>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  );
}


export default About;