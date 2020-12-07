import React from 'react';
import './Header.css'
import { Container } from 'react-bootstrap'
import { ReactComponent as Logo } from './ico.svg';

class Header extends React.Component {
    render() {
        return (
            <div className='header'>
                <Container>
                    <div className='headerWrapper'>
                        <Logo className='logo' />
                        <input className='searchInput' type="text" placeholder="Search"></input>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Header