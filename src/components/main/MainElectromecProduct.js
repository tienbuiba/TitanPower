import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import product63 from '../../assets/images/product/63.png'
import product64 from '../../assets/images/product/64.png'
import product65 from '../../assets/images/product/65.png'
import product66 from '../../assets/images/product/66.jpeg'


const mainproduct = [

  {
    id: 63,
    src: product63,
    altText: 'Slide 63',
    title: 'GP',
    description: `
    
GP Batteries International Limited is principally engaged in the development, manufacture and marketing of batteries and battery-related products. Since its establishment under Gold Peak Group in Hong Kong, GP Batteries has rapidly expanded to become one of the world's major suppliers of primary and rechargeable batteries. It is one of the largest consumer battery manufacturers in China. It supplies an extensive range of battery products to original equipment manufacturers, leading battery companies as well as consumer retail markets under its own GP brand name.
GP Batteries' production facilities are located in China, Vietnam and Malaysia, supported by marketing and trading offices spanning across Asia, Europe and North America. The Group currently employs about 5,200 people worldwide and occupies a total floor area of approximately 307,800 square metres.

    `

  },
  {
    id: 64,
    src: product64,
    altText: 'Slide 64',
    title: 'VARTA',
    description: `
    
VARTA Microbattery is an internationally leading and globally active manufacturer of retail and OEM batteries and has been operating for more than 125 years. Our customers include the foremost electronics companies, and our range of batteries encompasses all key electrochemical systems, and all shapes and sizes.
The range of applications encompasses everything from micro battery-powered automotive applications, computers, cell phones and medical equipment to measuring and security systems. We manufacture prototypes or large series of batteries, as standard versions or tailored to customer specifications. Our Power Pack Solutions department identifies the perfect solutions for meeting the requirements of a particular piece of equipment.

    `

  },
  {
    id: 65,
    src: product65,
    altText: 'Slide 65',
    title: 'MEAN WELL',
    description: `
    
    Founded in 1982, headquartered in Taiwan, MEAN WELL is one of few manufacturers dedicated to standard power supply in the world. It is the largest manufacturer dedicated to standard power supplies in the world and ranked the 4thin global power supply (DC output) makers according to a report by Micro Technology Consultant released in March 2020. MEAN WELL offers more than 10,000 standard off-the-shelf and customized power solutions to fulfill customers’ power demands and applications.

    Established in 1999, MEAN WELL USA is the sales and support center for our North American customers. Located in Fremont, California
    
    MEAN WELL Europe established in Amstelveen, The Netherlands in 2006 has become a leading distribution and product support center for switch mode power supplies in Europe.
    

    `

  },
  {
    id: 66,
    src: product66,
    altText: 'Slide 66',
    title: 'MORNSUN',
    description: `
    
    Mornsun is a one-stop power supplies solutions manufacturer, with 5000+ high-quality products including AC/DC converter, DC/DC converter, enclosed switching power supply, Power ICs and transformers for different applications and industries, such as industrial automation, charging station, photovoltaic, telecommunications, medical, smart home, automotive industry, and more. Guided by the service principle of “trustworthiness” , MORNSUN offers the best products, fast and local service and efficient pre-sale and after-sales support for clients.

    `

  },



];

function MainElectromecProduct() {
  return (
    <>
      {mainproduct.map((product) => (
        <Grid item xs={6} sm={3} lg={2} key={product.id}>
          <CardActionArea component="a" href={`/product-detail/${product.id}`}>
            <Card >
              <Card sx={{ height: '120px', border: '1px solid #ccc' }}>
                <div style={{ height: '90px', width: '100%', border: '1px solid #ccc' }}>
                  <img
                    style={{ width: '100%', height: '100%', display: 'block', borderBottom: '1px solid #ccc', padding: '8px' }}
                    src={product.src} alt={product.altText}
                  />
                </div>
                <div>
                  <Typography component="h2" color="text.secondary" sx={{ my: 0.5 }}>
                    {product.title}
                  </Typography>
                </div>
              </Card>
            </Card>
          </CardActionArea>
        </Grid>
      ))
      }
    </>
  );
}


export default MainElectromecProduct; 