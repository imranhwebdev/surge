import { React, useState } from 'react'
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll} from 'react-scroll'
import logo from '../assets/img/logo.png'

export default function Header(){ 
    const [fix, setFix] = useState(false)
    function setFixed(){
        if(window.scrollY >= 392){
            setFix(true)
        }else{
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return(
        <header className={fix ? 'heading fixed' : 'heading'}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link to="wallet" spy={true} smooth={true} offset={50} duration={500}>Wallet</Link>
                        <Link to="trade" spy={true} smooth={true} offset={50} duration={500}>Trade</Link>
                        <Link to="snipe" spy={true} smooth={true} offset={50} duration={500}>Snipe</Link>
                        <Link to="community" spy={true} smooth={true} offset={50} duration={500}>Community</Link>
                        <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>FAQ</Link>
                    </Nav>
                    <Nav className='pe-5'>
                        <a href="/" className='base-btn bg-transparent'>Buy $SURGE</a>
                        <a href="/" className='base-btn bg-transparent'>Documents</a>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}