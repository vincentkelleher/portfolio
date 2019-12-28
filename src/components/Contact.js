import React from 'react';
import anime from 'animejs';
import { Row, Col } from 'react-bootstrap';
import './Contact.scss';
import Footer from './Footer';

export default class Contact extends React.Component {

    sentences = ["Un projet", "Un besoin"];

    constructor(props) {
        super(props);

        this.state = {
            sentenceIndex: 0
        };
    }

    componentDidMount() {
        this.animate();
    }

    componentDidUpdate() {
        this.animate();
    }

    animate() {
        anime({
            targets: '#contact-questions > .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 900,
            delay: (el, i) => 60 * i,
            complete: animation => {
                setTimeout(() => {
                    this.setState({
                        sentenceIndex: (this.state.sentenceIndex + 1) % this.sentences.length
                    });
                }, 1000);
            }
        });
    }

    render() {
        return (
            <Row id="contact" className="snap-scroll-section full-height">
                <svg className="d-none d-lg-block" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 100,0 
                        Q 0,0,40,100
                        L 100,100
                        L 100,0
                        Z" vectorEffect="non-scaling-stroke"/> 
                </svg>
                <svg className="d-lg-none" width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 0,15 
                        Q 25,10,50,15
                        Q 75,20,100,15
                        L 100,85
                        Q 75,90,50,85
                        Q 25,80,0,85
                        L 0,15
                        Z" vectorEffect="non-scaling-stroke"/> 
                </svg> 
                <Col sm={{ span: 12}} lg={{ span: 9, offset: 3 }} className="align-middle">
                    <div id="contact-text">
                        <h1 id="contact-questions">
                            { 
                                this.sentences[this.state.sentenceIndex]
                                    .split('')
                                    .map((l, i) => React.createElement('span', { key: i, className: 'letter' }, l === ' ' ? '\u00A0' : l))
                            } ?
                        </h1>
                        <h1 id="contact-email">Contactez moi sur <a href="mailto:contact@vincent-kelleher.com">contact@vincent-kelleher.com</a></h1>
                    </div>
                </Col>
                <Footer></Footer>
            </Row>
        );
    }
}