import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import image1 from '../assets/images/ourProducts/image1.jpg'
import image2 from '../assets/images/ourProducts/image2.png'
import image3 from '../assets/images/ourProducts/image3.jpg'



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
function OurBusiness() {
  return (
    <>
      {ourBusiness.map((item) => (
        <Grid item xs={12} sm={6} lg={4} key={item.id}>
          <CardActionArea component="a" href={`/ourbusiness-detail/${item.id}`}>
            <Card sx={{ display: 'flex' }}>
              <CardContent>
                <div style={{ height: '250px' }}>
                  <img
                    src={item.src}
                    style={{ width: '100%', height: '90%', borderRadius: '5px' }}
                    alt="imagse"
                  />
                </div>

                <div style={{ padding: '16px' }}>
                  <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle1" paragraph style={{

                    maxWidth: '100%',
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    textAlign: 'center'
                  }}>

                    {item.description}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" sx={{ textAlign: 'start', }}>
                  Continue reading...
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      ))
      }
    </>
  );
}


export default OurBusiness;