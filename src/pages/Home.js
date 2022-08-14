import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturePost';
import Main from '../components/Main';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer';
import { Typography } from '@mui/material';
import aboutus from '.././config/aboutus'

import sections from '.././config/sections'
import sidebar from '.././config/sidebar'
import AppAppBar from '../components/AppAppBar';


const mainFeaturedPost = {
  title: 'Striving Towards Excellence',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  titleButton: 'OUR PRODUCT LINES',
};



const posts = [];
const theme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Titanpower" sections={sections} /> */}
        <AppAppBar sections={sections}/>
      </Container>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <Container maxWidth="lg">
          <Typography>OUR BUSINESS</Typography>
          <Grid container spacing={4}>
            {aboutus.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              archives={sidebar.archives}
              social={sidebar.social}
            />
            <Main title="From the firehose" posts={posts} />
          </Grid>
        </Container>
      </main>
      <Footer
        title="Footer"
      />
    </ThemeProvider>
  );
}