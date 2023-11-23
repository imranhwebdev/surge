import {React} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionTitle from './SectionTitle'
export default function Trade(){
    return(
        <div className="trade__area" id='trade'>
            <Container>
                <SectionTitle 
                        title='A Comprehensive Trading Suite' 
                        des='Our versatile platform allows users to take advantage of various features to automate their trading journey' 
                />
            </Container>
           
        </div>
    )
}
