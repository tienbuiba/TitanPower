import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import product49 from '../../assets/images/product/49.png'
import product50 from '../../assets/images/product/50.png'
import product51 from '../../assets/images/product/51.png'
import product52 from '../../assets/images/product/52.png'
import product53 from '../../assets/images/product/53.jpeg'
import product54 from '../../assets/images/product/54.png'

const mainproduct = [

  {
    id: 49,
    src: product49,
    altText: 'Slide 49',
    title: 'QUECTEL ',
    description: `
    Quectel offers high-performance cellular and GNSS modules based on the state-of-art technology. They provide a wide product range of wireless products with complete set of integrated features capable of meeting the most sophisticated requirements from all the M2M market segments. They also provide comprehensive technical support for developers in all the phases of the product development, including but not limited to review and optimization of PCB/RF layout/design/schematics, along with in-depth support on testing and analysis of the end-product to ensure optimal results.
Products Categories
•	Antennas
•	Cables & Wires
•	Kits & Tools
•	Uncategorized
•	Wireless & RF

    `

  },
  {
    id: 50,
    src: product50,
    altText: 'Slide 50',
    title: 'FIBOCOM',
    description: `
    Fibocom is a leading global supplier of wireless communication modules and solutions in the sector of IoT, as well as the first wireless communication module producer listed on the A-share market in China (stock code: 300638). We provide end-to-end IoT wireless communication solutions for telecom operators, IoT equipment manufacturers, and IoT system integrators. With over two decades' engagement in M2M and IoT communication technology and extensive expertise, we are capable of independently developing high-performance wireless communication modules including 5G/ 4G high speed cellular modules, LTE Cat 1/ 3G/ 2G/ NB-IoT/ LTE Cat M LPWA IoT cellular modules, Android smart modules and automotive communication modules for vehicle applications. Besides reliable, convenient, safe and intelligent IoT communication solutions for almost all vertical industries, we are also geared to customize the best and optimal IoT modules and solutions catering to your special requirements.
    `

  },
  {
    id: 51,
    src: product51,
    altText: 'Slide 51',
    title: 'SIMCOM',
    description: `
    SIMCom Wireless Solutions is global leading machine-to-machine (M2M) wireless modules and solutions supplier that is a wholly-owned subsidiary of SIM Technology Group (HK: 2000; TW: 912000). Since establishing in 2002, SIMCom Wireless Solutions has committed to providing a variety of wireless technology platform modules and terminal level solutions around the world, such as GSM/GPRS/EDGE, WCDMA/HSPA/HSPA+, CDMA 1xRTT/EV-DO, FDD/TDD-LTE cellular communication and GPS/GLONASS/BEIDOU satellite positioning technology.
Products Categories
•	Connectors
•	Kits & Tools
•	Wireless & RF

    `

  },
  {
    id: 52,
    src: product52,
    altText: 'Slide 52',
    title: 'TELIT',
    description: `
    At Telit, we simplify onboarding connected devices for our customers with a portfolio that offers:
•	Enterprise-grade wireless communication and positioning modules
•	Cellular MVNO connectivity plans and management services
•	Edge and cloud software
•	Data orchestration
•	IoT and industrial IoT platforms
With over 20 years of IoT innovation experience, we deliver award-winning secure and integrated IoT solutions. Our IoT experts have pioneered a successful end-to-end system approach to ensure all the pieces work together.
We enable thousands of successful IoT solutions worldwide and continue to invest in our technology roadmap to push the industry forward for years to come.

    `

  },
  {
    id: 53,
    src: product53,
    altText: 'Slide 53',
    title: 'TELINK',
    description: `
    Telink Semiconductor is a fabless IC design company of state-of-the art wireless connectivity SoCs. Through years of research and development, Telink has built a comprehensive product portfolio and become one of the world-leading IC suppliers in this field.

Telink's products can be widely used in various consumer and commercial IoT applications, including smart retail, consumer electronics, smart lighting, home automation, medical devices, warehousing and logistics, audio, and entertainment. Our SoCs are powering devices from Hanshow, Xiaomi, Logitech, Home Control, Tuya, Ledvance, Renesas, iFLYTEK, Skyworth, Sharp, Panasonic, Nvidia, Harman, and many other brands.

    `

  },
  {
    id: 54,
    src: product54,
    altText: 'Slide 54',
    title: 'SIERRA',
    description: `
    Sierra Wireless have been the first to market with many technology solutions in the wireless IoT space, including the world’s fastest, lowest power, and smallest cellular modules; intelligence at the edge with integrated embedded processing and an open source application framework; cloud-managed 4G LTE routers; eSIMs with flexible connectivity options, and the world’s first multi-network 5G vehicle router. We hold over 200 patents in wireless technologies.
Working with our customers, we empower businesses to reimagine their future and make it easy to connect devices to data, enabling real-time and accurate insights. With our global reach, deep vertical expertise and long partnerships, customers know they can Start with Sierra for secure and innovative technology solutions.

    `

  },



];
const link = {
  my: 0.5, textTranform: 'uppercase',
  '&:hover': {
    color: '#ff3366'
  }
}

function MainConnectivityProduct() {
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


export default MainConnectivityProduct; 