import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import product55 from '../../assets/images/product/55.png'
import product56 from '../../assets/images/product/56.png'
import product57 from '../../assets/images/product/57.png'
import product58 from '../../assets/images/product/58.jpeg'
import product59 from '../../assets/images/product/59.webp'
import product60 from '../../assets/images/product/60.png'
import product61 from '../../assets/images/product/61.png'
import product62 from '../../assets/images/product/62.jpg'



const mainproduct = [
  {
    id: 55,
    src: product55,
    altText: 'Slide 55',
    title: 'AMPHENOL',
    description: `
    Amphenol designs, manufactures and markets electrical, electronic and fiber optic connectors, coaxial and flat-ribbon cable, and interconnect systems. The primary end markets for the company's products are communications and information processing markets, including cable television, cellular telephone and data communication and information processing systems; aerospace and military electronics; and automotive, rail and other transportation and industrial applications.
Products Categories
•	Cables & Wires
•	Communication & Networking
•	Connectors
•	Electromechanical
•	Kits & Tools
•	Optoelectronics
•	Resistors
•	Sensors & Transducers

    
    `

  },
  {
    id: 56,
    src: product56,
    altText: 'Slide 56',
    title: 'TE',
    description: `
    TE Connectivity is a global technology leader offering connectivity and sensor solutions that are essential in today's increasingly connected world. TE collaborates with engineers to transform their concepts into creations redefining what's possible using intelligent, efficient and high-performing TE products and solutions proven in harsh environments. Its 72,000 people, including over 7,000 engineers, partner with customers in nearly 150 countries across a wide range of industries.
Products Categories
•	Cables & Wires
•	Circuit Protection
•	Connectors
•	Electromechanical
•	Filters
•	Inductors
•	Interface
•	Kits & Tools
•	Resistors
•	Safety & Protections
•	Sensors & Transducers
•	Uncategorized

    `

  }, {
    id: 57,
    src: product57,
    altText: 'Slide 57',
    title: 'MOLEX',
    description: `
    Molex believes in the transformative power of creating connections. As a leading global provider of connector solutions, Molex brings engineering excellence, trusted relationships and an unparalleled commitment to quality and reliability to help customers across industries improve lives. Trusted for more than 80 years, Molex offers world-class design, manufacturing and a portfolio of 100,000+ innovative products. We’re doing more than developing solutions, we’re Creating Connections for Life.
Products Categories
•	Antennas
•	Cables & Wires
•	Connectors
•	Electromechanical
•	Enclosures, Racks & Cabinets
•	Kits & Tools
•	Optoelectronics
•	Power Supplies
•	Sensors & Transducers
•	Uncategorized

    `

  },
  {
    id: 58,
    src: product58,
    altText: 'Slide 58',
    title: 'JST',
    description: `
    JST Group has always held to the belief that every product we manufacture must excel at meeting the needs of the customer.
This approach reflects our steadfast adherence to several principles: to develop products with the utmost speed; to manufacture only components that demonstrate the highest reliability and quality; to ensure timely delivery through meticulous processing and inventory management; and to reduce costs by improving efficiency.
We are committed to contributing to social progress and innovation for the new age, and to continuing our company-wide efforts from a broader international viewpoint toward the development of all types of systems for connecting electric power and electronic devices.
Since our company' s founding in 1957, the loyal patronage of our customers has enabled us to achieve substantial growth. On behalf of all members of the JST Group, we would like to express our gratitude to our customers for their valued support over the years.

    `

  },
  {
    id: 59,
    src: product59,
    altText: 'Slide 59',
    title: 'ADAM TECH',
    description: `
    Adam Tech pride themselves on the scope of their product offering which features their innovative connector designs and manufacturing capabilities that reduces cost and improves performance in a broad range of applications.
Their exclusive automated manufacturing processes provide consistent high quality with low cost and short lead times. 

    `

  },
  {
    id: 60,
    src: product60,
    altText: 'Slide 60',
    title: 'IPEX',
    description: `
    Leading in the field of high-frequency and high-speed transmissions, I-PEX contributes to the digital society by providing excellent signal integrity solutions with the development of a wide variety of ultra-precision connectors and our incomparable customer support
    
    `

  }, {
    id: 61,
    src: product61,
    altText: 'Slide 61',
    title: 'KYOCERA',
    description: `
    Kyocera Corporation acquired Optrex Corporation in 2012, expanding and strengthening Kyocera's global LCD business by adding a production, sales, marketing and R&D base with nearly four decades of experience and continuous innovation in LCD technology.

Kyocera Industrial Ceramics Corporation's, Display Division, is the sales, marketing and value-added assembly arm for these products in the Americas, with LCD sales offices in Plymouth, MI; Atlanta, GA; San Diego, CA and Vancouver, WA. Our LCD warehouse and distribution center and value-added assembly services are located in Plymouth, MI with company headquarters in Hendersonville, NC.
Products Categories
•	Cables & Wires
•	Capacitors
•	Connectors
•	Displays
•	Filters
•	Kits & Tools
•	Logic & Timing
•	Peripherals
•	Uncategorized

    `

  },
  {
    id: 62,
    src: product62,
    altText: 'Slide 62',
    title: 'HIROSE',
    description: `
    Hirose Electric Company specializes in the manufacture of connectors and has been a contributor to the development of the electronics sector for over 70 years. Their modest and humble business philosophy of seeking wisdom from all sources and incorporating that knowledge to maintain high quality and efficiency has earned Hirose a loyal customer base.
Hirose is also committed to environmental issues in the manufacture of connectors such as coaxial connectors, FFC / FPC connectors, and single and double row connectors.

    `

  },



];

const link = {
  my: 0.5, textTranform: 'uppercase',
  '&:hover': {
    color: '#ff3366'
  }
}

function MainInterconnectionProduct() {
  return (
    <>
      {mainproduct.map((product) => (
        <Grid item xs={6} sm={3} lg={2} key={product.id}>
          <CardActionArea component="a" href={`/product-detail/${product.id}`}>
            <Card >
              <Card sx={{ height: '120px', border: '1px solid #ccc' }}>
                <div style={{height: '90px', border: '1px solid #ccc' }}>
                  <img
                    style={{ width: '100%', height: '100%', display: 'block', borderBottom: '1px solid #ccc', padding: '8px' }}
                    src={product.src} alt={product.altText}
                  />
                </div>
                <div>
                  <Typography component="h2" color="text.secondary" sx={link}>
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


export default MainInterconnectionProduct; 