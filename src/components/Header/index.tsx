/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';

import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
  page?: string;
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const page = location.pathname === '/' ? '/dashboard' : location.pathname;
    setCurrentPage(page);
  }, []);

  return (
    <Container size={size} page={currentPage}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <NavLink
            activeClassName="active"
            isActive={() => currentPage === '/dashboard'}
            to="/"
          >
            Listagem
          </NavLink>
          <NavLink
            activeClassName="active"
            isActive={() => currentPage === '/import'}
            to="/import"
          >
            Importar
          </NavLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
