import { Row, Col, Button } from 'reactstrap'
import { TEXT } from './shared/text'
import Iframe from 'react-iframe'
import React from 'react'

const Header = (props) => {
    return (
        <React.Fragment>
            <Row>
                <Col xs='12'>
                    <img src='/images/home3.jfif' className='home-image' />
                </Col>
            </Row>
            <div className='container-div'>
                <Row>
                    <Col xs='12' sm='8' >
                        <h2 className='home-title' > {TEXT[props.lang].title}<br/><span style={{fontSize:"1.5rem"}}>Conjoint Choice Based Survey</span></h2>
                    </Col>
                    <Col xs='12' sm='auto' className='align-self-center text-center'>
                        <Button onClick={() => props.langF('it')} className='italian-button'>IT </Button>
                        <Button onClick={() => props.langF('en')} className='english-button'>EN</Button>
                    </Col>
 
                    <Col xs='12'>
                        {TEXT[props.lang].description}
                    </Col>
                    <Col xs='12' className='text-center iframe-container'>
                        <h4>{TEXT[props.lang].title} {props.lang == 'it' ? <span>Dimostrazione</span> : <span>Showing off</span>}</h4>
                        <Iframe url={TEXT[props.lang].url}
                            width= "90%"
                            height="200%"
                          
                            allowFullScreen
                            allow="fullscreen"/>
                    </Col>

                <Col xs='12' className='text-center button-go-form'>
                <Button color='success' onClick={()=>{ document.getElementById('title').scrollIntoView({behavior: "smooth"})}}>Start Now</Button></Col>
                </Row>
                <hr/>
            </div>
            </React.Fragment>
    )
}

export default Header