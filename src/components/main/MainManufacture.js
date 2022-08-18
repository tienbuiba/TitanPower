import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import product1 from '../../assets/images/ourProducts/image1.jpg'
import product2 from '../../assets/images/ourProducts/image2.jpg'
import product3 from '../../assets/images/ourProducts/image3.jpg'



const mainproduct = [
  {
    id: 1,
    src: product1,
    altText: 'CapX',
    title: 'Slide 1'
  },
  {
    id: 2,
    src: product2,
    altText: 'Slide 2',
    title: 'Slide 1'
  }, {
    id: 3,
    src: product3,
    altText: 'Slide 3',
    title: 'Slide 1'
  }, {
    id: 4,
    src: product1,
    altText: 'Slide 3',
    title: 'Slide 1'
  },
  {
    id: 5,
    src: product2,
    altText: 'Slide 3',
    title: 'Slide 1'
  },
  {
    id: 6,
    src: product3,
    altText: 'Slide 3',
    title: 'Slide 1'
  },
  {
    id: 7,
    src: product1,
    altText: 'CapX',
    title: 'Slide 1'
  },
  {
    id: 8,
    src: product2,
    altText: 'Slide 2',
    title: 'Slide 1'
  }, {
    id: 9,
    src: product3,
    altText: 'Slide 3',
    title: 'Slide 1'
  }, {
    id: 10,
    src: product1,
    altText: 'Slide 3',
    title: 'Slide 1'
  },
  {
    id: 11,
    src: product2,
    altText: 'Slide 3',
    title: 'Slide 1'
  },
  {
    id: 12,
    src: product3,
    altText: 'Slide 3',
    title: 'Slide 1'
  },

];



function MainManufacture() {
  return (
    <>
      {mainproduct.map((product) => (
        <Grid item xs={6} sm={3} lg={2} key={product.id}>
          <CardActionArea component="a" href="/product-details">
            <Card sx={{ display: 'flex' }}>
              <Card sx={{ height: '90%', border: '1px solid #ccc' }}>
                <img
                  style={{ width: '100%', height: '50%', borderBottom: '1px solid #ccc' }}
                  src={product.src} alt={product.altText}
                />
                <div>
                  <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    {product.title}
                  </Typography>
                </div>
              </Card>
            </Card>
          </CardActionArea>
        </Grid>
      ))}
    </>
  );
}


export default MainManufacture;