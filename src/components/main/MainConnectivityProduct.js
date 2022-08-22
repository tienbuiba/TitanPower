import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import product1 from '../../assets/images/product/1.png'
import product2 from '../../assets/images/product/2.png'
import product3 from '../../assets/images/product/3.png'
import product4 from '../../assets/images/product/4.jpeg'
import product5 from '../../assets/images/product/5.jpeg'
import product6 from '../../assets/images/product/6.png'
import product7 from '../../assets/images/product/7.webp'
import product8 from '../../assets/images/product/8.jpeg'
import product9 from '../../assets/images/product/9.png'
import product10 from '../../assets/images/product/10.png'
import product11 from '../../assets/images/product/11.jpeg'
import product12 from '../../assets/images/product/12.jpeg'
import product13 from '../../assets/images/product/13.png'
import product14 from '../../assets/images/product/14.png'
import product15 from '../../assets/images/product/15.jpeg'
import product16 from '../../assets/images/product/16.png'
import product17 from '../../assets/images/product/17.jpeg'
import product18 from '../../assets/images/product/18.png'
import product19 from '../../assets/images/product/19.webp'
import product20 from '../../assets/images/product/20.png'
import product21 from '../../assets/images/product/21.jpeg'
import product22 from '../../assets/images/product/22.png'
import product23 from '../../assets/images/product/23.jpeg'
import product24 from '../../assets/images/product/24.webp'
import product25 from '../../assets/images/product/25.webp'
import product26 from '../../assets/images/product/26.png'
import product27 from '../../assets/images/product/27.png'
import product28 from '../../assets/images/product/28.jpeg'
import product29 from '../../assets/images/product/29.jpeg'
import product30 from '../../assets/images/product/30.png'
import product31 from '../../assets/images/product/31.webp'
import product32 from '../../assets/images/product/32.jpeg'
import product33 from '../../assets/images/product/33.webp'
import product34 from '../../assets/images/product/34.png'
import product35 from '../../assets/images/product/35.png'
import product36 from '../../assets/images/product/36.jpeg'
import product37 from '../../assets/images/product/37.jpeg'
import product38 from '../../assets/images/product/38.jpeg'
import product39 from '../../assets/images/product/39.jpeg'
import product40 from '../../assets/images/product/40.webp'
import product41 from '../../assets/images/product/41.jpeg'
import product42 from '../../assets/images/product/42.png'
import product43 from '../../assets/images/product/43.png'
import product44 from '../../assets/images/product/44.png'
import product45 from '../../assets/images/product/45.png'
import product46 from '../../assets/images/product/46.png'
import product47 from '../../assets/images/product/47.jpeg'
import product48 from '../../assets/images/product/48.png'
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
    title: 'Quectel ',
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


export default MainConnectivityProduct; 