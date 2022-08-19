import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import sections from '.././config/sections'
import { Button, Divider, Grid, TextField, Typography } from '@mui/material';
import Map from '../components/Map';
import Footer from '../components/layout/Footer';
import AppAppBar from '../components/layout/AppAppBar';
import ContactBanner from '../components/banners/ContactBanner';
import contactbanner from '../config/banners/contactbanner';
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const theme = createTheme();
export default function Contact() {

  const [subject, setSubject] = React.useState('');
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const form = React.useRef();
  var templateParams = {
    name: name,
    email: email,
    subject: subject,
    message: message
  };
  
  const handleClick = (e) => {
    if (name !== '' && email !== '' && subject !== '' && message !== '') {
      emailjs.send('service_nryc0it', 'template_cq86nyh', templateParams, '4fIiSEc_2JNSoSB1q')
        .then(function (response) {
          toast.success('We will send you our best offers, once a week', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setName('')
          setEmail('')
          setMessage('')
          setSubject('')
          console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
          console.log('FAILED...', error);
          setName('')
          setEmail('')
          setMessage('')
          setSubject('')
        });
    }
    else {
      toast.error('Please enter value', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    }



  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppAppBar sections={sections} />
        <Divider />
      </Container>
      <main>
        <ContactBanner banner={contactbanner} />
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ mb: 9, mt: 3 }}>
            <Grid item xs={12} md={6}>
              <Typography component="h1" variant="h4" sx={{ fontWeight: "bold", wordSpacing: '0.1' }}>
                Feel free to contact us.
                We&apos;ll be glad to hear from you, buddy.
              </Typography>
              <form ref={form} style={{ marginTop: '20px' }}>
                <Grid container spacing={2.8}>
                  <Grid item xs={12} >
                    <TextField
                      fullWidth
                      id="Name"
                      label="Your name"
                      name="Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="email"
                      label="Your email"
                      name="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="Subject"
                      label="Subject"
                      type="text"
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name="Enter your message here"
                      label="Enter your message here"
                      type="text"
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                    />
                  </Grid>
                  <Grid item>
                    <Button onClick={handleClick} variant="contained" size="large" sx={{ mt: 2 }}>
                      Submit Now
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12} md={6}>
              <Map
              />
            </Grid>
          </Grid>
        </Container>
      </main>
      <Footer
        title="Footer"
      />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  );
}