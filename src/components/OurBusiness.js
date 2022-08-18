import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import image1 from '../assets/images/ourProducts/image1.jpg'
import image2 from '../assets/images/ourProducts/image2.jpg'
import image3 from '../assets/images/ourProducts/image3.jpg'

const ourBusiness = [
  {
    id: 1,
    src: image1,
    altText: 'Slide 1',
    title: 'CAP-XX',
    description: 'CAP-XX is a world leader in the design and manufacture of thin, flat supercapacitors and energy management systems. '
    , site: ' www.cap-xx.com'
  },
  {
    id: 2,
    src: image2,
    altText: 'Slide 2',
    title: '  Omron',
    description: 'Omron has been pursuing innovation driven by social needs for creating a better society. Omron’s four main businesses are Industrial Automation'
    , site: 'https://components.omron.com/us-en/'
  }, {
    id: 3,
    src: image3,
    altText: 'Slide 3',
    title: ' ATP',
    description: 'ATP Electronics is the leading provider of “Industrial Only” NAND flash products and DRAM modules for demanding industrial/automotive'
    , site: ' www.atpinc.com'
  }

];
function OurBusiness() {
  return (
    <>
      {ourBusiness.map((item) => (
        <Grid item xs={12} sm={6} lg={4} key={item.id}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: 'flex' }}>
              <CardContent>
                <img
                  src={item.src}
                  style={{ width: '80%', height: '50%' }}
                  alt="imagse"
                />
                <div style={{ padding: '16px' }}>
                  <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    {item.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ textAlign: 'start' }}>
                    {item.site}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </>
  );
}


export default OurBusiness;