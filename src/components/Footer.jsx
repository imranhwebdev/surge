import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer(){
    const currentYear = new Date().getFullYear();
    const Copyright = `© ${currentYear} Surge. All rights reserved.`;
    return(
        <footer className="footer text-center">
           <Container>
            <Row>
                <Col>
                   <p>{Copyright}</p>
                </Col>
            </Row>
           </Container>
        </footer>
    )
}