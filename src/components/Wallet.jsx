import React, { useState } from 'react';
import { Col, Container, Row, Tab, Nav } from 'react-bootstrap';
import SectionTitle from './SectionTitle';
import WalletRightImg from '../assets/img/trading_wallet_right-img2.png';
import Eip from '../assets/img/eip.png';
import key from '../assets/img/key.png';
import eip_arrow from '../assets/img/eip_arrow.png';
import self from '../assets/img/self-icon.png';
import automation from '../assets/img/automation_icon.png';

export default function Wallet() {
    const Title = 'Security';
    const Desc ='Your Assets, Your Control. We never store your private keys.';
    const BtnText ='Read More';
    const Btnlink ='https://google.com';
    const Title2 = 'Self-Sovereignty';
    const Desc2 ='You decide - automated trading or manual control.';
    const BtnText2 ='Read More';
    const Btnlink2 ='https://google.com';
    const Title3 = 'Automation';
    const Desc3 ='Trade smarter with customizable trading strategies.';
    const BtnText3 ='Read More';
    const Btnlink3 ='https://google.com';
    const Title4 = 'Efficiency';
    const Desc4 ='Seamless and swift execution of your trades.';
    const BtnText4 ='Read More';
    const Btnlink4 ='https://google.com';

    const [rotationAngle, setRotationAngle] = useState('0deg');

    const handleTabClick = (tabKey) => {
        // Set the rotation angle based on the active tab
        let newRotationAngle = '0deg';

        switch (tabKey) {
            case 'first':
                newRotationAngle = '0deg';
                break;
            case 'second':
                newRotationAngle = '90deg';
                break;
            case 'third':
                newRotationAngle = '180deg';
                break;
            case 'four':
                newRotationAngle = '270deg';
                break;
            // Add more cases for additional tabs if needed

            default:
                break;
        }

        setRotationAngle(newRotationAngle);
    };

    // const customStyles = {
    //     marginTop: 
    //         rotationAngle === '0deg' ? '-9px' :
    //         rotationAngle === '90deg' ? '-20px' :
    //         rotationAngle === '180deg' ? '15px' :
    //         rotationAngle === '270deg' ? '21px' : '0px',
    
    //     marginLeft: 
    //         rotationAngle === '0deg' ? '-12px' :
    //         rotationAngle === '90deg' ? '7px' :
    //         rotationAngle === '180deg' ? '10px' :
    //         rotationAngle === '270deg' ? '-8px' : '0px',            
    // };
    // const mediaQueryStyles = {
    //     '@media (max-width: 992px)': {
    //         // Apply styles for devices with a maximum width of 992px
    //         marginTop: 
    //             rotationAngle === '0deg' ? '-5px' :
    //             rotationAngle === '90deg' ? '-9px' :
    //             rotationAngle === '180deg' ? '15px' :
    //             rotationAngle === '270deg' ? '21px' : '0px',
        
    //         marginLeft: 
    //             rotationAngle === '0deg' ? '-5px' : 
    //             rotationAngle === '90deg' ? '-12px' :
    //             rotationAngle === '180deg' ? '10px' :
    //             rotationAngle === '270deg' ? '-8px' : '0px',
    //     },
    // };
    

    const combinedStyles = {
        transform: `rotate(${rotationAngle})`,
        transition: 'transform 0.5s ease-in-out',
        // ...customStyles, // Include the custom styles
        // ...mediaQueryStyles,
    };

    return (
        <div className="wallet__area" id='wallet'>
            <Container>
                <SectionTitle 
                        title='A Purpose Built Trading Wallet' 
                        des='Unlock the Future of Crypto Trading with Our Innovative Wallet' 
                />
            </Container>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row className='align-items-center'>
                        <Col md='6'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <div className="wallet_single_box">
                                        <h3>{Title}</h3>
                                        <p>{Desc}</p>
                                        <a target='_blank' href={Btnlink} className='inline__btn'>{BtnText}</a>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <div className="wallet_single_box">
                                        <h3>{Title2}</h3>
                                        <p>{Desc2}</p>
                                        <a target='_blank' href={Btnlink2} className='inline__btn'>{BtnText2}</a>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <div className="wallet_single_box">
                                        <h3>{Title3}</h3>
                                        <p>{Desc3}</p>
                                        <a target='_blank' href={Btnlink3} className='inline__btn'>{BtnText3}</a>
                                    </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four">
                                    <div className="wallet_single_box">
                                        <h3>{Title4}</h3>
                                        <p>{Desc4}</p>
                                        <a target='_blank' href={Btnlink4} className='inline__btn'>{BtnText4}</a>
                                    </div>
                                </Tab.Pane>
                            </Tab.Content> 
                        </Col>
                        <Col md='6'>
                            <figure className='w_i'>
                                <img
                                    src={WalletRightImg}
                                    alt="Wallet Image"
                                    style={combinedStyles}
                                />
                                <div className="all_click_icons" id={rotationAngle} style={{ transform: `translate(-50%, -50%) rotate(${rotationAngle})`,  transition: 'transform 0.5s ease-in-out' }}>
                                    <Nav.Link eventKey="first" className='sc' onClick={() => handleTabClick('first')}>
                                        <img src={key} alt="" />
                                    </Nav.Link>
                                    <Nav.Link eventKey="second" className='ss' onClick={() => handleTabClick('second')}>
                                    <img src={eip_arrow} alt="" />
                                    </Nav.Link>
                                    <Nav.Link eventKey="third" className='au' onClick={() => handleTabClick('third')}>
                                    <img src={automation} alt="" />
                                    </Nav.Link>
                                    <Nav.Link eventKey="four" className='eff' onClick={() => handleTabClick('four')}>
                                    <img src={self} alt="" />
                                    </Nav.Link>
                                </div>
                                <span className='eip'>
                                    <img src={Eip} style={{ transform: `rotate(${rotationAngle})`,  transition: 'transform 0.5s ease-in-out' }} alt="" />
                                </span>
                            </figure>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
}
