import {React} from 'react';

const Logo = () => {
    return (
        <img src={require('./../assets/images/logo/logo.png')} alt="Apollo" width="100%" height="60px" 
        style={{
            opacity: '1',
            transition: 'opacity .4s'
        }} />
    );
};

export default Logo;
