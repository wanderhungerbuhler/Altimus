import React, { useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import { Container, Logout } from './styles';

import logoImg from '../../assets/logo.svg';

const Menu: React.FC = () => {
  const handleLogout = useCallback(() => {
    localStorage.removeItem('@Altimus:email');
  }, []);

  return (
    <Container>
      <Link to="/">
        <img src={logoImg} alt="AltimusCar" />
      </Link>

      <Logout type="button" onClick={handleLogout}>
        <FiLogOut size={20} />
      </Logout>
    </Container>
  );
};

export default Menu;
