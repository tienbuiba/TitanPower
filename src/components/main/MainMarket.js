import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import image1 from '../../assets/images/market/image1.jpg'
import image2 from '../../assets/images/market/image2.jpg'
import image3 from '../../assets/images/market/image3.jpg'
import image4 from '../../assets/images/market/image4.jpg'
import image5 from '../../assets/images/market/image5.jpg'
import image6 from '../../assets/images/market/image6.jpg'




const market = [

  {
    id: 1,
    src: image1,
    altText: 'Slide 1',
    heading: 'Telecom',
    title: `
    Antenna, Radar, Base station
    `,
    description: `Vietnam’s telecommunication market is becoming more attractive to foreign investors as it has returned to the growth path in the first half of 2019 after a long period of saturation.
    According to a press release, foreign investors have big opportunities in Vietnam’s growing telecom sector. This is because the government considers it a key driver for the country’s digital economy and will step up the divestment from state-owned telco corporations.
    According to experts, the government’s plans for the Fourth Industrial Revolution, smart cities, start-ups, and the National Innovation Network Program, enabled by state-of-the-art 4G and 5G, IoT, and mobile telecommunication networks, are helping the ICT sector continue to record strong revenue growth.
    There is room to grow for foreign investors in Vietnam’s telecommunication industry. The number of households with internet access at home is only 27 per 100 households while only 9.3% of Vietnamese households have a fixed-line telephone, an industry expert said.
    The number of mobile subscribers with a 3G data connection is also still below the world average (39 subscribers per 100 people) while the number of subscribers with a 4G data connection is much lower and the 5G network has only been deployed on a trial basis in Vietnam.`

  },
  {
    id: 2,
    src: image2,
    altText: 'Slide 2',
    heading: 'Mobile',
    title: `  Computer
    Laptop, Tablet
    `,
    description: `Vietnam has great potential, which will help digital transformation proceed quickly and with fewer risks than many other countries. A report from We Are Social and Hootsuite showed a high proportion of internet and mobile phone users. Vietnam has 96.9 million people, but has 145.8 million mobile phone subscribers (150 percent of population), 68.17 million internet users and 65 million social network users.
    Around 94 percent of Vietnamese own mobile devices, 65 percent use laptops and desktop computers, and 22 percent use tablets.Demand for mobile services and internet has been increasing rapidly.Meanwhile, because of the stiff competition, businesses have to carry out digital transformation in order to grow and compete with rivals.A survey conducted in Asia Pacific by Microsoft found that the impact of the digital transformation on GDP would be 60 percent in 2021.Meanwhile, a study by Google and Temasek predicted that Vietnam’s digital economy may have value of $30 billion by 2025.`

  },

  {
    id: 4,
    src: image4,
    altText: 'Slide 4',
    heading: 'Automotive',
    title: `
    Electric Car, Electric Bike
    
    `,
    description: `With a population of about 100 million, more than 60 % of Vietnam’s population owns motorcycles. Vietnam’s car ownership rate of 5.7% in 2020 is still much lower than other markets in Asia. This rate is expected to increase to 9% by 2025 and 30% by 2030, making Vietnam one of the countries with the fastest-growing demand for passenger vehicles at a 10.5% growth rate.
    Vietnam has a young population, and an increasing middle class with strong interest in cutting edge technologies, fuel efficiency, and environmental awareness. These are opportunities for the EV market to grow at a double-digit rate in the coming years.
    The growing demand of passenger vehicles, the popularity of ride-sharing fleets, the prevalence of gas-powered motorbikes, have all led to high levels of air pollution and traffic congestion in urban cities like Hanoi, and Ho Chi Minh. To combat pollution, the Government have put forth regulations to gradually restrict motorbikes on city streets by 2030 in its major cities which paves the way for EVs’ adoption within the country. 
    `

  },
  {
    id: 5,
    src: image5,
    altText: 'Slide 5',
    heading: '  IOT module',
    title: `  
    IOT devices,
     Drone   
    `,
    description: `Vietnam internet of things market stood at USD 2022.21 Million in 2019 and is projected to grow at a CAGR of around 24.03 % to reach USD 7321.92 Million by 2025. Increasing in adoption of IoT solutions across enterprises, growing number of connected devices and increasing proliferation of smartphones to drive Vietnam internet of things market through 2025.
    Significant increase in data generation and rising demand for analytics, owing to the surging deployment of IoT devices and increasing demand for analytics in manufacturing is supplementing the growth of internet of things market in Vietnam.
    Vietnam internet of things market can be segregated based on platform, component, type, application and region. Based on component, hardware accounted for 42.42% share in 2019 and the trend is anticipated to continue until 2025 due to increasing adoption of IoT in various end user industries for improving operational efficiency. In terms of regional analysis, Northern Vietnam led the market in 2019 and the trend is likely to continue through 2025 due to government initiatives in the region such as smart grid and smart city. In addition, majority of companies have their headquarters in the region; thereby, positively influencing the growth of the market`
  },
  {
    id: 6,
    src: image6,
    altText: 'Slide 6',
    heading: 'Home appliance',
    title: `
    Smart home, Lighting
    
    `,
    description: `Vietnam has a young population structure, abundant labor force and low cost, which provides favorable conditions for the development of home appliance industry and attracts many foreign home appliance companies to settle in Vietnam, such as Midea, Haier, Toshiba, Panasonic, Sharp, Gree, Nepal, Samsung, LG, AQUA and other home appliance companies have invested and built factories in Vietnam.
    In terms of economic growth, Vietnam's economy has maintained rapid growth for many years since the 1986 reform. 2020 Vietnam's GDP grew by 2.91%. 2021 Vietnam's GDP rose to 362.619 billion USD, a real growth of 2.58%. Despite the decline in growth rate due to the New Crown Pneumonia epidemic, it is still one of the countries in the world that have achieved positive economic growth. Foreign investment is also increasingly favorable to Vietnam. The processing and manufacturing industry has become the most attractive area for foreign investment. This indicates that foreign investors have placed high trust in Vietnam in the global supply chain. 2021 yearly Vietnam attracted a total of $30 billion in foreign investment, up 2% year-on-year`

  },
 
  {
    id: 3,
    src: image3,
    altText: 'Slide 3',
    heading: 'Industry',
    title: `Automation, Medical, Machine
    `,
    description: `Vietnam’s machinery and equipment industry has been growing significantly, contributing to increased GDP and sub-sector industries. Vietnam Briefing takes an in-depth look and highlights key trends and opportunities for foreign investors in the industry as Vietnam pushes ahead with its growing economy.
    Vietnam’s machinery and equipment sector has expanded substantially in the last decade. This is proved by the net revenue recorded by companies operating in this industry increasing at a compound annual growth rate (CAGR) of 14.3 percent between 2010 and 2019. Until 2020, there were over 2,200 companies specializing in the production of machinery and equipment in Vietnam, earning total revenue of US$4.6 billion.
    Major suppliers of machinery to Vietnam have been Asian countries including China, South Korea, Japan, and Taiwan. These accounted for around 70 percent of the foreign sources for machinery in the Vietnamese market owing to their competitive prices and prevailing consumer preference. Other notable exporters have been ASEAN nations including Thailand, Malaysia, and Indonesia as well as western nations such as Germany, US, and Italy.`

  },

];
function MainMarket() {
  return (
    <>
      {market.map((item) => (
        <Grid item xs={12} sm={6} lg={4} key={item.id}>
          <CardActionArea component="a" href={`/market-detail/${item.id}`}>
            <Card sx={{ display: 'flex' }}>
              <CardContent>
                <div style={{ height: '250px' }}>
                  <img
                    src={item.src}
                    style={{ width: '100%', height: '90%', borderRadius: '5px' }}
                    alt="imagse"
                  />
                </div>
                <div style={{ padding: '4px' }}>
                <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
                    {item.heading}
                  </Typography>
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


export default MainMarket;