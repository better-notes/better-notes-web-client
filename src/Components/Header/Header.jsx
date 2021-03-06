import React from 'react';
import './Header.css';
import { Container } from 'react-bootstrap';
import { ReactComponent as Logo } from './ico.svg';

function Header() {
  return (
    <div className="header">
      <Container>
        <div className="headerWrapper">
          <Logo className="logo" />
        </div>
      </Container>
    </div>
  );
}

export default Header;
