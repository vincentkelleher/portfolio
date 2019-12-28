import React from 'react';
import anime from 'animejs';
import { Row, Col } from 'react-bootstrap';
import './Footer.scss';

export default class Footer extends React.Component {

    componentDidMount() {
        anime({
            targets: "#footer #heart",
            duration: 1500,
            scale: [ 1.1, 1, 1.1, 0.8 ],
            easing: 'easeInOutSine',
            loop: true
        });
    }

    render() {
        return (
            <Row id="footer">
                <Col lg="12">
                    <span>Built with <span id="heart">❤</span> and <a href="http://reactjs.org">React</a> by Vincent Kelleher.</span>
                </Col>
            </Row>
        );
    }
}