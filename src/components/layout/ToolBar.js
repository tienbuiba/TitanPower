import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  backgroundColor:'#fff',
  [theme.breakpoints.up('sm')]: {
    height: 70,
    backgroundColor:'#fff',

  },
}));

export default Toolbar;