import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Avatar, Divider, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from './ToolBar';
import Button from '@mui/material/Button'
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import sections from '../../config/sections';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Logo from '../../assets/images/Logo/logo.png'
import { useLocation } from 'react-router-dom';



const link = {
  '&:hover': {
    color: '#ff3366'
  }
}

const linkAppBarSpecial = {
  '&:hover': {
    color: '#ff3366',
    display: 'block',
    width: '100%',
    height: '100%',
  }
}

function AppAppBar() {
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const openToggleDrawer = () => {
    setIsOpen(true);
  };

  const location = useLocation();
  const selectedIndex = React.useMemo(() => {
    return sections.findIndex((Item) => Item.url === location.pathname);
  }, [location]);



  const closeToggleDrawer = () => {
    setIsOpen(false);
  };

  const renderListItem = () => (
    <Box
      sx={{ width: 270, height: '100%', bgcolor: '#fff' }}
      role="presentation"
    >
      <List>
        <ListItem button key={"About Us"} sx={linkAppBarSpecial}>
          <ListItemButton href='/aboutus'>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"ABOUT US"} />
            <Divider />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"Product"} sx={linkAppBarSpecial}>
          <ListItemButton href='/products'>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary={"PRODUCT"} />
            <Divider />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"Manufacture"} sx={linkAppBarSpecial}>
          <ListItemButton href='/manufacturers'>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary={"MANUFACTURE"} />
            <Divider />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"Market"} sx={linkAppBarSpecial}>
          <ListItemButton href='/market'>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary={"MARKET"} />
            <Divider />
          </ListItemButton>
        </ListItem>
        <ListItem button key={"Contact"} sx={linkAppBarSpecial}>
          <ListItemButton href='/contact'>
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <ListItemText primary={"CONTACT"} />
            <Divider />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Toolbar
      component="nav"
      sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
      variant="dense">
      <Link size="small" href="/" sx={{  height: '55px', width: '55px' }}>
        <img src={Logo} alt="Apollo" width="100%" height="55px"
          style={{
            opacity: '1',
            transition: 'opacity .4s',
            display: 'block'
          }} />
      </Link>
      <Box sx={{  display: { lg: '-webkit-flex', md: 'none', xs: 'none' }, justifyContent: 'flex-end' }}>
        {sections.map((section, index) => (
          <Link
            sx={{
              color: () => selectedIndex === index ? "#ff3366" : "#000",
              p: 1,
              fontWeight: 500,
              '&:hover': {
                color: '#ff3366'
              },
            }}
            color="inherit"
            fontSize={matchDownSM ? '14px' : '16px'}
            marginLeft={matchDownSM ? '5px' : '24px'}
            underline="none"
            noWrap
            key={section.title}
            href={section.url}

          >
            {section.title}
          </Link>
        ))}
        <Box sx={{ ml: 11 }}>
          <Link href="https://www.facebook.com/Titanpowerstore/" sx={link}  >
            <FacebookIcon sx={{ m: 1 }} size="medium" />
          </Link>
          <Link href="https://www.linkedin.com/company/82785234/admin/" sx={link} >
            <LinkedInIcon sx={{ m: 1 }} size="medium" />
          </Link>
        </Box>
      </Box>
      <Box sx={{  display: { lg: 'none', md: '-webkit-flex', xs: 'flex' }, justifyContent: 'flex-end' }}>
        <IconButton
          size="large"
          aria-label="menu"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={openToggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={'right'}
          open={isOpen}
          onClose={closeToggleDrawer}
        >
          {renderListItem()}
        </Drawer>
      </Box>
    </Toolbar >
  );
}

export default AppAppBar;