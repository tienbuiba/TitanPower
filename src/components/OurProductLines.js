import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import image1 from '../assets/images/ourProductLine/image1.jpg'
import image2 from '../assets/images/ourProductLine/image2.jpg'
import image3 from '../assets/images/ourProductLine/image3.jpg'
import image4 from '../assets/images/ourProductLine/image4.jpg'
import image5 from '../assets/images/ourProductLine/image5.jpg'
import image6 from '../assets/images/ourProductLine/image6.jpg'
import image7 from '../assets/images/ourProductLine/image7.jpg'
import image8 from '../assets/images/ourProductLine/image8.jpg'
import image9 from '../assets/images/ourProductLine/image9.jpg'
import image10 from '../assets/images/ourProductLine/image10.jpg'
import image11 from '../assets/images/ourProductLine/image11.jpg'
import image12 from '../assets/images/ourProductLine/image12.jpg'


const ourProductLine = [
  {
    id: 1,
    src: image1,
    altText: 'Slide 1',
  },
  {
    id: 2,
    src: image2,
    altText: 'Slide 2',
  }, {
    id: 3,
    src: image3,
    altText: 'Slide 3',
  }, {
    id: 4,
    src: image4,
    altText: 'Slide 4',
  },
  {
    id: 5,
    src: image5,
    altText: 'Slide 5',
  },
  {
    id: 6,
    src: image6,
    altText: 'Slide 6',
  },
  {
    id: 7,
    src: image7,
    altText: 'slide 7',
  },
  {
    id: 8,
    src: image8,
    altText: 'Slide 8',
  }, {
    id: 9,
    src: image9,
    altText: 'Slide 9',
  }, {
    id: 10,
    src: image10,
    altText: 'Slide 10',
  },
  {
    id: 11,
    src: image11,
    altText: 'Slide 11',
  },
  {
    id: 12,
    src: image12,
    altText: 'Slide 12',
  },

];
function OurProductLines() {
  return (
    <>
      {ourProductLine.map((item) => (
        <Grid item xs={4} sm={3} key={item.id}>
          <CardActionArea component="a" href="/products">
            <Card >
              <Card sx={{ border: '1px solid #ccc', height: '50%' }}>
                <img
                  src={item.src}
                  style={{ width: '100%', height: '30%' }}
                  alt={item.altText}
                />
              </Card>
            </Card>
          </CardActionArea>
        </Grid>
      ))
      }
    </>
  );
}


export default OurProductLines;