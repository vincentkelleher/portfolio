import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Resume.scss';
import Experience from './Experience';

export default () => {

    return (
        <Row id="resume">
            <Col lg="8">
                <h2>Expérience</h2>
                <Experience>
                    <Experience.Date>mai 2019 - mars 2020</Experience.Date>
                    <Experience.Project></Experience.Project>
                </Experience>
            </Col>

            <Col lg="4">
                <h2>Compétences</h2>
            </Col>
        </Row>
    );
}
