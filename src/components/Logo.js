import ApolloLogo from '../assets/images/logo/logo.png';
import {React} from 'react';

const Logo = () => {
    return (
        <img src={ApolloLogo} alt="Apollo" width="100%" height="60px" 
        style={{
            opacity: '1',
            transition: 'opacity .4s'
        }} />
    );
};

export default Logo;
