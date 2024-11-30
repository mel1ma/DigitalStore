import React from 'react';
import logo from '../../assets/images/logo-header.svg';
import logoft from '../../assets/images/logo-footer.svg';

const Logo = () => {
  return (
    <>
      <img 
      src={logo} 
      alt="logom digital Store" 
      width="253" 
      height="44" 
      style={{ marginLeft: '60px', marginTop: '15px'}} />
    </>
  );
};

const Logoft = () => {
  return (
    <>
      <img 
        src={logoft}
       alt="logom digital Store" 
        width="253" 
        height="44" 
      />
    </>
  );
}

export {Logo, Logoft};

