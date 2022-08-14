import ApolloLogo from '.././assets/images/Logo/logo.png';

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
