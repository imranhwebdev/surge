import { React } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer(){
    return(
        <footer className="footer text-center">
           <div className="container">
            <Row>
                <Col>
                Copyright © 2018 SnoopBees All Rights Reserved
                </Col>
            </Row>
           </div>
        </footer>
    )
}