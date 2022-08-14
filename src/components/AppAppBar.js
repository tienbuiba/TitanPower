import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import FeaturedPlayListIcon from '@mui/icons-material/FeaturedPlayList';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ListItemButton from '@mui/material/ListItemButton';
import { makeStyles } from '@mui/styles';
import AppBar from './AppBar';
import Toolbar from './ToolBar';
import Logo from './Logo';
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles(function (theme) {
  return {
    linkAppBar: {
      '&:hover': {
        color: '#ff3366'
      }
    },
    linkAppBarSpecial: {
      '&:hover': {
        color: '#ffffff'
      }
    }
  }
})

function AppAppBar({sections}) {
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
      sx={{ width: 250, height: '100%', bgcolor: '#ffffff' }}
      role="presentation"
    >
      <List>
        <ListItem button key={"BANKING & CARD"}>
          <ListItemButton href='/'>
            <ListItemIcon>
              <AccountBalanceIcon />
            </ListItemIcon>
            <ListItemText primary={"BANKING & CARD"} />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"PRODUCT"}>
          <ListItemButton href='/'>
            <ListItemIcon>
              <CreditCardIcon />
            </ListItemIcon>
            <ListItemText primary={"PRODUCT"} />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"FEATURES"}>
          <ListItemButton href='/'>
            <ListItemIcon>
              <FeaturedPlayListIcon />
            </ListItemIcon>
            <ListItemText primary={"FEATURES"} />
          </ListItemButton >
        </ListItem>
        <ListItem button key={"PRIVILEGES"}>
          <ListItemButton href='/'>
            <ListItemIcon>
              <CardGiftcardIcon />
            </ListItemIcon>
            <ListItemText primary={"PRIVILEGES"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Toolbar sx={{ p:0}} 
     component="nav"
 variant="dense">
    <Box sx={{ flex: 0, display: { lg: 'flex', md: 'none', xs: 'none', justifyContent: 'flex-start' } }} />
    <Button size="small" href="/"  sx={{ }}>
      <Logo />
    </Button>
    <Box sx={{ flex: 1, display: { lg: 'flex', md: 'none', xs: 'none' }, justifyContent: 'flex-end' }}>
      {sections.map((section) => (
        <Link
          className={classes.linkAppBar}
          color="inherit"
          variant={matchDownSM ? 'body2' : 'h6'}
          fontSize={matchDownSM ? '10px' : '14px'}
          marginLeft={matchDownSM ? '5px' : '24px'}
          underline="none"
          sx={{
            color: '#000',
            p: 1,
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
        <Button variant="contained" size="small" sx={{ textTransform: 'capitalize', }}>
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