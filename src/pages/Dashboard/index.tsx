import React from 'react';
import { Link } from 'react-router-dom';
import { FaCar } from 'react-icons/fa';

import { Container, Box } from './styles';

import Menu from '../../components/Menu';

const Dashboard: React.FC = () => {
  return (
    <>
      <Menu />
      <Container>
        <h1>Tornando às revendas de veículos mais eficientes</h1>
        <p>
          Gestão de veículos, emissor de notas fiscais eletrônicas, integrador
          web, site para sua revenda e muito mais.
        </p>
        <Box>
          <div>
            <FaCar size={50} />
          </div>
          <div>
            <span>Veículos</span>
            <p>Pesquise os modelos existentes através da Placa do Carro.</p>
            <Link to="/search">Acessar</Link>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default Dashboard;
