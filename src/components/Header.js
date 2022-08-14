// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Toolbar from '@mui/material/Toolbar';
// import {Button,useMediaQuery} from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
// import Link from '@mui/material/Link';
// import Logo from './Logo';
// import { useTheme } from '@mui/system';

// function Header(props) {
//   const { sections } = props;

//   const theme =useTheme()
//   const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <React.Fragment>
//       <Toolbar sx={{ borderBottom: 1, borderColor: 'divider', justifyContent: 'space-between', display: `${matchDownSM ? 'none': 'block'}` }} >
//         <div style={{ display: 'flex' }}>
//           <Button size="small" href="/" >
//             <Logo />
//           </Button>
//           <Toolbar
//             component="nav"
//             variant="dense"
//             sx={{ justifyContent: 'space-between'}}
//           >
//             {sections.map((section) => (
//               <Link
//                 color="inherit"
//                 noWrap
//                 key={section.title}
//                 variant="body2"
//                 href={section.url}
//                 sx={{ p: 1, flexShrink: 0 }}
//               >
//                 {section.title}
//               </Link>
//             ))}
//           </Toolbar>
//         </div>
//         <div style={{ display: 'flex', gap: '10px'}}>
//           <IconButton>
//             <SearchIcon />
//           </IconButton>
//           <Button variant="contained" size="small" sx={{ textTransform: 'capitalize',}}>
//             FB LinkedIn
//           </Button>
//         </div>
//       </Toolbar>
//     </React.Fragment>
//   );
// }

// Header.propTypes = {
//   sections: PropTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//       url: PropTypes.string.isRequired,
//     }),
//   ).isRequired,
//   title: PropTypes.string.isRequired,
// };

// export default Header;