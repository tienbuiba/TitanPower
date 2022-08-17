import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Divider, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import FeedIcon from '@mui/icons-material/Feed';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from '@mui/styles';
import Toolbar from './ToolBar';
import Logo from './Logo';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import StorefrontIcon from '@mui/icons-material/Storefront';
import sections from '../config/sections';

const useStyles = makeStyles(function (theme) {
  return {
    linkAppBar: {
      '&:hover': {
        color: '#ff3366'
      }
    },
    linkAppBarSpecial: {
      '&:hover': {
        color: '#ff3366',
        display: 'block',
        width: '100%',
        height: '100%',
      }
    }
  }
})

function AppAppBar() {
  const classes = useStyles();
  const theme = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));
  const openToggleDrawer = () => {
    setIsOpen(true);
  };

  const closeToggleDrawer = () => {
    setIsOpen(false);
  };

  const renderListItem = () => (
    <Box
      sx={{ width: 270, height: '100%', bgcolor: '#fff' }}
      role="presentation"
    >
      <List>
        <ListItem button key={"About Us"} className={classes.linkAppBarSpecial}>
          <ListItemButton href='/aboutus'>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary={"ABOUT US"} />
            <Divider />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"Product"} className={classes.linkAppBarSpecial}>
          <ListItemButton href='/products'>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary={"PRODUCT"} />
            <Divider />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"Manufacture"} className={classes.linkAppBarSpecial}>
          <ListItemButton href='/manufacture'>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary={"MANUFACTURE"} />
            <Divider />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"Market"} className={classes.linkAppBarSpecial}>
          <ListItemButton href='/market'>
            <ListItemIcon>
              <StorefrontIcon />
            </ListItemIcon>
            <ListItemText primary={"MARKET"} />
            <Divider />
          </ListItemButton>
        </ListItem>
        <ListItem button key={"News"} className={classes.linkAppBarSpecial}>
          <ListItemButton href='/news'>
            <ListItemIcon>
              <FeedIcon />
            </ListItemIcon>
            <ListItemText primary={"NEWS"} />
            <Divider />
          </ListItemButton>
        </ListItem>
        <ListItem button key={"Contact"} className={classes.linkAppBarSpecial}>
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
    <Toolbar sx={{ p: '0px !important' }}
      component="nav"
      variant="dense">
      <Box sx={{ flex: 0, display: { lg: 'flex', md: 'none', xs: 'none', justifyContent: 'flex-start' } }} />
      <Button size="small" href="/" sx={{}}>
        <Logo />
      </Button>
      <Box sx={{ flex: 1, display: { lg: 'flex', md: 'none', xs: 'none' }, justifyContent: 'flex-end' }}>
        {sections.map((section) => (
          <Link
            className={classes.linkAppBar}
            color="inherit"
            fontSize={matchDownSM ? '14px' : '16px'}
            marginLeft={matchDownSM ? '5px' : '24px'}
            underline="none"
            sx={{
              color: '#000',
              p: 1,
              fontWeight: 500,
              flexShrink: 0
            }}
            noWrap
            key={section.title}
            href={section.url}
          >
            {section.title}
          </Link>
        ))}
        <Box>
          <IconButton>
            <SearchIcon sx={{ mx: 1 }} />
          </IconButton>
          <Button variant="contained" href="https://www.facebook.com/Titanpowerstore/" size="small" sx={{ textTransform: 'capitalize', }}>
            FB LinkedIn
          </Button>
        </Box>
      </Box>
      <Box sx={{ flex: 1, display: { lg: 'none', md: 'flex', xs: 'flex' }, justifyContent: 'flex-end' }}>
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
    </Toolbar>
  );
}

export default AppAppBar;