import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import image1 from '../assets/images/product/10.png'
import image2 from '../assets/images/product/8.jpeg'
import image3 from '../assets/images/product/13.png'
import image4 from '../assets/images/product/20.png'
import image5 from '../assets/images/product/1.png'
import image6 from '../assets/images/product/48.png'
import image7 from '../assets/images/product/62.jpg'
import image8 from '../assets/images/product/63.png'
import image9 from '../assets/images/product/51.png'
import image10 from '../assets/images/product/52.png'
import image11 from '../assets/images/product/53.jfif'
import image12 from '../assets/images/product/54.png'


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
        <Grid item xs={6} sm={3} key={item.id}>
          <CardActionArea component="a" href="/products">
            <Card >
              <Card sx={{ border: '1px solid #ccc', height: '150px', width: '100%' }}>
                <img
                  src={item.src}
                  style={{ width: '100%', height: '100%', display: 'block', padding:  '8px' }}
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