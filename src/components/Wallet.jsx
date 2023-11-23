import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
import WalletRightImg from '../assets/img/trading_wallet_right-img.png'
export default function Wallet(){
    const Title = 'Security';
    const Desc ='Your Assets, Your Control. We never store your private keys.';
    const BtnText ='Read More';
    const Btnlink ='https://google.com';
    return(
        <div className="wallet__area" id='wallet'>
            <Container>
                <SectionTitle 
                        title='A Purpose Built Trading Wallet' 
                        des='Unlock the Future of Crypto Trading with Our Innovative Wallet' 
                />
            </Container>
            <Container>
                <Row className='align-items-center'>
                   <Col md='6'>
                        <div className="wallet_single_box">
                            <h3>{Title}</h3>
                            <p>{Desc}</p>
                            <a href={Btnlink} className='inline__btn'>{BtnText}</a>
                        </div>
                   </Col>
                   <Col md='6'>
                        <figure className='w_i'>
                            <img src={WalletRightImg} alt="Wallet Image" />
                        </figure>
                   </Col>
                </Row>
            </Container>
           
        </div>
    )
}
