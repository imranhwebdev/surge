import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import bannerImg from '../assets/img/hero-right-img.png'
export default function Banner(){
    return(
        <div className="banner">
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <div className="banner-content">
                            <span className='text-primary d-block text-uppercase mb-3 fw-bold'>Treating Security as a Joke</span>
                            <h1 className='text-white'>Why Treating Security as a Joke is Risky Business.</h1>
                            <p className="text-white">Treating security as a joke can have serious consequences. With the increasing frequency of cyber attacks and data breaches, it is essential to take security seriously. Failing to do so can result in financial losses, damage to reputation, and even legal consequences.</p>
                            <a href="#" className="base-btn">Get Service</a>
                        </div>
                    </Col>
                    <Col lg={6} className='text-end'>
                        <div className="banner-img">
                            <img src={bannerImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
