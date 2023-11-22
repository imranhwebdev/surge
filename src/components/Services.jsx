import { React } from 'react'
import icon1 from '../assets/img/service/1.svg'
import icon2 from '../assets/img/service/2.svg'
import icon3 from '../assets/img/service/3.svg'
import { Col, Container, Row } from 'react-bootstrap'

export default function Services() {
    const service = [
        {
            id: 1,
            icon: icon1,
            title: 'Security Services',
            des: 'Security services encompass a wide range of measures designed to protect individuals, businesses, and organizations from a variety of threats.'
        },
        {
            id: 2,
            icon: icon2,
            title: 'Data Privacy',
            des: 'Security services encompass a wide range of measures designed to protect individuals, businesses, and organizations from a variety of threats.'
        },
        {
            id: 3,
            icon: icon3,
            title: 'Industry Certified',
            des: 'Security services encompass a wide range of measures designed to protect individuals, businesses, and organizations from a variety of threats.'
        }
    ]
    return (
        <section className="service" id='services'>
            <Container>
                <Row>
                    {service.map((item) => (
                        <Col lg={4} md={6} key={item.id}>
                            <div className="service-card">
                                <div className="d-flex align-items-center">
                                    <div className="service-icon">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className="service-content">
                                        <h4 className='mb-0'>
                                            {item.title}
                                        </h4>
                                    </div>
                                </div>
                                <p>
                                    {item.des}
                                </p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    )
}